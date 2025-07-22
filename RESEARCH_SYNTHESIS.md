# RESEARCH SYNTHESIS - ABPM Integration Architecture

## Executive Summary

This document synthesizes findings from analyzing the existing Skiin ecosystem (SCLA app + MVCP portal) to identify requirements, gaps, and clarification needs for integrating Ambulatory Blood-Pressure Monitoring (ABPM) capabilities. The analysis reveals a mature Holter-centric platform with clear extension points but significant architectural decisions needed for seamless ABPM integration.

## System-by-System Analysis

### 1. MVCP (Myant Virtual Clinic Portal)

#### Current Architecture
- **Technology Stack**: React.js SPA with REST APIs, PostgreSQL/TimescaleDB, Redis, S3 storage
- **Authentication**: JWT-based with MFA support and organization-based isolation
- **Core Capabilities**:
  - Patient management with SCLA account creation
  - Holter study lifecycle management (setup, monitoring, completion)
  - Real-time ECG viewer with annotation capabilities
  - Clinical notes and symptom log management
  - Organization and team management

#### Key Architectural Patterns
- **Role-Based Access Control**: Desk Admin, MD, Cardiac Tech roles
- **Multi-tenant Architecture**: Organization-based data isolation
- **Event-Driven Updates**: WebSocket connections for real-time ECG data
- **Modular UI Components**: Tab-based navigation with modal workflows

#### Integration Readiness
- ✅ Existing study management framework extensible to ABPM
- ✅ Patient profile structure supports additional device types
- ✅ ECG viewer architecture could accommodate blood pressure visualizations
- ⚠️ Hard-coded for Holter studies in current implementation
- ⚠️ No existing iframe integration patterns

### 2. SCLA (Skiin Companion Lifestyle App)

#### Current Architecture
- **Technology Stack**: React Native mobile app (iOS/Android)
- **Core Capabilities**:
  - Bluetooth device pairing (Pod/chestband)
  - Real-time ECG monitoring and quality indicators
  - Symptom logging with contextual data
  - Offline data collection with sync capabilities
  - Study progress tracking

#### Key Architectural Patterns
- **Device Abstraction**: Bluetooth service layer for pod communication
- **Local-First Architecture**: SQLite for offline storage
- **Background Services**: Continuous data collection during studies
- **Push Notifications**: Study reminders and alerts

#### Integration Readiness
- ✅ Modular device pairing could support ABPM devices
- ✅ Existing data sync infrastructure
- ✅ Symptom logging applicable to ABPM context
- ⚠️ UI/UX tightly coupled to ECG/Holter workflows
- ⚠️ Data models specific to ECG channels

### 3. Sphygmo (ABPM Web Application)

#### Inferred Architecture (from screenshots and requirements)
- **Deployment Model**: Separate web application with own backend
- **Integration Method**: Iframe embedding within MVCP
- **Data Management**: Own database for ABPM studies
- **Visualization**: Specialized BP trending and analysis tools

#### Integration Challenges
- ❌ Separate authentication system
- ❌ Independent patient database
- ❌ No documented APIs for external integration
- ❌ Unknown data formats and protocols

## Integration Challenges Deep Dive

### Challenge 1: Data & Identity Synchronization

**Current State**:
- MVCP maintains patient master records
- SCLA app authenticated via login codes from MVCP
- No existing integration with external systems

**Gap Analysis**:
- Sphygmo has its own patient database
- Risk of duplicate patient records
- No clear synchronization strategy

**Architectural Implications**:
- Need for patient identity federation service
- Event-based synchronization vs. real-time API calls
- Conflict resolution for data discrepancies

### Challenge 2: Multi-Study Modularity

**Current State**:
- MVCP hardcoded for Holter studies
- SCLA app ECG-specific UI/UX
- Single study type per patient assumption

**Gap Analysis**:
- No abstraction for different study types
- UI components not designed for modularity
- Data models ECG-centric

**Architectural Implications**:
- Need for study type abstraction layer
- Polymorphic UI components
- Extended data models for BP measurements

### Challenge 3: Unified Clinician Experience

**Current State**:
- MVCP provides complete Holter workflow
- Consistent UI/UX within portal
- Integrated symptom correlation

**Gap Analysis**:
- Sphygmo UI in iframe breaks consistency
- Limited cross-frame communication
- Separate navigation and workflows

**Architectural Implications**:
- PostMessage API for iframe communication
- Shared design system requirements
- Context passing between systems

## Clarification Questions (Ranked by Importance)

### Critical (Blocking Architecture Design)

1. **Identity Management Strategy**
   - Q: Should MVCP be the single source of truth for patient identity, with Sphygmo as a subordinate system?
       --> Yes
   - Q: Can Sphygmo be modified to accept external patient IDs, or must it maintain its own?
        --> there must be a mapping
   - Q: What happens to existing Sphygmo patients during migration?
        --> we don't care about existing sphygmo patients
