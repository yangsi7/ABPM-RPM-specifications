# Documentation Process Improvement Plan

## Current State Analysis

### Issues Identified

1. **Root Directory Clutter**
   - Multiple test scripts (analyze-mvcp-*.js) in root
   - Package files mixed with project documentation
   - No clear separation between tooling and deliverables

2. **Documentation State Tracking**
   - No clear "Current State" vs "Target State" separation
   - Specs evolution not clearly tracked
   - Missing version control for specifications

3. **Folder Structure Issues**
   - Inconsistent naming (mvcp-current vs scla-current)
   - No clear lifecycle folders (draft, review, approved)
   - Archive structure exists but underutilized

4. **Working Files Gaps**
   - `todo.md` doesn't track documentation status
   - `doc-ref.md` not systematically updated
   - No clear mapping of deliverables to phases

5. **Process Gaps**
   - No automated checks for documentation currency
   - Diagrams not systematically versioned
   - Test scripts not organized or archived

## Proposed Solutions

### Option A: Lifecycle-Based Structure (Recommended)

```
ABPM-RPM/
├── .claude/                      # Claude-specific configuration
│   └── hooks/                    # Git hooks for doc validation
├── scripts/                      # All scripts and utilities
│   ├── analysis/                 # Analysis scripts
│   │   └── puppeteer/           # Web analysis tools
│   ├── tests/                    # Test scripts
│   └── archive/                  # Old/deprecated scripts
├── docs/
│   ├── 01-current-state/        # What exists today
│   │   ├── mvcp/
│   │   ├── scla/
│   │   └── sphygmo/
│   ├── 02-requirements/         # Analyzed requirements
│   │   ├── approved/
│   │   └── draft/
│   ├── 03-architecture/         # Solution design
│   │   ├── decisions/           # ADRs
│   │   ├── diagrams/
│   │   └── specifications/
│   ├── 04-implementation/       # Build guides
│   │   ├── api-contracts/
│   │   ├── deployment/
│   │   └── migration/
│   ├── 05-validation/           # Test plans and results
│   └── archive/                 # Superseded docs
├── deliverables/                # Phase deliverables
│   ├── phase-1/
│   ├── phase-2/
│   ├── phase-3/
│   └── phase-4/
├── working_files/               # Active work tracking
└── CLAUDE.md                    # Entry point

**Pros:**
- Clear progression through project lifecycle
- Easy to identify current vs target
- Natural archival path
- Supports parallel work streams

**Cons:**
- More folders to navigate
- Requires discipline to maintain
- May need migration effort

### Option B: Domain-Based Structure

```
ABPM-RPM/
├── tools/                       # Scripts and utilities
│   ├── scripts/
│   └── tests/
├── systems/                     # Per-system documentation
│   ├── mvcp/
│   │   ├── current/
│   │   ├── target/
│   │   └── migration/
│   ├── scla/
│   │   ├── current/
│   │   ├── target/
│   │   └── migration/
│   └── sphygmo/
│       ├── current/
│       ├── target/
│       └── integration/
├── architecture/                # Cross-cutting concerns
│   ├── decisions/
│   ├── patterns/
│   └── diagrams/
├── deliverables/               # Formal outputs
└── working_files/              # Active tracking

**Pros:**
- Clear system boundaries
- Easy to find system-specific docs
- Natural for multi-system project

**Cons:**
- Cross-cutting concerns harder to track
- May duplicate architecture decisions
- Less clear project progression

### Option C: Status-Based Structure

```
ABPM-RPM/
├── scripts/                     # All executable code
├── specifications/
│   ├── current-state/          # As-is documentation
│   ├── target-state/           # To-be documentation
│   ├── gap-analysis/           # Delta documentation
│   └── implementation/         # How-to documentation
├── reviews/                    # Review and approval
│   ├── pending/
│   ├── approved/
│   └── rejected/
├── artifacts/                  # Diagrams, mockups, etc.
└── archive/                    # Historical versions

**Pros:**
- Crystal clear current vs target
- Simple mental model
- Easy gap identification

**Cons:**
- Less nuanced than lifecycle
- May mix different types of docs
- Review process less integrated

## Implementation Recommendations

### 1. Adopt Lifecycle-Based Structure (Option A)
- Provides best balance of clarity and flexibility
- Natural progression matches project phases
- Clear archival path

### 2. Enhanced Working Files

#### todo.md Enhancement
```markdown
## Documentation Tasks
- [ ] DOC-001: Update current state analysis for MVCP
  - Status: In Progress
  - Owner: System
  - Due: 2025-01-25
  - Location: docs/01-current-state/mvcp/
```

#### doc-ref.md Enhancement
```markdown
## Document Status Matrix

| Document | Version | Status | Last Updated | Next Review |
|----------|---------|--------|--------------|-------------|
| MVCP Current State | 1.2 | Approved | 2025-01-22 | 2025-02-22 |
| Navigation Spec | 2.0 | Draft | 2025-01-22 | 2025-01-25 |
```

#### planning.md Enhancement
```markdown
## Documentation Lifecycle

### Current Documentation State
- ✅ Current state captured: MVCP, SCLA
- 🔄 Requirements analysis: 80% complete
- 📋 Architecture specs: In review
- ❌ Implementation guides: Not started

### Documentation Versions
| Spec | Current | Target | Gap Analysis |
|------|---------|--------|--------------|
| Navigation | v1.0 (Virtual Consult) | v2.0 (Unified Studies) | Complete |
```

### 3. CLAUDE.md Updates

```markdown
## Documentation Standards

