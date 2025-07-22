# Technical Implementation Guide - ABPM Integration

## Overview

This guide provides the technical specifications for implementing ABPM integration with the updated navigation structure. It covers API changes, frontend modifications, and integration patterns.

## Navigation Structure Changes

### 1. Top-Level Navigation Update

#### Current State
```typescript
const topNav = [
  { label: 'Patients', route: '/patients' },
  { label: 'Holter Studies', route: '/holter-studies' }
];
```

#### Target State
```typescript
const topNav = [
  { label: 'Patients', route: '/patients' },
  { label: 'Studies', route: '/studies' }
];
```

#### Migration Steps
1. Update navigation component to use new label
2. Create redirect from `/holter-studies` to `/studies?type=holter`
3. Update all internal links
4. Maintain backward compatibility for bookmarks

### 2. Patient Detail Tabs

#### New Tab Structure
```typescript
interface PatientTab {
  id: string;
  label: string;
  route: string;
  icon?: string;
  requiresStudy?: StudyType;
}

const patientTabs: PatientTab[] = [
  { id: 'summary', label: 'Summary', route: 'summary' },
  { id: 'studies', label: 'Studies', route: 'studies' },
  { id: 'ecg', label: 'ECG', route: 'ecg', icon: 'ecg', requiresStudy: 'holter' },
  { id: 'bp', label: 'Blood Pressure', route: 'blood-pressure', icon: 'bp', requiresStudy: 'abpm' },
  { id: 'reports', label: 'Reports', route: 'reports' }
];
```

#### Tab Visibility Logic
```typescript
function getVisibleTabs(patient: Patient, activeStudies: Study[]): PatientTab[] {
  return patientTabs.filter(tab => {
    if (!tab.requiresStudy) return true;
    return activeStudies.some(study => study.type === tab.requiresStudy);
  });
}
```

## API Specifications

### 1. Study Management APIs

#### Create Study Endpoint
```typescript
POST /api/v2/studies

interface CreateStudyRequest {
  patientId: string;
  type: 'holter' | 'abpm' | 'weight' | 'glucose';
  configuration: StudyConfiguration;
}

interface StudyConfiguration {
  duration: number; // hours
  startTime: string; // ISO 8601
  deviceSetup: 'in-clinic' | 'at-home';
  // Type-specific fields
  abpm?: {
    measurementInterval: number; // minutes
    nightModeStart: string; // HH:mm
    nightModeEnd: string; // HH:mm
  };
  holter?: {
    leadConfiguration: number;
    samplingRate: number;
  };
}

interface CreateStudyResponse {
  studyId: string;
  mvcpId: string;
  externalId?: string; // Sphygmo ID for ABPM
  status: 'created' | 'pending_sync';
}
```

#### List Studies Endpoint
```typescript
GET /api/v2/studies

interface ListStudiesParams {
  patientId?: string;
  type?: StudyType[];
  status?: StudyStatus[];
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}

interface StudyListItem {
  studyId: string;
  patientId: string;
  patientName: string;
  type: StudyType;
  status: StudyStatus;
  startTime: string;
  duration: number;
  progress?: number; // percentage
  metrics?: {
    holter?: { quality: number; events: number };
    abpm?: { readings: number; successRate: number };
  };
}
```

### 2. ABPM-Specific APIs

#### Sync with Sphygmo
```typescript
POST /api/v2/studies/{studyId}/sync

interface SyncRequest {
  action: 'create' | 'update' | 'complete';
  data?: any;
}

interface SyncResponse {
  syncStatus: 'success' | 'pending' | 'failed';
  externalId?: string;
  lastSyncTime: string;
  errors?: string[];
}
```

#### Get ABPM Iframe URL
```typescript
GET /api/v2/studies/{studyId}/abpm/iframe-url

interface IframeUrlResponse {
  url: string;
  token: string; // JWT for authentication
  expiresIn: number; // seconds
  permissions: string[];
}
```

## Frontend Implementation

### 1. Studies List Component

