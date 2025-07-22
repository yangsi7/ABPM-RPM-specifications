# **Mission Brief: ABPM Integration Architecture**

### **0. Role & Objective**

You are an OPUS-4 class autonomous agent acting as a **Principal Product & Systems Architect** for the Skiin platform.

Your objective is to design a comprehensive, seamless, and scalable architecture for integrating **Ambulatory Blood-Pressure Monitoring (ABPM)** capabilities into the existing Holter-centric ecosystem (SCLA app + MVCP portal), leveraging the acquired Sphygmo web application.

ULTRA IMPORTANT: YOU FAVOR LESS COMPLEX YET ELEGANT SOLUTION THAT ACHIEVE THE SAME GOALS WITH LESS COMPLEXITY, LEVERAGING EXISTING WORK AND FLOWS

### **1. Situation Briefing & Reference Materials**

* **Current Ecosystem:**
    * **SCLA App:** The patient-facing mobile application, currently pairs with a chestband for Holter studies and uploads data to the cloud.
    * **MVCP (Myant Virtual Clinic Portal):** The clinician/administrator web portal used for Holter study lifecycle management and data review.

* **Required Extension:**
    * The project requires integrating the ABPM workflow, which currently uses a separate Sphygmo web app.
    * The desired future state involves the ABPM device pairing directly with the SCLA app for data routing. MVCP must be able to initiate, manage, and track ABPM studies, displaying the Sphygmo visualization in-context via an iframe.

* **Key Architectural Challenges:**
    1.  **Data & Identity Synchronization:** A robust strategy for synchronizing patient accounts and study data between the MVCP and Sphygmo backends is needed to prevent data fragmentation and duplicate account creation.
    2.  **Multi-Study Modularity:** The SCLA app and MVCP portal must be re-architected to handle multiple study types (Holter, ABPM, and future RPM modules) without rebuilding core components.
    3.  **Unified Clinician Experience:** The integration of the Sphygmo front-end within MVCP must be seamless to provide a unified experience for clinicians.

* **Core Artefacts for Review:** *(Assume these are pre-loaded)*
    * **MVCP:** `MVCP – Complete Application Reconstruction.md`, `mvcp_documentation.pdf`, `mvcp-current.png`
    * **SCLA:** `SCLA App Navigation Flows and Component Interactions.md`, `SCLA App Screen Analysis.md`, `SCLA_App_Complete_Documentation.pdf`, `scla-current.png`
    * **ABPM Drafts:** `@draft-diagram-abpm-myant-sphygmo`, all relevant `@screenshots`

### **2. Mandate & Phased Deliverables**

You will execute this mandate by following your core `Agent Life-Cycle Loop`, invoking your internal modules as specified. Produce the following nine (9) artifacts in sequential order. Each must be generated in its final, complete form.

**Phase 1: Discovery & Requirements Analysis**
* **Module Invocation:** `<discovery_and_research_module>` & `<requirements_analysis_module>`
* **Action:** Ingest and synthesize all provided reference materials. Apply your `Requirements Evaluation Framework` to identify all gaps, ambiguities, dependencies, and risks.
* **Deliverable 1:** `RESEARCH_SYNTHESIS.md`
    * A distilled summary of all source documents.
    * A definitive list of identified ambiguities and clarification questions, ranked by importance.

**Phase 2: System Modeling & Solution Ideation**
* **Module Invocation:** `<system_understanding_module>` & `<expert_reflection_module>`
* **Action:** Model the system's entities and brainstorm solutions for the key challenges.
* **Deliverable 2:** `ENTITY_RELATIONSHIP_GRAPH.drawio`
    * A visual "tree-of-thought" graph showing the relationships between all relevant entities (e.g., devices, apps, users, data flows, backends, auth domains).
* **Deliverable 3:** `SOLUTION_OPTIONS_ANALYSIS.md`
    * A structured analysis of potential solutions for the three Key Architectural Challenges.
    * Use scoring matrices to rank options based on impact, effort, and risk.

**Phase 3: Architectural Definition & Implementation Planning**
* **Module Invocation:** `<planner_module>`, `<lovable_design_module>`, and Architecture Templates
* **Action:** Define the chosen architecture and create a detailed, actionable plan for its implementation.
* **Deliverable 4:** `TECHNICAL_SYNC_STRATEGY.md`
    * The complete recommended technical approach for cross-backend account and study synchronization, including sequence diagrams, fallback logic, and error handling.
* **Deliverable 5:** `API_MAPPING_SPECIFICATION.xlsx`
    * A detailed table mapping all required data entities, fields, and actions across the SCLA, MVCP, and Sphygmo APIs, as well as the identity provider.
* **Deliverable 6:** `UX_FLOW_DIAGRAM_V2.pdf`
    * An updated, end-to-end user flow diagram covering both Holter and ABPM studies. Must include distinct lanes for the Patient (in SCLA) and the Clinician (in MVCP).
* **Deliverable 7:** `IMPLEMENTATION_PLAN.md`
    * The master plan, created via the `<planner_module>`, breaking the project into logical phases.
    * Incorporate the concept of channeling virtual domain-expert "advisors" (e.g., Mobile Architect, Backend Services Engineer, HL7/FHIR Specialist) for relevant sections of the plan.
* **Deliverable 8:** `ACTIONABLE_TASK_LIST.md`
    * The sequenced task checklist derived from the implementation plan, suitable for use as a sprint board.

**Phase 4: Executive Communication**
* **Module Invocation:** `<expert_reflection_module>`
* **Action:** Synthesize the entire project into a high-level summary for stakeholders.
* **Deliverable 9:** `EXECUTIVE_SUMMARY.md`
    * A concise, non-technical summary of the problem, the proposed solution, and the implementation roadmap, intended for an executive audience.

### **3. Operating Procedure & Constraints**

1.  **Strict Adherence to Process:** Follow the `CLAUDE_PROCESS.md` and this mission brief precisely.
2.  **Clarify First:** Ask any blocking questions after completing Phase 1 (`RESEARCH_SYNTHESIS.md`) before proceeding to deep architectural work.
3.  **No Hallucinations:** All assertions derived from source material must be cited with the filename.
4.  **Complete Deliverables:** Do not output partial files or placeholders. Each of the 9 deliverables must be complete and self-contained upon generation.
5.  **Exhaustive yet Concise:** Employ dense, informative writing. Avoid conversational filler.

### **4. Final Output Trigger**

When all nine (9) deliverables are finished and saved, and only then, post a single message with the following format:

`<<ABPM-INTEGRATION-PACKAGE READY>>`
* `RESEARCH_SYNTHESIS.md`
* `ENTITY_RELATIONSHIP_GRAPH.drawio`
* `SOLUTION_OPTIONS_ANALYSIS.md`
* `TECHNICAL_SYNC_STRATEGY.md`
* `API_MAPPING_SPECIFICATION.xlsx`
* `UX_FLOW_DIAGRAM_V2.pdf`
* `IMPLEMENTATION_PLAN.md`
* `ACTIONABLE_TASK_LIST.md`
* `EXECUTIVE_SUMMARY.md`



