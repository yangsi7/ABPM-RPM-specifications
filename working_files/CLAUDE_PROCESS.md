# working_files/CLAUDE_PROCESS.md

> **VERSION**: 2.0 - Enhanced with Discovery, Requirements Analysis, Architecture Templates, and Visual Excellence patterns
> **LAST UPDATED**: 2025-07-17
> **PURPOSE**: Universal development methodology for Claude Code across all projects

--------------------------------------------------------------------------------
## <table_of_contents>

1.  Agent Life-Cycle Loop (10 Steps)
2.  Discovery & Research Module *(NEW)*
3.  Requirements Analysis Module *(NEW)*
4.  Core Modules & Their Rules
5.  Architecture Templates Module *(NEW)*
6.  Research-First Methodology
7.  Design Best-Practices (Lovable DNA)
8.  Visual Excellence Module *(NEW)*
9.  Toolbox (MCP) Reference
10. Documentation Auto-Maintenance
11. Message, File & Error Handling Rules
12. Coding & Testing Mandates
13. Dependency & Security Management
14. Repository Hygiene & Archival
15. Continuous Learning Module *(NEW)*
16. Sandbox Environment Spec
17. Important Reminders

</table_of_contents>

--------------------------------------------------------------------------------
## <agent_life_cycle_loop>

> **Mnemonic**: *LOAD → UNDERSTAND → PLAN → ACT → LOG → TEST → REFLECT → DOC → DELIVER → IDLE*

1.  **Load Context**: Read `CLAUDE.md`, then the 5 working files in canonical order.
2.  **Understand**: Parse the latest user request & `event-stream.md`. If architectural or multi-step, invoke the **`<system_understanding_module>`**.
3.  **Plan**: Produce/refresh a numbered plan using the **`<planner_module>`** in `planning.md`; sync tasks to `todo.md`.
4.  **Select Action**: Choose **exactly one** tool, code edit, or research action from the plan.
5.  **Execute**: Run the selected action.
6.  **Log**: Append the `Action` and its `Observation` to `event-stream.md` with a timestamp.
7.  **Test / Verify**: Run automated tests, linters, and visual diffs as relevant, governed by the **`<testing_module>`**.
8.  **Reflect**: Run the **`<expert_reflection_module>`**; revise the plan if insights demand it.
9.  **Document Auto-Update**: Trigger the rules in the **`<documentation_module>`**.
10. **Deliver**: Message the user with results & file paths, then enter a standby state.

> _Any deviation (e.g., unresolvable error) must be reported to the user immediately with options for next steps._

</agent_life_cycle_loop>

--------------------------------------------------------------------------------
## <discovery_and_research_module>

> **Purpose**: Systematic approach to understanding project context, competitive landscape, and technical requirements before implementation

### Discovery Protocol

<discovery_checklist>
| Phase | Activities | Deliverables |
|-------|-----------|-------------|
| **1. Context Gathering** | • Read all existing docs<br>• Analyze codebase structure<br>• Identify stakeholders<br>• Review git history | `docs/discovery/context-analysis.md` |
| **2. Competitive Analysis** | • Research 3-5 competitors<br>• Screenshot key features<br>• Analyze UX patterns<br>• Document differentiators | `docs/discovery/competitive-analysis.md` |
| **3. Technical Audit** | • Dependencies analysis<br>• Performance baseline<br>• Security scan<br>• Architecture review | `docs/discovery/technical-audit.md` |
| **4. User Research** | • Persona identification<br>• Journey mapping<br>• Pain point analysis<br>• Success metrics | `docs/discovery/user-research.md` |
</discovery_checklist>

### Research Best Practices

1. **External Research Protocol**:
   ```
   1. Use brave_web_search for initial discovery
   2. Use puppeteer for visual capture of competitor sites
   3. Use crawl4ai-rag for deep technical documentation
   4. Save all findings to docs/research/[topic]/
   5. Create synthesis document with actionable insights
   ```

2. **Internal Research Protocol**:
   ```
   1. Grep for existing patterns before creating new ones
   2. Read related test files to understand expected behavior
   3. Check git blame to understand historical context
   4. Review PR history for similar features
   5. Document findings in event-stream.md
   ```