```tsx
interface StudiesListProps {
  filters: StudyFilters;
  onFilterChange: (filters: StudyFilters) => void;
}

const StudiesList: React.FC<StudiesListProps> = ({ filters, onFilterChange }) => {
  const { data: studies, loading } = useStudies(filters);
  
  return (
    <div className="studies-container">
      <StudiesFilters filters={filters} onChange={onFilterChange} />
      
      <table className="studies-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Type</th>
            <th>Study ID</th>
            <th>Started</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studies.map(study => (
            <StudyRow key={study.studyId} study={study} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const StudyRow: React.FC<{ study: StudyListItem }> = ({ study }) => {
  const icon = study.type === 'holter' ? <EcgIcon /> : <BpIcon />;
  const progress = study.status === 'active' ? (
    <ProgressBar value={study.progress} />
  ) : (
    <StatusBadge status={study.status} />
  );
  
  return (
    <tr>
      <td>{study.patientName}</td>
      <td>{icon} {study.type.toUpperCase()}</td>
      <td>{study.studyId}</td>
      <td>{formatDateTime(study.startTime)}</td>
      <td>{progress}</td>
      <td>
        <StudyActions study={study} />
      </td>
    </tr>
  );
};
```

### 2. Blood Pressure Tab Component

```tsx
interface BloodPressureTabProps {
  patientId: string;
  studyId?: string;
}

const BloodPressureTab: React.FC<BloodPressureTabProps> = ({ patientId, studyId }) => {
  const { data: activeStudy } = useActiveABPMStudy(patientId, studyId);
  const { data: iframeConfig } = useABPMIframeConfig(activeStudy?.studyId);
  
  if (!activeStudy) {
    return <NoActiveStudy type="ABPM" />;
  }
  
  return (
    <div className="bp-tab-container">
      <StudyHeader study={activeStudy} />
      
      <div className="study-metrics">
        <MetricCard 
          label="Readings" 
          value={`${activeStudy.metrics.readings}/${activeStudy.metrics.expected}`} 
        />
        <MetricCard 
          label="Success Rate" 
          value={`${activeStudy.metrics.successRate}%`} 
        />
        <MetricCard 
          label="Average BP" 
          value={`${activeStudy.metrics.avgSystolic}/${activeStudy.metrics.avgDiastolic}`} 
        />
      </div>
      
      <div className="sphygmo-container">
        <SphygmoIframe config={iframeConfig} />
      </div>
      
      <StudyActions study={activeStudy} />
    </div>
  );
};

const SphygmoIframe: React.FC<{ config: IframeConfig }> = ({ config }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Set up PostMessage communication
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== config.origin) return;
      
      switch (event.data.type) {
        case 'ready':
          // Send authentication token
          iframeRef.current?.contentWindow?.postMessage({
            type: 'authenticate',
            token: config.token
          }, config.origin);
          break;
        case 'navigation':
          // Handle navigation events
          console.log('Sphygmo navigation:', event.data.path);
          break;
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [config]);
  
  return (
    <iframe
      ref={iframeRef}
      src={config.url}
      className="sphygmo-iframe"
      sandbox="allow-same-origin allow-scripts allow-forms"
      title="Blood Pressure Analysis"
    />
  );
};
```

### 3. Create Study Modal