### File Lifecycle
1. **Draft**: `docs/[phase]/draft/[name]-draft-v[N].md`
2. **Review**: `docs/[phase]/review/[name]-review-v[N].md`
3. **Approved**: `docs/[phase]/[name]-v[N].md`
4. **Archived**: `docs/archive/YYYY-MM-DD/[name]-v[N].md`

### Version Control
- Major versions: Architectural changes (v1.0 → v2.0)
- Minor versions: Feature additions (v1.0 → v1.1)
- Patches: Corrections (v1.0 → v1.0.1)

### Current vs Target Tracking
- Current state: `docs/01-current-state/`
- Target state: `docs/03-architecture/specifications/`
- Gap analysis: `docs/02-requirements/gap-analysis/`

### Test Script Management
- Active scripts: `scripts/[category]/`
- Test results: `docs/05-validation/results/`
- Archived scripts: `scripts/archive/YYYY-MM-DD/`

### Diagram Versioning
- Source files: `[name].drawio` with internal version
- Exports: `[name]-v[N].png/pdf` with version in filename
- Always commit both source and export

### Documentation Review Cycle
1. Draft created → todo.md entry
2. Review requested → planning.md status update
3. Feedback incorporated → event-stream.md logged
4. Approved → doc-ref.md updated
5. Superseded → Archive with README
```

### 4. Automated Checks

#### Git Pre-commit Hook
```bash
#!/bin/bash
# .claude/hooks/pre-commit

# Check if doc-ref.md is updated when docs/ changes
if git diff --cached --name-only | grep -q "^docs/"; then
  if ! git diff --cached --name-only | grep -q "working_files/doc-ref.md"; then
    echo "Error: Documentation changed but doc-ref.md not updated"
    exit 1
  fi
fi

# Check for scripts in root
if git diff --cached --name-only | grep -E "^\.(js|py|sh)$"; then
  echo "Error: Scripts should be in scripts/ directory, not root"
  exit 1
fi
```

#### Documentation Status Check
```javascript
// scripts/checks/doc-status.js
const fs = require('fs');
const path = require('path');

function checkDocumentationCurrency() {
  const docRef = fs.readFileSync('working_files/doc-ref.md', 'utf8');
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  // Parse doc-ref.md for dates
  const datePattern = /Last Updated: (\d{4}-\d{2}-\d{2})/g;
  let match;
  const staleDocs = [];
  
  while (match = datePattern.exec(docRef)) {
    const docDate = new Date(match[1]);
    if (docDate < thirtyDaysAgo) {
      staleDocs.push(match[1]);
    }
  }
  
  if (staleDocs.length > 0) {
    console.log('Warning: Stale documentation detected');
    staleDocs.forEach(doc => console.log(`  - ${doc}`));
  }
}
```

### 5. Migration Plan

#### Phase 1: Structure Setup (Immediate)
```bash
# Create new structure
mkdir -p scripts/{analysis,tests,archive}
mkdir -p docs/{01-current-state,02-requirements,03-architecture,04-implementation,05-validation}
mkdir -p deliverables/{phase-1,phase-2,phase-3,phase-4}

# Move scripts
mv analyze-mvcp-*.js scripts/analysis/
mv package*.json scripts/

# Organize existing docs
mv docs/mvcp-current docs/01-current-state/mvcp
mv docs/scla-current docs/01-current-state/scla
```

#### Phase 2: Documentation Update (Day 1)
- Update CLAUDE.md with new standards
- Create enhanced working files
- Set up git hooks
- Run initial documentation audit

#### Phase 3: Content Migration (Day 2-3)
- Reorganize existing documentation
- Version all current specs
- Create gap analysis documents
- Update all cross-references

### 6. Agent Context Optimization

#### Context Loading Strategy
```markdown
## Agent Context Priority

### Level 1: Always Load
1. CLAUDE.md
2. working_files/* (all 5 files)
3. Active phase deliverables

### Level 2: Load on Demand
4. Current specifications being modified
5. Related architecture decisions
6. Recent test results

### Level 3: Reference Only
7. Archive materials
8. Completed deliverables
9. Historical versions
```

#### Working File Completeness Checks
```javascript
// scripts/checks/working-files-check.js
const requiredSections = {
  'todo.md': ['Documentation Tasks', 'Development Tasks', 'Review Queue'],
  'planning.md': ['Current State', 'Target State', 'Gap Analysis'],
  'doc-ref.md': ['Document Status Matrix', 'Version History'],
  'event-stream.md': ['YYYY-MM-DD'],
  'conventions.md': ['Documentation Standards', 'Naming Conventions']
};

function validateWorkingFiles() {
  Object.entries(requiredSections).forEach(([file, sections]) => {
    const content = fs.readFileSync(`working_files/${file}`, 'utf8');
    sections.forEach(section => {
      if (!content.includes(section)) {
        console.warn(`Missing section "${section}" in ${file}`);
      }
    });
  });
}
```

## Benefits of Proposed System

1. **Clear State Tracking**
   - Always know current vs target state
   - Gap analysis explicitly documented
   - Version history preserved

2. **Organized Repository**
   - Scripts isolated from documentation
   - Clear lifecycle progression
   - Systematic archival

3. **Better Agent Performance**
   - Predictable file locations
   - Optimized context loading
   - Reduced ambiguity

4. **Automated Quality**
   - Pre-commit validation
   - Documentation currency checks
   - Working file completeness

5. **Scalable Process**
   - Handles multiple work streams
   - Supports iterative development
   - Enables parallel documentation

## Decision

Recommend implementing **Option A (Lifecycle-Based Structure)** with the enhanced working files and automation described above. This provides the best balance of clarity, flexibility, and maintainability for the ABPM integration project.