3. **Pattern Recognition**:
   - Always look for existing implementations first
   - Document reusable patterns in `docs/patterns/`
   - Create pattern library entries for common solutions
   - Reference patterns in implementation plans

### Discovery Artifacts

All discovery artifacts must follow this structure:
```
docs/discovery/
├── context-analysis.md
├── competitive-analysis.md
├── technical-audit.md
├── user-research.md
├── screenshots/
│   └── [competitor]-[feature]-[date].png
└── synthesis.md
```

</discovery_and_research_module>

--------------------------------------------------------------------------------
## <requirements_analysis_module>

> **Purpose**: Systematic evaluation of requirements to identify ambiguities, dependencies, and implementation risks

### Requirements Evaluation Framework

<requirements_matrix>
| Dimension | Questions | Red Flags |
|-----------|----------|----------|
| **Clarity** | • Is the requirement specific and measurable?<br>• Are success criteria defined?<br>• Are edge cases addressed? | Vague terms like "fast", "user-friendly", "modern" |
| **Feasibility** | • Is it technically possible?<br>• Do we have the skills/tools?<br>• What's the effort estimate? | Requires unavailable APIs or exceeds technical constraints |
| **Dependencies** | • What other features does this depend on?<br>• Are there external dependencies?<br>• What's the critical path? | Circular dependencies or external blockers |
| **Priority** | • Is this P0/P1/P2?<br>• What's the business impact?<br>• Can it be deferred? | Everything marked as "critical" |
</requirements_matrix>

### Ambiguity Resolution Protocol

1. **Identify Ambiguities**:
   ```typescript
   interface AmbiguityRecord {
     requirement: string;
     ambiguousAspect: string;
     assumptions: string[];
     questionsForUser: string[];
     riskLevel: 'low' | 'medium' | 'high';
   }
   ```

2. **Document Assumptions**:
   - Create `docs/requirements/assumptions.md`
   - List each assumption with rationale
   - Get user confirmation before proceeding
   - Update as clarifications are received

3. **Risk Assessment**:
   ```
   For each requirement:
   - Technical Risk: [Low/Medium/High]
   - Timeline Risk: [Low/Medium/High]
   - Dependency Risk: [Low/Medium/High]
   - Overall Risk Score: [1-10]
   ```

### Requirements Documentation Template

```markdown
# [Feature Name] Requirements

## Overview
[Brief description]

## User Stories
- As a [user type], I want to [action] so that [benefit]

## Acceptance Criteria
- [ ] Criterion 1 (measurable)
- [ ] Criterion 2 (testable)

## Technical Requirements
- Performance: [Specific metrics]
- Security: [Specific requirements]
- Accessibility: [WCAG level]

## Dependencies
- Internal: [List]
- External: [List]

## Open Questions
1. [Question needing clarification]

## Assumptions
1. [Assumption and rationale]

## Risk Analysis
- Technical: [Assessment]
- Timeline: [Assessment]
- Mitigation: [Strategy]
```

</requirements_analysis_module>

--------------------------------------------------------------------------------
## <core_modules_and_rules>

<system_understanding_module>
-   **Purpose**: To build a deep, structural understanding of complex problems before planning.
-   **Trigger**: Any task involving new architecture, cross-cutting changes, or significant ambiguity.
-   **Process**:
    1.  Identify all key entities (components, services, data models, user flows).
    2.  Map the relationships and dependencies between them.
    3.  Create a visual representation (e.g., Mermaid diagram) or a structured outline.
    4.  Save the artifact to `docs/diagrams/` and reference it in `planning.md`.
-   **Rule**: The output of this module must be logged as an `Understanding` event in `event-stream.md`.
</system_understanding_module>

<planner_module>
-   **Purpose**: To create and maintain a clear, actionable implementation plan.
-   **Rules**:
    -   The canonical plan lives in `planning.md`. The actionable checklist lives in `todo.md`.
    -   Plans must follow the **ITERATION-FIRST** principle: always check if an existing component or pattern can be extended before planning to create something new.
    -   Break down work into logical phases where applicable: 1. Foundation (data, types), 2. Backend (logic, APIs), 3. Frontend (UI, state), 4. Testing (unit, integration, E2E).
    -   Log major plan updates as `Plan` events in `event-stream.md`.
</planner_module>

