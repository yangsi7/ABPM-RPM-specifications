# Planning - ABPM Integration Architecture

## Project Overview
This document tracks the technical blueprint and phase status for integrating ABPM capabilities into the Skiin ecosystem (SCLA app + MVCP portal).

## Architecture Approach
Following the mission brief's mandate to favor **elegant solutions over complexity**, leveraging existing flows and infrastructure where possible.

## Phase Status Summary

### ✅ Phase 1: Discovery & Requirements Analysis
**Status**: 100% Complete
**Deliverable**: RESEARCH_SYNTHESIS.md
**Key Outcomes**:
- Identified 3 core integration challenges
- Documented 8 critical clarification questions (all answered)
- Created risk assessment matrix with 7 key risks
- Comprehensive system analysis of MVCP, SCLA, and Sphygmo

### ✅ Phase 2: System Modeling & Solution Ideation
**Status**: 100% Complete
**Deliverables**:
1. **ENTITY_RELATIONSHIP_GRAPH.drawio** - Complete system entity mapping
2. **SOLUTION_OPTIONS_ANALYSIS.md** - Scored recommendations:
   - Data Sync: Hybrid approach (4.3/5)
   - Modularity: Adapter pattern (4.2/5)
   - UX: Progressive enhancement (4.0/5)

**Additional Assets**:
- ASCII mockups for design team (8 screens)
- UI navigation critique
- Expert review with enhancement recommendations

### 🔄 Phase 3: Architectural Definition & Implementation Planning
**Status**: 0% - Ready to Start
**Planned Deliverables**:
- TECHNICAL_SYNC_STRATEGY.md
- API_MAPPING_SPECIFICATION.xlsx
- UX_FLOW_DIAGRAM_V2.pdf
- IMPLEMENTATION_PLAN.md
- ACTIONABLE_TASK_LIST.md

### 📋 Phase 4: Executive Communication
**Status**: Not Started
**Planned Deliverable**:
- EXECUTIVE_SUMMARY.md

## Key Architectural Decisions

### Confirmed by Stakeholder:
1. **Identity Management**: MVCP as single source of truth
2. **Data Flow**: Proxy architecture (SCLA → MVCP → Sphygmo)
3. **Study Creation**: Initiated in MVCP, synced to Sphygmo
4. **Deployment**: Separate infrastructure for systems
5. **Future Devices**: Scales (weight) initially, Sphygmo supports more

### Architecture Recommendations:
1. **Sync Strategy**: Hybrid (sync for critical, async for updates)
2. **Study Modularity**: Adapter pattern with registry
3. **UI Integration**: Progressive enhancement (iframe → native)
4. **Error Handling**: Circuit breakers with fallback queues
5. **Monitoring**: Comprehensive observability from day one

## Key Architectural Challenges

### 1. Data & Identity Synchronization ✓
**Solution**: Hybrid sync approach with circuit breakers
- Synchronous for patient/study creation
- Asynchronous for updates via event bus
- ID mapping table in Sphygmo
- Reconciliation service for consistency

### 2. Multi-Study Modularity ✓
**Solution**: Adapter pattern with dynamic registration
- StudyAdapter interface for all device types
- Registry pattern for extensibility
- Gradual migration from hardcoded Holter logic
- UI components become adapter-aware

### 3. Unified Clinician Experience ✓
**Solution**: Progressive enhancement strategy
- Phase 1: Full iframe with hidden navigation
- Phase 2: Native summary dashboard
- Phase 3: Native report viewer
- Phase 4: Evaluate further enhancements

## Implementation Priority

1. **Critical Path**: Identity synchronization infrastructure
2. **Foundation**: Study adapter framework
3. **Integration**: Basic iframe with PostMessage API
4. **Enhancement**: Progressive native components
5. **Optimization**: Performance and monitoring

## Documentation Lifecycle

### Current Documentation State
- ✅ Current state captured: MVCP (v1.0), SCLA (v1.0)
- ✅ Requirements analysis: Complete (v2.0 for navigation)
- ✅ Architecture specs: Navigation complete (v2.0)
- 🔄 Implementation guides: Technical guide in draft (v1.0)
- ❌ Testing strategy: Not started
- ❌ Deployment guide: Not started

### Documentation Versions
| Spec | Current | Target | Gap Analysis |
|------|---------|--------|--------------|
| Navigation | v1.0 (Virtual Consult) | v2.0 (Unified Studies) | ✅ Complete |
| API Contracts | N/A | v1.0 | 📋 Pending |
| Testing Strategy | N/A | v1.0 | 📋 Pending |
| Deployment | N/A | v1.0 | 📋 Pending |

## Navigation Redesign (Completed)

### Analysis Completed:
1. **Current State Analysis**: Puppeteer analysis of portal.myanthealth.com
2. **Navigation Requirements**: Documented goals and evaluated options
3. **Design Decision**: Unified Studies approach with data-type patient tabs
4. **Updated Mockups**: Created new ASCII mockups without virtual consultation
5. **Technical Guide**: Comprehensive implementation specifications

### Key Decisions:
- Top Navigation: "Patients | Studies" (not "Holter Studies")
- Patient Tabs: "Summary | Studies | ECG | Blood Pressure | Reports"
- Remove all virtual consultation elements
- ABPM tab shows Sphygmo iframe
- ECG tab is Holter-specific

## Next Steps

**Immediate** (Phase 3 Start):
1. ✅ Create detailed technical implementation guide (COMPLETED)
2. Define comprehensive API mappings
3. ✅ Design complete UX flows for both study types (COMPLETED)
4. Develop phased implementation plan

**Phase 3 Focus Areas**:
- Detailed sequence diagrams for all flows
- API contract specifications (partially complete in Technical Guide)
- Error handling procedures
- Deployment architecture
- Testing strategy

**Implementation Phases**:
- Phase A: Foundation Setup (navigation updates)
- Phase B: Studies Management Layer (unified list)
- Phase C: Patient Experience Enhancement (new tabs)
- Phase D: ABPM Integration (Sphygmo iframe)
- Phase E: Real-time Synchronization
- Phase F: Quality Assurance

## Risk Mitigation Status

| Risk | Mitigation | Status |
|------|------------|--------|
| Patient Identity Conflicts | Hybrid sync with mapping | ✓ Designed |
| API Incompatibility | Adapter layer with fallbacks | ✓ Designed |
| Iframe Security | PostMessage validation | ✓ Planned |
| Data Sync Failures | Event sourcing with retries | ✓ Designed |
| UI/UX Inconsistency | Progressive enhancement | ✓ Strategy defined |
| Performance Issues | Caching and lazy loading | ⚠️ Needs metrics |
| Compliance | Audit logging and encryption | 📋 To be detailed |