```tsx
const CreateStudyModal: React.FC<CreateStudyModalProps> = ({ patientId, onClose }) => {
  const [selectedType, setSelectedType] = useState<StudyType | null>(null);
  const [config, setConfig] = useState<StudyConfiguration>({});
  
  const studyTypes: StudyTypeOption[] = [
    {
      type: 'holter',
      label: 'Holter Study',
      icon: <EcgIcon />,
      available: true
    },
    {
      type: 'abpm',
      label: 'ABPM Study',
      icon: <BpIcon />,
      available: true
    },
    {
      type: 'weight',
      label: 'Weight Tracking',
      icon: <ScaleIcon />,
      available: false,
      availableDate: 'Q2 2025'
    },
    {
      type: 'glucose',
      label: 'Glucose Monitoring',
      icon: <GlucoseIcon />,
      available: false,
      availableDate: 'Q3 2025'
    }
  ];
  
  const handleCreate = async () => {
    const study = await createStudy({
      patientId,
      type: selectedType!,
      configuration: config
    });
    
    // Navigate to appropriate tab
    const route = selectedType === 'holter' ? 'ecg' : 'blood-pressure';
    navigate(`/patients/${patientId}/${route}`);
    onClose();
  };
  
  return (
    <Modal onClose={onClose}>
      <h2>Create New Study</h2>
      
      <div className="study-type-grid">
        {studyTypes.map(type => (
          <StudyTypeCard
            key={type.type}
            {...type}
            selected={selectedType === type.type}
            onSelect={() => type.available && setSelectedType(type.type)}
          />
        ))}
      </div>
      
      {selectedType && (
        <StudyConfiguration
          type={selectedType}
          config={config}
          onChange={setConfig}
        />
      )}
      
      <div className="modal-actions">
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button 
          variant="primary" 
          onClick={handleCreate}
          disabled={!selectedType}
        >
          Create Study
        </Button>
      </div>
    </Modal>
  );
};
```

## State Management

### 1. Study Store (Zustand)

```typescript
interface StudyStore {
  studies: Map<string, Study>;
  activeFilters: StudyFilters;
  
  // Actions
  fetchStudies: (filters?: StudyFilters) => Promise<void>;
  createStudy: (request: CreateStudyRequest) => Promise<Study>;
  updateStudy: (studyId: string, updates: Partial<Study>) => void;
  endStudy: (studyId: string) => Promise<void>;
  
  // Selectors
  getStudiesByPatient: (patientId: string) => Study[];
  getActiveStudies: (patientId: string) => Study[];
  getStudyByType: (patientId: string, type: StudyType) => Study | null;
}

const useStudyStore = create<StudyStore>((set, get) => ({
  studies: new Map(),
  activeFilters: {},
  
  fetchStudies: async (filters) => {
    const studies = await api.getStudies(filters);
    set({
      studies: new Map(studies.map(s => [s.studyId, s])),
      activeFilters: filters || {}
    });
  },
  
  createStudy: async (request) => {
    const study = await api.createStudy(request);
    set(state => ({
      studies: new Map(state.studies).set(study.studyId, study)
    }));
    
    // Trigger sync for ABPM studies
    if (study.type === 'abpm') {
      api.syncStudy(study.studyId, { action: 'create' });
    }
    
    return study;
  },
  
  // ... other methods
}));
```

### 2. Navigation State

```typescript
interface NavigationStore {
  activeTab: string;
  breadcrumbs: BreadcrumbItem[];
  
  setActiveTab: (tab: string) => void;
  pushBreadcrumb: (item: BreadcrumbItem) => void;
  popBreadcrumb: () => void;
}

const useNavigationStore = create<NavigationStore>((set) => ({
  activeTab: 'summary',
  breadcrumbs: [],
  
  setActiveTab: (tab) => set({ activeTab: tab }),
  
  pushBreadcrumb: (item) => set(state => ({
    breadcrumbs: [...state.breadcrumbs, item]
  })),
  
  popBreadcrumb: () => set(state => ({
    breadcrumbs: state.breadcrumbs.slice(0, -1)
  }))
}));
```

## Integration Patterns

### 1. MVCP-Sphygmo Communication