<lovable_design_module>
-   **Purpose**: To enforce high-quality, modern, and robust design and UX practices by default.
-   **Core Principles**:
    1.  **Small, Focused Components**: Components should be ≤ 50 lines, follow atomic design, and live in their own file.
    2.  **Type Safety**: Use TypeScript in `strict` mode everywhere.
    3.  **Component Library First**: ALWAYS use `shadcn/ui` components. Only create a new component if no pre-built primitive exists. NEVER modify the base library; create a wrapper instead.
    4.  **Responsive by Default**: All UI must be responsive, starting from a 375px mobile baseline.
    5.  **Robust State Management**: Use TanStack Query for all server state. Avoid prop drilling; use context or a simple store (Jotai/Zustand) for global UI state.
    6.  **Error Hygiene**: All new UI flows must be wrapped in an Error Boundary. Use toast notifications for non-critical feedback. Log all errors for debugging.
-   **Flexibility**: The user may explicitly request the **`21st.dev`** aesthetic. If so, apply its token set and styles, but continue to adhere to the core principles of structure, state, and error handling above.
</lovable_design_module>

<testing_module>
-   **Purpose**: To ensure code is correct, robust, and visually consistent.
-   **Rules**:
    -   **TDD (Test-Driven Generation)**: For any new logic, generate the failing test first, then write the code to make it pass.
    -   **Unit Tests**: All business logic (hooks, utilities) must have unit tests with >80% coverage.
    -   **Integration Tests**: Key user flows must be covered by integration tests.
    -   **Visual Snapshot Tests**: All UI changes must be verified with a visual testing tool like Puppeteer to catch regressions. Log snapshots and compare them.
    -   **CI Gate**: All tests must pass before code can be considered complete.
</testing_module>

<documentation_module>
-   **Purpose**: To ensure documentation is a living, accurate, and useful reflection of the project.
-   **Rules**:
    1.  **Trigger**: ANY change to code, architecture, conventions, or dependencies **MUST** trigger a documentation update in the *same commit*.
    2.  **Consolidation**: If you find multiple small docs covering the same topic, **fuse** them into a single, canonical document, archive the old ones, and update `doc-ref.md`.
    3.  **Archival Process**:
        -   To archive a file, move it to `docs/archive/YYYY-MM-DD/`.
        -   Update `docs/archive/INDEX.md` with a link to the archived file and the reason for archival.
        -   Remove the old entry from `doc-ref.md` and link to the new canonical doc if one exists.
    4.  **Writing Style**: Follow the `writing_rules`. Use clear headings and structured paragraphs.
</documentation_module>

<expert_reflection_module>
-   **Purpose**: To perform a critical self-review before delivering work.
-   **Checklist**:
    | Lens         | Guiding Question                                     |
    |--------------|------------------------------------------------------|
    | Requirements | Does this solution perfectly match the user's goals? |
    | Architecture | Is it extensible, maintainable, and free of debt?    |
    | Design       | Does it honor the `<lovable_design_module>` rules?   |
    | UX           | Is the flow intuitive, accessible, and delightful?   |
    | Performance  | Are there any avoidable bottlenecks or re-renders?   |
    | Security     | Are all inputs validated and outputs sanitized?      |
    | Quality      | Would a senior FAANG engineer approve this commit?   |
-   **Action**: Log insights as `Reflection` events. If critical issues are found, create new tasks in `todo.md` and fix them before delivery.
</expert_reflection_module>

<rollback_module>
-   **Purpose**: To provide a safe, predictable way to handle failures.
-   **Protocol**:
    1.  **On Failure**: Stop all actions. Log the `Error` in `event-stream.md`.
    2.  **Decision**: If a fix is obvious and low-risk (e.g., typo), attempt it once.
    3.  **Revert**: If the fix fails or the issue is complex, **IMMEDIATELY REVERT** the change. Do not attempt to "fix forward."
    4.  **Post-Mortem**: Document the root cause in `planning.md` and add a regression test to prevent recurrence.
</rollback_module>

</core_modules_and_rules>

--------------------------------------------------------------------------------
## <architecture_templates_module>

> **Purpose**: Provide battle-tested architecture patterns and setup templates for common project types

### NextJS + Supabase Template

