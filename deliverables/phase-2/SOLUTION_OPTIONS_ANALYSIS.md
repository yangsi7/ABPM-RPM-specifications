# SOLUTION OPTIONS ANALYSIS - ABPM Integration Architecture

## Executive Summary

This document presents and evaluates architectural solution options for the three key challenges identified in integrating ABPM capabilities into the Skiin ecosystem. Each challenge is analyzed with multiple solution approaches, scored using a weighted matrix, and concluded with a recommended approach.

## Evaluation Criteria

| Criterion | Weight | Description |
|-----------|---------|-------------|
| **Impact** | 40% | Business value delivered and problem resolution effectiveness |
| **Effort** | 30% | Development complexity, time, and resource requirements |
| **Risk** | 20% | Technical, operational, and integration risks |
| **Maintainability** | 10% | Long-term support costs and extensibility |

**Scoring Scale**: 1 (Poor) to 5 (Excellent)

---

## Challenge 1: Data & Identity Synchronization

### Context
- MVCP is the source of truth for patient identity
- Sphygmo requires its own patient records with ID mapping
- Need to prevent duplicate accounts and maintain data consistency
- Proxy architecture confirmed for data flow

### Solution Options

#### Option 1A: Event-Driven Synchronization
**Description**: Implement an event bus where MVCP publishes patient/study events that Sphygmo subscribes to.

**Architecture**:
```
MVCP → Event Bus (Kafka/RabbitMQ) → Sphygmo Consumer → Sphygmo DB
         ↓
    Dead Letter Queue → Retry Logic
```

**Pros**:
- Loosely coupled systems
- Scalable and resilient
- Audit trail built-in
- Handles temporary outages gracefully

**Cons**:
- Additional infrastructure complexity
- Eventual consistency delays
- Requires event schema governance

**Score**: Impact: 5, Effort: 3, Risk: 3, Maintainability: 4 = **4.1/5**

#### Option 1B: Synchronous API Integration
**Description**: Direct API calls from MVCP to Sphygmo for each operation.

**Architecture**:
```
MVCP → REST API → Sphygmo API Gateway → Sphygmo Services
         ↓ (on failure)
    Fallback Queue
```

**Pros**:
- Immediate consistency
- Simpler mental model
- Direct error handling

**Cons**:
- Tight coupling
- Latency impacts user experience
- Cascading failures possible

**Score**: Impact: 4, Effort: 4, Risk: 2, Maintainability: 3 = **3.5/5**

#### Option 1C: Hybrid Approach (Recommended)
**Description**: Synchronous for critical operations (patient creation), asynchronous for updates and data sync.

**Architecture**:
```
Critical Path: MVCP → Sync API → Sphygmo (with circuit breaker)
Updates: MVCP → Event Queue → Sphygmo Consumer
```

**Pros**:
- Balances consistency and resilience
- Optimizes for user experience
- Flexible retry strategies

**Cons**:
- Two integration patterns to maintain
- More complex error handling

**Score**: Impact: 5, Effort: 3, Risk: 4, Maintainability: 4 = **4.3/5** ✓

### Detailed Implementation for Recommended Option

```typescript
// Patient Creation Flow (Synchronous)
interface PatientSyncService {
  async createPatient(mvpcPatient: Patient): Promise<{
    mvpcId: string;
    sphygmoId: string;
    mappingId: string;
  }> {
    // 1. Create in MVCP
    const mvpcId = await mvpcRepo.create(mvpcPatient);
    
    // 2. Sync to Sphygmo with circuit breaker
    try {
      const sphygmoId = await circuitBreaker.call(
        () => sphygmoApi.createPatient({
          externalId: mvpcId,
          ...mvpcPatient
        })
      );
      
      // 3. Store mapping
      await mappingRepo.create({ mvpcId, sphygmoId });
      
      return { mvpcId, sphygmoId, mappingId };
    } catch (error) {
      // 4. Compensate on failure
      await mvpcRepo.markPendingSync(mvpcId);
      throw new SyncFailureError(error);
    }
  }
}

// Update Flow (Asynchronous)
class PatientUpdatePublisher {
  async publishUpdate(event: PatientUpdateEvent) {
    await eventBus.publish('patient.updated', {
      mvpcId: event.patientId,
      changes: event.changes,
      timestamp: Date.now(),
      retryCount: 0
    });
  }
}
```