```typescript
class SphygmoIntegration {
  private messageQueue: Message[] = [];
  private authenticated = false;
  
  async initialize(studyId: string) {
    const config = await api.getIframeConfig(studyId);
    
    window.addEventListener('message', this.handleMessage);
    
    return {
      url: config.url,
      token: config.token,
      origin: new URL(config.url).origin
    };
  }
  
  private handleMessage = (event: MessageEvent) => {
    if (!this.isValidOrigin(event.origin)) return;
    
    switch (event.data.type) {
      case 'ready':
        this.authenticate(event.source as Window, event.origin);
        break;
      case 'studyUpdate':
        this.handleStudyUpdate(event.data.payload);
        break;
      case 'reportGenerated':
        this.handleReportGenerated(event.data.payload);
        break;
    }
  };
  
  private authenticate(target: Window, origin: string) {
    target.postMessage({
      type: 'authenticate',
      token: this.config.token
    }, origin);
    
    this.authenticated = true;
    this.flushMessageQueue(target, origin);
  }
  
  sendMessage(type: string, payload: any) {
    const message = { type, payload, timestamp: Date.now() };
    
    if (this.authenticated) {
      this.iframe.contentWindow?.postMessage(message, this.config.origin);
    } else {
      this.messageQueue.push(message);
    }
  }
}
```

### 2. Real-time Updates

```typescript
class StudyRealtimeSync {
  private ws: WebSocket;
  private reconnectAttempts = 0;
  
  connect(studyId: string) {
    const wsUrl = `${WS_BASE_URL}/studies/${studyId}/updates`;
    this.ws = new WebSocket(wsUrl);
    
    this.ws.onopen = () => {
      console.log('Connected to study updates');
      this.reconnectAttempts = 0;
    };
    
    this.ws.onmessage = (event) => {
      const update = JSON.parse(event.data);
      this.handleUpdate(update);
    };
    
    this.ws.onerror = () => {
      this.reconnect();
    };
  }
  
  private handleUpdate(update: StudyUpdate) {
    switch (update.type) {
      case 'measurement':
        useStudyStore.getState().updateStudy(update.studyId, {
          metrics: update.metrics,
          lastUpdate: update.timestamp
        });
        break;
      case 'status':
        useStudyStore.getState().updateStudy(update.studyId, {
          status: update.status
        });
        break;
    }
  }
  
  private reconnect() {
    if (this.reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
      setTimeout(() => {
        this.reconnectAttempts++;
        this.connect(this.studyId);
      }, RECONNECT_DELAY * this.reconnectAttempts);
    }
  }
}
```

## Migration Strategy

### Phase 1: Navigation Update (Week 1)
1. Update top navigation labels
2. Add redirects for backward compatibility
3. Update internal links

### Phase 2: Studies Unification (Week 2)
1. Create unified studies list component
2. Add study type filtering
3. Update study creation flow

### Phase 3: Patient Tab Restructure (Week 3)
1. Implement new tab structure
2. Create Blood Pressure tab
3. Update Summary tab with study links

### Phase 4: ABPM Integration (Week 4-5)
1. Implement Sphygmo iframe integration
2. Set up PostMessage communication
3. Add real-time updates

### Phase 5: Testing & Polish (Week 6)
1. End-to-end testing
2. Performance optimization
3. User acceptance testing

## Performance Considerations

1. **Iframe Loading**
   - Lazy load Sphygmo iframe
   - Show skeleton while loading
   - Cache iframe URL with TTL

2. **Data Fetching**
   - Implement pagination for studies list
   - Use React Query for caching
   - Prefetch common queries

3. **Real-time Updates**
   - Debounce frequent updates
   - Use WebSocket for active studies only
   - Implement exponential backoff

## Security Considerations

1. **Iframe Security**
   - Strict CSP headers
   - Origin validation
   - Token expiration

2. **API Security**
   - JWT authentication
   - Rate limiting
   - Input validation

3. **Data Privacy**
   - Encrypt sensitive data
   - Audit logging
   - HIPAA compliance

## Monitoring & Analytics

```typescript
// Track navigation patterns
analytics.track('navigation', {
  from: currentTab,
  to: newTab,
  patientId,
  studyType
});

// Monitor iframe performance
performance.mark('iframe-load-start');
// ... after load
performance.mark('iframe-load-end');
performance.measure('iframe-load-time', 'iframe-load-start', 'iframe-load-end');

// Error tracking
window.addEventListener('error', (event) => {
  if (event.filename?.includes('sphygmo')) {
    errorReporter.log('iframe-error', {
      message: event.message,
      studyId: currentStudyId
    });
  }
});
```