<nextjs_supabase_architecture>
```
# Recommended Structure
app/
├── (auth)/
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── layout.tsx
├── (dashboard)/
│   ├── layout.tsx
│   └── [feature]/page.tsx
├── api/
│   └── [endpoint]/route.ts
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── features/        # Feature-specific components
│   └── layouts/         # Layout components
├── hooks/
│   ├── use-supabase.ts
│   └── use-[feature].ts
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   └── utils/
├── types/
│   └── database.ts      # Generated from Supabase
└── middleware.ts
```

**Setup Commands**:
```bash
# 1. Create NextJS app with TypeScript
npx create-next-app@latest app-name --typescript --tailwind --app

# 2. Install Supabase
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs

# 3. Install shadcn/ui
npx shadcn-ui@latest init

# 4. Generate types from Supabase
npx supabase gen types typescript --project-id "your-project" > types/database.ts
```

**Key Patterns**:
1. **Auth Middleware**: Protect routes at middleware level
2. **RLS Policies**: Always use Row Level Security
3. **Server Components**: Default to RSC, use client only when needed
4. **Type Safety**: Generate types from database schema
5. **Edge Functions**: Use for API routes when possible
</nextjs_supabase_architecture>

### Vite + React + TypeScript Template

<vite_react_architecture>
```
# Recommended Structure
src/
├── components/
│   ├── ui/              # Base components
│   ├── features/        # Feature components
│   └── layouts/         # Layout components
├── pages/              # Route components
├── hooks/              # Custom hooks
├── services/           # API services
├── stores/             # State management
├── types/              # TypeScript types
├── utils/              # Utilities
└── App.tsx

vite.config.ts
tailwind.config.ts
tsconfig.json
```

**Setup Commands**:
```bash
# 1. Create Vite app
npm create vite@latest app-name -- --template react-ts

# 2. Install dependencies
npm install
npm install -D @types/react @types/react-dom

# 3. Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Install essential packages
npm install react-router-dom @tanstack/react-query axios zod react-hook-form
```
</vite_react_architecture>

### Architecture Decision Records (ADR)

For any architectural decision, create an ADR:

```markdown
# ADR-[NUMBER]: [TITLE]

## Status
[Proposed | Accepted | Deprecated | Superseded]

## Context
[Why this decision is needed]

## Decision
[What we're doing]

## Consequences
[What happens as a result]

## Alternatives Considered
1. [Alternative 1]: [Why rejected]
2. [Alternative 2]: [Why rejected]
```

Save ADRs in `docs/architecture/decisions/`

</architecture_templates_module>

--------------------------------------------------------------------------------
## <research_first_methodology>

1.  **Current-State Review**: Scan codebase & docs referenced in `doc-ref.md`.
2.  **Gap Analysis**: Compare requirements vs. existing artifacts.
3.  **Target State Snapshot**: Draft architecture diagram & data flow.
4.  **Source Triage**: Identify authoritative sources (guidelines, APIs, literature).
5.  **Evidence Collection**: Use `brave-search`, `crawl4ai-rag`, or academic APIs; save notes to `docs/research/…`.
6.  **Synthesis**: Distil findings into actionable design choices.

*_No code generation occurs before step 6 is crystallised._*

</research_first_methodology>

--------------------------------------------------------------------------------
## <visual_excellence_module>

> **Purpose**: Implement conversion-focused, modern UI patterns that drive user engagement and business outcomes

### Core Visual Principles

<visual_principles>
| Principle | Implementation | Measurement |
|-----------|----------------|-------------|
| **Clarity** | • 8pt grid system<br>• Clear visual hierarchy<br>• Consistent spacing | Time to first action < 3s |
| **Movement** | • Scroll-triggered animations<br>• Micro-interactions<br>• Loading states | Engagement rate > 60% |
| **Trust** | • Social proof placement<br>• Security badges<br>• Professional typography | Trust score > 4.5/5 |
| **Performance** | • Optimized images<br>• Lazy loading<br>• Progressive enhancement | LCP < 2.5s, CLS < 0.1 |
</visual_principles>

### Conversion-Optimized Patterns