2. **API Availability**
   - Q: What APIs does Sphygmo expose for patient creation, study management, and data ingestion?
   --> We need to define those
   - Q: Can Sphygmo accept real-time BP data streams, or only batch uploads?
   --> it's a measurement every 20 min. So no need for crazy realtime stuff.
   - Q: Is there an authentication API for SSO integration?
   --> don't no
3. **Data Ownership and Flow**
   - Q: Where should ABPM raw data be stored - MVCP S3 or Sphygmo storage?
   --> both
   - Q: Should MVCP proxy all ABPM data or allow direct SCLA-to-Sphygmo communication?
   --> proxy
   - Q: How are HIPAA compliance requirements maintained across systems?
--> Don't worry about that. 
### Important (Affects Implementation Approach)

4. **Study Lifecycle Coordination**
   - Q: Should ABPM studies be created in both MVCP and Sphygmo, or MVCP-only with API propagation?
      --> created in MVCP
   - Q: How should study status be synchronized between systems?
      --> triggers push from MVCP to sphygmo
   - Q: What happens if one system is unavailable during study creation?
     --> Not sure? retry best practices? propose.
5. **UI/UX Integration Depth**
   - Q: Can Sphygmo UI be customized to match MVCP design system?
   --> Possibly
   - Q: Should MVCP toolbar/navigation be visible when viewing Sphygmo iframe?
    --> Yes! Basically the ABPM study is set up (and cancelled, closed) the same way as a Holter Study, but we select ABPM. User ids, study ids and data are pushed to sphygmo --> the iframe will show that data from the sphygmo portal. After the study is done, Sphygmo generates a PDF report which is sent to MVCP and which will be available for download.
   - Q: How should notifications and alerts be unified?
   --> THis is not straightforward, we'll need to evaluate ABPM study alone and ABPM + Holter toether and how to handle the two streams of notifications'

6. **Device Integration**
   - Q: What is the Bluetooth profile/protocol for ABPM devices?
   --> Classic BP BLE device, but we'll have to make sure it connects everytime a BP measurement is taken'
   - Q: Should SCLA app communicate directly with ABPM devices or through an SDK?
   --> Yes
   - Q: How is device pairing information shared between apps?
   --> Some protocol that's defined. '

### Operational (Affects Long-term Maintenance)

7. **Deployment Architecture**
   - Q: Will Sphygmo be deployed in the same infrastructure as MVCP?
   ---> No
   - Q: How will version synchronization be managed?
   --> Good question. Suggestions?
   - Q: What is the disaster recovery strategy?
   --> Good question. Suggestions?

8. **Future Extensibility**
   - Q: What other RPM devices are planned beyond ABPM?
   --> Scales (Weight) for now
   - Q: Should the architecture support multiple visualization vendors?
   ---> No Sphygmo supports scales data, glucose data and more.
   - Q: How will the solution scale to thousands of concurrent studies?
    ---> It should eventuially
## Risk Assessment Matrix

| Risk | Probability | Impact | Mitigation Strategy |
|------|------------|--------|-------------------|
| **Patient Identity Conflicts** | High | Critical | Implement identity federation with MVCP as source of truth |
| **API Incompatibility** | High | High | Design adapter layer with fallback to batch processing |
| **Iframe Security Issues** | Medium | High | Implement strict CSP and PostMessage validation |
| **Data Sync Failures** | Medium | High | Event sourcing with retry queues and monitoring |
| **UI/UX Inconsistency** | High | Medium | Develop shared design system and component library |
| **Performance Degradation** | Low | High | Implement caching and optimize data queries |
| **Compliance Violations** | Low | Critical | Security audit and encrypted data channels |

## Recommended Next Steps

1. **Immediate Actions**:
   - Obtain Sphygmo API documentation
   - Clarify patient identity management strategy
   - Define data ownership boundaries

2. **Architecture Planning**:
   - Design identity federation service
   - Create study type abstraction layer
   - Define iframe communication protocol

3. **Proof of Concept**:
   - Test Sphygmo API integration
   - Validate iframe security approach
   - Prototype SCLA ABPM device pairing

## Assumptions Made

1. Sphygmo can be modified to accept external authentication tokens
2. ABPM devices use standard Bluetooth profiles
3. MVCP infrastructure can support additional backend services
4. Existing HIPAA compliance extends to new integrations
5. Performance requirements similar to current Holter studies

## References

- Source: `docs/mvcp-current/MVCP (Myant Virtual Clinic Portal) - Complete Application Reconstruction.md`
- Source: `docs/scla-current/SCLA App Navigation Flows and Component Interactions.md`
- Source: `docs/scla-current/SCLA App Screen Analysis.md`
- Source: `docs/screenshots/abpm-in-mvcp-as-iframe.png`
- Source: `docs/diagram-flows/draft-diagram-abpm-myant-sphygmo.png`