---

## Challenge 2: Multi-Study Modularity

### Context
- Current system hardcoded for Holter studies
- Need to support ABPM, scales, and future RPM devices
- UI components tightly coupled to ECG data
- Must maintain backward compatibility

### Solution Options

#### Option 2A: Polymorphic Study Model
**Description**: Create abstract study base with device-specific implementations.

**Architecture**:
```
AbstractStudy
├── HolterStudy (existing)
├── ABPMStudy (new)
├── ScaleStudy (future)
└── GlucoseStudy (future)
```

**Pros**:
- Clean OOP design
- Type safety maintained
- Extensible for new devices

**Cons**:
- Requires significant refactoring
- Migration complexity
- UI component updates needed

**Score**: Impact: 5, Effort: 2, Risk: 3, Maintainability: 5 = **3.9/5**

#### Option 2B: Study Type Configuration
**Description**: Configuration-driven approach with study types defined in JSON/YAML.

**Architecture**:
```yaml
studyTypes:
  holter:
    dataChannels: ["ecg1", "ecg2", "ecg3"]
    duration: ["24h", "48h", "7d", "14d"]
    visualization: "ecg-viewer"
  abpm:
    dataChannels: ["systolic", "diastolic", "map"]
    duration: ["24h", "48h"]
    visualization: "sphygmo-iframe"
```

**Pros**:
- No code changes for new types
- Business user configurable
- Rapid deployment

**Cons**:
- Less type safety
- Complex validation logic
- Performance considerations

**Score**: Impact: 4, Effort: 4, Risk: 3, Maintainability: 3 = **3.7/5**

#### Option 2C: Adapter Pattern with Registry (Recommended)
**Description**: Device adapters registered dynamically with common interface.

**Architecture**:
```typescript
interface StudyAdapter {
  type: StudyType;
  createStudy(params: StudyParams): Promise<Study>;
  validateData(data: any): ValidationResult;
  getVisualization(): VisualizationConfig;
  getMetrics(): MetricDefinition[];
}

class StudyRegistry {
  private adapters = new Map<StudyType, StudyAdapter>();
  
  register(adapter: StudyAdapter) {
    this.adapters.set(adapter.type, adapter);
  }
  
  getAdapter(type: StudyType): StudyAdapter {
    return this.adapters.get(type) || throw new Error();
  }
}
```

**Pros**:
- Plug-and-play architecture
- Type safety with flexibility
- Gradual migration possible
- UI components can be adapter-aware

**Cons**:
- Initial setup complexity
- Adapter interface evolution

**Score**: Impact: 5, Effort: 3, Risk: 3, Maintainability: 5 = **4.2/5** ✓

### Detailed Implementation for Recommended Option

```typescript
// Holter Adapter (refactored from existing)
class HolterStudyAdapter implements StudyAdapter {
  type = StudyType.HOLTER;
  
  async createStudy(params: StudyParams): Promise<Study> {
    return {
      id: generateId(),
      type: this.type,
      duration: params.duration,
      deviceConfig: {
        channels: 3,
        sampleRate: 250,
        garmentType: params.garmentType
      }
    };
  }
  
  getVisualization(): VisualizationConfig {
    return {
      component: 'ECGViewer',
      routes: ['symptom-logs', 'ecg-tags'],
      dataSource: 'timeseries-db'
    };
  }
}

// ABPM Adapter (new)
class ABPMStudyAdapter implements StudyAdapter {
  type = StudyType.ABPM;
  
  async createStudy(params: StudyParams): Promise<Study> {
    // Create in MVCP
    const study = await studyRepo.create({
      type: this.type,
      duration: params.duration
    });
    
    // Sync to Sphygmo
    await sphygmoSync.createABPMStudy({
      externalId: study.id,
      ...params
    });
    
    return study;
  }
  
  getVisualization(): VisualizationConfig {
    return {
      component: 'IframeViewer',
      url: `${SPHYGMO_URL}/studies/{studyId}`,
      routes: ['bp-trends', 'reports'],
      dataSource: 'sphygmo-api'
    };
  }
}
```