1. **Hero Section Pattern**:
   ```tsx
   // High-converting hero structure
   <section className="relative min-h-[600px] flex items-center">
     <div className="container grid lg:grid-cols-2 gap-12 items-center">
       <div className="space-y-6">
         <Badge>Trust indicator</Badge>
         <h1 className="text-4xl lg:text-6xl font-bold">
           <span className="text-primary">Benefit-focused</span> headline
         </h1>
         <p className="text-xl text-muted-foreground">Supporting value prop</p>
         <div className="flex gap-4">
           <Button size="lg">Primary CTA</Button>
           <Button variant="outline" size="lg">Secondary CTA</Button>
         </div>
         <div className="flex items-center gap-6 text-sm">
           <TrustSignal />
         </div>
       </div>
       <div className="relative">
         <ProductVisual />
       </div>
     </div>
   </section>
   ```

2. **Progressive Disclosure Pattern**:
   ```tsx
   // Reveal complexity gradually
   const [expanded, setExpanded] = useState(false);
   
   return (
     <div className="space-y-4">
       <div className="visible-by-default">
         {/* Essential info */}
       </div>
       {expanded && (
         <motion.div
           initial={{ opacity: 0, height: 0 }}
           animate={{ opacity: 1, height: "auto" }}
           transition={{ duration: 0.3 }}
         >
           {/* Additional details */}
         </motion.div>
       )}
     </div>
   );
   ```

3. **Social Proof Integration**:
   ```tsx
   // Strategic placement of trust signals
   const trustPlacements = {
     hero: "Below headline",
     form: "Near submit button", 
     pricing: "Under price points",
     checkout: "Above payment form"
   };
   ```

### Animation Guidelines

1. **Scroll-Triggered Animations**:
   - Use Intersection Observer for performance
   - Stagger delays: 150ms between elements
   - Duration: 600-1000ms for reveals
   - Easing: ease-out for natural feel

2. **Micro-Interactions**:
   - Hover states: 150ms transition
   - Click feedback: scale(0.98) on press
   - Loading states: skeleton screens > spinners
   - Success states: checkmark animation

3. **Performance Rules**:
   - CSS transforms only (no layout shifts)
   - Will-change for heavy animations
   - Reduce motion for accessibility
   - GPU acceleration for smoothness

### Responsive Design Strategy

```scss
// Mobile-first breakpoints
$breakpoints: (
  'sm': 640px,   // Tablet portrait
  'md': 768px,   // Tablet landscape
  'lg': 1024px,  // Desktop
  'xl': 1280px,  // Wide desktop
  '2xl': 1536px  // Ultra-wide
);

// Component scaling
.component {
  // Mobile: Full width, stacked
  @apply w-full flex-col;
  
  // Tablet: 2-column grid
  @screen md {
    @apply grid grid-cols-2 gap-8;
  }
  
  // Desktop: Enhanced spacing
  @screen lg {
    @apply gap-12 px-8;
  }
}
```

### Visual Testing Protocol

1. **Before Implementation**:
   - Screenshot competitor implementations
   - Create wireframe/mockup
   - Get stakeholder approval

2. **During Implementation**:
   - Use MCP Puppeteer for live preview
   - Test at all breakpoints
   - Verify animations performance

3. **After Implementation**:
   - Visual regression testing
   - Cross-browser verification
   - Performance audit
   - Accessibility scan

</visual_excellence_module>

--------------------------------------------------------------------------------
## <mcp_toolbox_reference>

| Tool             | Typical when…                                  | API                                                |
| ---------------- | ---------------------------------------------- | -------------------------------------------------- |
| **brave-search** | Need quick factual or tutorial info            | `brave_web_search(q, safesearch=strict)`           |
| **memory** | Persist user preference (“prefers metric units”) | `store(key, chunk) → id` / `recall(key)`           |
| **puppeteer** | Scrape JS-rendered site or take screenshot       | `Maps(url)`, `evaluate(js)`, `screenshot(path)` |
| **crawl4ai-rag** | Crawl whole site & embed for RAG               | `smart_crawl_url(url, depth)` then `perform_rag_query(q)` |
| **calculator** | Quick calc without Python spin-up              | `calculate("3*sqrt(2)")`                           |

*Use these **before** re-implementing their functionality.*

</mcp_toolbox_reference>
--------------------------------------------------------------------------------
## <message_file_error_handling_rules>

* **Status → user** within 60s for long-running tasks (> 15s).
* **Blocking questions** must be singular & explicit.
* **File edits**: prefer in-place; only create a new file if conceptually new.
* **Error loop**: retry once with a variant, then surface to the user with context.
* **`event-stream.md`** is the _single source of truth_ for chronology.

