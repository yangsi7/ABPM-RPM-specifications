# **CLAUDE.md** (Project-Specific Playbook)

This version is the project-specific entrypoint for Claude Code to help Claude understand how to architect the ABPM integration into the Skiin ecosystem

--------------------------------------------------------------------------------
🔰 **LOAD-ORDER GUARANTEE**

1.  **Always read this file first.**
2.  **THEN** load the universal process file embedded below
    (`@working_files/CLAUDE_PROCESS.md`).
3.  **THEN** review the mission brief in `requirements-project-brief.md`.
4.  **THEN** read the five working files in the order shown in
    **§ 2 Working-File Canon**.

The rest of this document is organised as follows »

1.  Project snapshot & context
2.  Working-file canon (the five files)
3.  Critical principles & guard-rails
4.  Architectural deliverables & phases
5.  Key reference materials
6.  Solution architecture patterns
7.  Protected decisions & DON'Ts
8.  File-naming & archival conventions
9.  Reference glossary

--------------------------------------------------------------------------------
## 1  Project snapshot & context
| Item                      | Value                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------ |
| **Project name** | *ABPM Integration Architecture for Skiin Platform* |
| **Primary goal** | Design seamless integration of ABPM capabilities into existing Holter ecosystem (SCLA + MVCP) |
| **Current state** | **0%** complete - Starting Phase 1 (Discovery & Requirements) |
| **Architecture focus** | Data synchronization, multi-study modularity, unified clinician experience |
| **Key challenges** | 1. Backend sync strategy<br>2. Identity management<br>3. Sphygmo iframe integration |
| **Deliverables** | 9 comprehensive architectural artifacts across 4 phases |
| **Role** | Principal Product & Systems Architect (OPUS-4 class agent) |

--------------------------------------------------------------------------------
## 2  Working-File Canon  *(never bypass)*

| File                             | Role                                     | ALWAYS read…                   |
| -------------------------------- | ---------------------------------------- | ------------------------------ |
| **`@working_files/todo.md`** | Task checklist / sprint board            | first for "What next?"         |
| **`@working_files/planning.md`** | Technical blueprint & phase status       | to know "Why?" and "How?"      |
| **`@working_files/conventions.md`** | Architectural patterns & standards       | to stay consistent             |
| **`@working_files/event-stream.md`** | Time-stamped log of every action & reflection | to avoid duplicated effort     |
| **`@working_files/doc-ref.md`** | Index into deeper docs (`docs/…`)        | for any deep dive              |

> **One in/one out** — if you need additional scratch space, create a
> `docs/` artefact _and link to it from `doc-ref.md`_.
> Never proliferate ad-hoc files inside `working_files/`.

--------------------------------------------------------------------------------
## 3  Critical principles & guard-rails

1.  **ELEGANCE > COMPLEXITY**
    *Favor less complex yet elegant solutions that achieve the same goals with less complexity*
2.  **Research-first architecture**
    *Thoroughly analyze existing systems before proposing changes*
3.  **Data integrity paramount**
    *Prevent fragmentation and duplicate accounts at all costs*
4.  **Modular extensibility**
    *Design for future RPM modules beyond Holter and ABPM*
5.  **Unified clinician experience**
    *Seamless integration is non-negotiable*
6.  **Documentation completeness**
    *Each deliverable must be self-contained and exhaustive*

--------------------------------------------------------------------------------
## 4  Architectural deliverables & phases

### Phase 1: Discovery & Requirements Analysis
- **RESEARCH_SYNTHESIS.md** - Distilled summary with clarification questions

### Phase 2: System Modeling & Solution Ideation  
- **ENTITY_RELATIONSHIP_GRAPH.drawio** - Visual system relationships
- **SOLUTION_OPTIONS_ANALYSIS.md** - Scored solution options matrix

### Phase 3: Architectural Definition & Implementation Planning
- **TECHNICAL_SYNC_STRATEGY.md** - Complete sync approach with diagrams
- **API_MAPPING_SPECIFICATION.xlsx** - Detailed cross-system data mapping
- **UX_FLOW_DIAGRAM_V2.pdf** - End-to-end flow for Holter + ABPM
- **IMPLEMENTATION_PLAN.md** - Master phased plan with virtual advisors
- **ACTIONABLE_TASK_LIST.md** - Sprint-ready task checklist

### Phase 4: Executive Communication
- **EXECUTIVE_SUMMARY.md** - Non-technical synthesis for stakeholders

--------------------------------------------------------------------------------
## 5  Key reference materials

### Current Ecosystem Documentation
- **MVCP**: `docs/mvcp-current/MVCP - Complete Application Reconstruction.md`
- **MVCP PDF**: `docs/mvcp-current/mvcp_documentation.pdf`
- **SCLA**: `docs/scla-current/SCLA App Navigation Flows and Component Interactions.md`
- **SCLA Analysis**: `docs/scla-current/SCLA App Screen Analysis.md`
- **SCLA PDF**: `docs/scla-current/SCLA_App_Complete_Documentation.pdf`

### Visual References
- **System Diagrams**: `docs/diagram-flows/`
- **Screenshots**: `docs/screenshots/`
- **ABPM Draft**: `docs/diagram-flows/draft-diagram-abpm-myant-sphygmo.png`

--------------------------------------------------------------------------------
## 6  Solution architecture patterns

1.  **Event-Driven Synchronization**
    *Prefer event sourcing over direct API coupling*
2.  **Identity Federation**
    *Single source of truth for patient identity*
3.  **Microservices Communication**
    *Message queues > synchronous calls*
4.  **Iframe Security**
    *PostMessage API with strict origin validation*
5.  **Fallback Strategies**
    *Every integration point needs graceful degradation*

--------------------------------------------------------------------------------
## 7  Protected decisions & DON'Ts

1.  **DO NOT** propose rebuilding existing systems from scratch
2.  **DO NOT** create data silos or duplicate patient records
3.  **DO NOT** compromise on security for convenience
4.  **DO NOT** output partial deliverables or placeholders
5.  **ALWAYS** cite source documents when making assertions
6.  **ALWAYS** complete each deliverable fully before moving to next

--------------------------------------------------------------------------------
## 8  File-naming & archival conventions

### Deliverable Naming
- Phase 1-3 deliverables: `[DELIVERABLE_NAME].[ext]` in project root
- Supporting docs: `docs/architecture/[category]/[name].md`
- Diagrams: `docs/diagrams/[name].drawio` or `.pdf`
- Research notes: `docs/research/[topic]/[date]-[name].md`

### Archival Rules
- Superseded designs → `docs/archive/YYYY-MM-DD/`
- Include README explaining why archived
- Update `doc-ref.md` with new locations

--------------------------------------------------------------------------------
## 9  Reference glossary

| Term | Definition |
|------|------------|
| **ABPM** | Ambulatory Blood-Pressure Monitoring |
| **SCLA** | Skiin Companion Lifestyle App (patient mobile app) |
| **MVCP** | Myant Virtual Clinic Portal (clinician web portal) |
| **Sphygmo** | Acquired ABPM web application to be integrated |
| **RPM** | Remote Patient Monitoring |
| **Holter** | Continuous ECG monitoring (current capability) |
| **RLS** | Row Level Security |
| **FHIR** | Fast Healthcare Interoperability Resources |

--------------------------------------------------------------------------------

EOF — remember to read the embedded process below before doing anything

<process_embed>
@include(working_files/CLAUDE_PROCESS.md)
</process_embed>