---

## Challenge 3: Unified Clinician Experience

### Context
- Sphygmo UI in iframe breaks visual consistency
- Need unified navigation and notifications
- Cross-frame communication requirements
- Report generation and download flow

### Solution Options

#### Option 3A: Deep Iframe Integration
**Description**: Extensive customization of Sphygmo UI with PostMessage API.

**Architecture**:
```
MVCP Shell
├── Navigation Header
├── Patient Context
└── Sphygmo Iframe
    ├── Custom Theme
    ├── Hidden Navigation
    └── PostMessage Handlers
```

**Pros**:
- Maintains Sphygmo independence
- Clear security boundaries
- Parallel development possible

**Cons**:
- Complex state synchronization
- Performance overhead
- Limited UI customization

**Score**: Impact: 3, Effort: 3, Risk: 4, Maintainability: 2 = **3.0/5**

#### Option 3B: API-Driven Native UI
**Description**: Build native MVCP components consuming Sphygmo APIs.

**Pros**:
- Complete UI control
- Optimal performance
- Consistent UX

**Cons**:
- Duplicates Sphygmo development
- Loses Sphygmo innovations
- High maintenance burden

**Score**: Impact: 5, Effort: 1, Risk: 2, Maintainability: 2 = **2.9/5**

#### Option 3C: Progressive Enhancement (Recommended)
**Description**: Start with iframe, progressively replace with native components based on usage.

**Architecture**:
```
Phase 1: Full iframe with navigation hiding
Phase 2: Native summary dashboard pulling Sphygmo data
Phase 3: Native report viewer with Sphygmo PDF generation
Phase 4: Evaluate further native components
```

**Implementation**:
```typescript
// Iframe wrapper with progressive enhancement
class SphygmoIntegration {
  private mode: 'iframe' | 'hybrid' | 'native' = 'iframe';
  
  async render(studyId: string, view: string) {
    switch(this.mode) {
      case 'iframe':
        return this.renderIframe(studyId, view);
      
      case 'hybrid':
        if (view === 'summary') {
          return this.renderNativeSummary(studyId);
        }
        return this.renderIframe(studyId, view);
      
      case 'native':
        return this.renderNativeView(studyId, view);
    }
  }
  
  private setupIframeCommunication() {
    window.addEventListener('message', (event) => {
      if (event.origin !== SPHYGMO_ORIGIN) return;
      
      switch(event.data.type) {
        case 'navigation':
          this.handleNavigation(event.data.payload);
          break;
        case 'notification':
          this.unifiedNotificationService.notify(event.data.payload);
          break;
        case 'report-ready':
          this.handleReportDownload(event.data.payload);
          break;
      }
    });
  }
}
```

**Pros**:
- Immediate delivery with iframe
- Data-driven enhancement decisions
- Preserves Sphygmo value
- Risk mitigation through phases

**Cons**:
- Temporary UX inconsistency
- Requires metrics collection

**Score**: Impact: 4, Effort: 4, Risk: 4, Maintainability: 4 = **4.0/5** ✓

---

## Summary of Recommendations

| Challenge | Recommended Solution | Score | Key Benefits |
|-----------|---------------------|-------|--------------|
| **Data & Identity Sync** | Hybrid Approach | 4.3/5 | Balances consistency with resilience |
| **Multi-Study Modularity** | Adapter Pattern | 4.2/5 | Extensible plug-and-play architecture |
| **Unified Experience** | Progressive Enhancement | 4.0/5 | Immediate value with future flexibility |

## Implementation Priority

1. **Phase 1**: Identity sync (critical path)
2. **Phase 2**: Study adapter framework
3. **Phase 3**: Basic iframe integration
4. **Phase 4**: Progressive UI enhancements

## Risk Mitigation Strategies

### Technical Risks
- **Mitigation**: Implement circuit breakers, retry logic, and comprehensive monitoring
- **Fallback**: Queue-based eventual consistency for all operations

### Operational Risks
- **Mitigation**: Phased rollout with feature flags
- **Fallback**: Maintain parallel manual workflows initially

### Integration Risks
- **Mitigation**: Contract testing between systems
- **Fallback**: Version compatibility matrix and rollback procedures