</message_file_error_handling_rules>
--------------------------------------------------------------------------------
## <coding_and_testing_mandates>

* Write code to a file, **never** execute transient shell pipelines.
* Every non-trivial function gets at least one test (unit or integration).
* Visual test for any UI diff: baseline screenshot ± pixel-diff threshold 0.1%.
* Use `// ... keep existing code` only for large untouched blocks.

</coding_and_testing_mandates>

--------------------------------------------------------------------------------
## <continuous_learning_module>

> **Purpose**: Establish patterns for continuous improvement and knowledge sharing across projects

### Learning Capture Protocol

1. **Pattern Recognition**:
   ```markdown
   # docs/patterns/[pattern-name].md
   
   ## Pattern: [Name]
   
   ### Context
   When you need to [situation]
   
   ### Solution
   ```[language]
   [code example]
   ```
   
   ### Consequences
   - Pros: [benefits]
   - Cons: [tradeoffs]
   
   ### Examples
   - Used in: [project/file]
   - Similar to: [other patterns]
   ```

2. **Post-Mortem Template**:
   ```markdown
   # Post-Mortem: [Incident/Feature]
   
   ## Summary
   What happened in 1-2 sentences
   
   ## Timeline
   - [time]: Event 1
   - [time]: Event 2
   
   ## Root Cause
   The primary cause was...
   
   ## Lessons Learned
   1. [Lesson with action item]
   2. [Lesson with action item]
   
   ## Action Items
   - [ ] [Specific improvement]
   - [ ] [Process change]
   ```

3. **Knowledge Transfer**:
   - Document "gotchas" in `docs/gotchas/`
   - Create decision logs in `docs/decisions/`
   - Share reusable snippets in `docs/snippets/`
   - Update conventions.md with new patterns

### Continuous Improvement Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Code Reuse | >30% | Components used 2+ times |
| Bug Recurrence | <5% | Same issue within 30 days |
| Time to Solution | Decreasing | Average task completion |
| Documentation Coverage | >80% | Public APIs documented |

</continuous_learning_module>

--------------------------------------------------------------------------------
## <dependency_and_security_management>

* **Weekly** `npm audit`; flag highs/criticals in `todo.md`.
* Upgrade path: branch → lock-file update → run full test matrix → PR.
* On major upgrade, add a CHANGELOG digest to `doc-ref.md`.

</dependency_and_security_management>
--------------------------------------------------------------------------------
## <repository_hygiene_and_archival>

* Root dir: only source, config & two top-level docs (`README.md`, `CLAUDE.md`).
* Everything else → `docs/`, `scripts/`, or `working_files/`.
* Archive rule: once superseded & unused for 7 days, move file to
    `docs/archive/YYYY-MM-DD/…` with a README pointer.

</repository_hygiene_and_archival>
--------------------------------------------------------------------------------
## <sandbox_environment_spec>

* **OS**: macOS 13.x (Darwin)
* **Runtime**: Python 3.x, Node.js ≥ 18
* **Global tools**: brew, git, jq, awk, sed, bc
* **VS Code Remote CLI** available for remote editing.

</sandbox_environment_spec>
--------------------------------------------------------------------------------
## <important_reminders>

* Do exactly what the user asks—**no feature-creep**.
* Always sync plan ↔ todo ↔ event-stream.
* Never duplicate functionality; extend instead.
* If stuck, ask—but batch questions.
* Keep responses professional, paragraph-style unless a list is requested.

</important_reminders>

--------------------------------------------------------------------------------
## <process_evolution_notes>

### Version History
- **v2.0** (2025-07-17): Added Discovery, Requirements, Architecture, Visual Excellence, and Continuous Learning modules
- **v1.0** (Original): Base process with core modules

### Integration Notes
- This process integrates patterns from Vercel v0, Lovable, Cursor, and other leading AI development tools
- Emphasizes visual verification and user experience
- Provides concrete templates for common architectures
- Includes systematic approaches to ambiguity and discovery

### Future Enhancements
- Performance optimization patterns
- Advanced testing strategies
- AI-assisted code review protocols
- Multi-agent collaboration patterns

</process_evolution_notes>
--------------------------------------------------------------------------------

