# Navigation Design & Evaluation - ABPM Integration

## Executive Summary

After analyzing the current MVCP implementation and requirements, I recommend a **hybrid navigation approach** that balances simplicity with functionality. This document evaluates three navigation options and provides detailed mockups for the recommended solution.

## Evaluation Framework

Each option is evaluated against:
1. **Clarity** - How intuitive is the navigation?
2. **Scalability** - How well does it handle future devices?
3. **Efficiency** - How many clicks to reach key functions?
4. **Consistency** - How well does it align with existing patterns?
5. **Technical Complexity** - How difficult to implement?

## Option 1: Unified Studies with Data-Type Tabs

### Structure
```
Top Level:        Patients | Studies
Patient Level:    Summary | All Studies | ECG | Blood Pressure | Documents
```

### Visual Mockup
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [M] MYANT      Patients    Studies                    bp_chart@myant.ca ▼ │
│━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                                                 │
│  Braun, Miriam          Summary | All Studies | ECG | Blood Pressure | Documents│
│  DOB: 1967-07-19                                                               │
│  MRN: 8953480292        ┌─────────────────────────────────────────────────┐  │
│                         │ Blood Pressure                                   │  │
│  Active Studies:        │                                                   │  │
│  • Holter (Day 3/14)   │ ABPM Study #2025-001 - Active                   │  │
│  • ABPM (12h/48h)      │ Started: Jan 7, 2025 10:30 AM                     │  │
│                         │                                                   │  │
│  [Create New Study]     │ [Sphygmo BP Visualization Iframe]                │  │
│                         │                                                   │  │
│                         └─────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Evaluation
| Criterion | Score | Rationale |
|-----------|-------|-----------|
| Clarity | 9/10 | Clear separation between ECG and BP data |
| Scalability | 10/10 | Easy to add "Glucose", "Weight" tabs |
| Efficiency | 8/10 | 2 clicks to any study data |
| Consistency | 9/10 | Follows common tab patterns |
| Technical | 8/10 | Straightforward implementation |
| **Total** | **44/50** | **Recommended** |

### Pros
- Future-proof for multiple data types
- Clear mental model (data-focused)
- Minimal top navigation
- Cross-study insights easy to implement

### Cons
- "All Studies" might be redundant with Summary
- Need to educate users on new navigation

## Option 2: Device-Specific Navigation

### Structure
```
Top Level:        Patients | Holter Studies | ABPM Studies  
Patient Level:    Summary | Active Study | History | Reports
```

### Visual Mockup
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [M] MYANT   Patients   Holter Studies   ABPM Studies       bp_chart@myant.ca ▼ │
│━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                                                 │
│  ABPM Studies                                          [Create ABPM Study]       │
│                                                                                 │
│  Filter: [All Patients ▼] [Active ▼] [Last 30 days ▼]                         │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │ Patient Name      │ Study ID   │ Started    │ Status  │ Progress        │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ Braun, Miriam     │ ABPM-001   │ Jan 7 10:30│ Active  │ ████░░░ 25%    │  │
│  │ Smith, John       │ ABPM-002   │ Jan 6 14:00│ Complete│ ████████ 100%  │  │
│  │ Davis, Emily      │ ABPM-003   │ Jan 5 09:00│ Complete│ ████████ 100%  │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Evaluation
| Criterion | Score | Rationale |
|-----------|-------|-----------|
| Clarity | 7/10 | Device-centric may confuse data relationships |
| Scalability | 4/10 | New top tab for each device type |
| Efficiency | 9/10 | Direct access to study type |
| Consistency | 10/10 | Matches current "Holter Studies" pattern |
| Technical | 9/10 | Minimal changes to existing structure |
| **Total** | **39/50** | |

### Pros
- Familiar pattern (extends current navigation)
- Direct access to study types
- Simple mental model

### Cons
- Top navigation grows with each device
- Harder to see cross-study correlations
- Duplicate functionality across study types

## Option 3: Hybrid with Smart Filtering

### Structure
```
Top Level:        Patients | Clinical Studies
Studies Page:     [All Types ▼] [Active ▼] [Date Range ▼]
Patient Level:    Overview | Studies | Measurements | Reports
```

### Visual Mockup
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [M] MYANT      Patients    Clinical Studies              bp_chart@myant.ca ▼ │
│━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                                                 │
│  Braun, Miriam              Overview | Studies | Measurements | Reports          │
│                                                                                 │
│  Studies                                               [Create New Study]        │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │ [Holter icon] Holter Study #H2025-001              Active · Day 3 of 14 │  │
│  │ Started: Jan 5, 2025 at 09:00 AM                                       │  │
│  │ Quality: 98% · Events: 2 · Last sync: 10 min ago                       │  │
│  │                                                   [View] [End Study]     │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ [BP icon] ABPM Study #A2025-001                    Active · 12h of 48h  │  │
│  │ Started: Jan 7, 2025 at 10:30 AM                                       │  │
│  │ Readings: 37/96 · Success rate: 94.6%                                  │  │
│  │                                                   [View] [End Study]     │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│  When viewing ABPM study → Embedded Sphygmo iframe                            │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Evaluation
| Criterion | Score | Rationale |
|-----------|-------|-----------|
| Clarity | 8/10 | "Clinical Studies" is professional but less specific |
| Scalability | 9/10 | Filtering handles growth well |
| Efficiency | 7/10 | 3 clicks to specific study data |
| Consistency | 7/10 | New patterns to learn |
| Technical | 7/10 | Requires filter state management |
| **Total** | **38/50** | |

### Pros
- Professional terminology
- Unified study management
- Good for mixed study views

### Cons
- Extra click to reach specific data
- "Measurements" tab ambiguous
- More complex implementation

## Detailed Recommendation: Option 1 with Refinements

### Final Navigation Structure

#### Top Level
```
Patients | Studies
```

#### Patient Detail Tabs
```
Summary | Studies | ECG | Blood Pressure | Reports
```

### Key Refinements

1. **Remove "All Studies" tab** - Summary serves this purpose
2. **ECG tab** - Shows only Holter ECG data (as required)
3. **Blood Pressure tab** - Shows ABPM data via Sphygmo iframe
4. **Reports tab** - Unified location for all study reports
5. **Studies tab** - List view of all studies with actions

### Implementation Mockups

#### Studies List View (Top Level)
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [M] MYANT      Patients    Studies                       bp_chart@myant.ca ▼ │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Studies                                              [Create SCLA Account]      │
│                                                                                 │
│  [All Types ▼] [All Status ▼] [Last 30 days ▼]       Export                   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │ Patient          │ Type    │ Study ID  │ Started   │ Status   │ Actions  │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ Braun, Miriam    │ [BP]    │ ABPM-001  │ Jan 7     │ Active   │ View     │  │
│  │                  │ ABPM    │           │ 10:30 AM  │ 25%      │ Cancel   │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ Braun, Miriam    │ [ECG]   │ H2025-001 │ Jan 5     │ Active   │ View     │  │
│  │                  │ Holter  │           │ 09:00 AM  │ Day 3/14 │ End      │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ Smith, John      │ [BP]    │ ABPM-002  │ Jan 6     │ Complete │ View     │  │
│  │                  │ ABPM    │           │ 14:00 PM  │ 100%     │ Report   │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### Patient Summary Tab
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [M] MYANT      Patients    Studies                       bp_chart@myant.ca ▼ │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Braun, Miriam              Summary | Studies | ECG | Blood Pressure | Reports   │
│  DOB: 1967-07-19 · MRN: 8953480292                                            │
│                                                                                 │
│  Active Studies                                        [Create New Study]        │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │ ● Holter Monitoring                                                     │  │
│  │   Day 3 of 14 · 98% quality · 2 events detected                        │  │
│  │   Last sync: 10 minutes ago                          [View ECG Data →]  │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ ● ABPM Study                                                            │  │
│  │   12h of 48h complete · 37 readings · 94.6% success                    │  │
│  │   Latest: 135/85 mmHg · HR: 72                          [View BP →]    │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│  Recent Measurements                                                            │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │ Blood Pressure: 135/85 mmHg (10:20 AM)  ↑ Above target                 │  │
│  │ Heart Rate: 72 bpm (10:20 AM)           ─ Normal                       │  │
│  │ ECG Rhythm: Normal Sinus (10:15 AM)     ✓ Stable                       │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### Blood Pressure Tab (ABPM View)
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [M] MYANT      Patients    Studies                       bp_chart@myant.ca ▼ │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Braun, Miriam              Summary | Studies | ECG | Blood Pressure | Reports   │
│                                                                                 │
│  ABPM Study #A2025-001                                [End Study] [Settings]    │
│  Active · Started Jan 7, 2025 10:30 AM · 12h of 48h complete                  │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │                    Sphygmo Blood Pressure Analysis                      │  │
│  │ ┌───────────────────────────────────────────────────────────────────┐  │  │
│  │ │                                                                     │  │  │
│  │ │  [THIS IS SPHYGMO IFRAME]                                         │  │  │
│  │ │                                                                     │  │  │
│  │ │  • 24-hour BP trend graph                                         │  │  │
│  │ │  • Day/night analysis                                             │  │  │
│  │ │  • Statistical summary                                            │  │  │
│  │ │  • Individual measurements table                                  │  │  │
│  │ │  • Circadian rhythm analysis                                      │  │  │
│  │ │                                                                     │  │  │
│  │ │  Native Sphygmo navigation preserved                              │  │  │
│  │ │                                                                     │  │  │
│  │ └───────────────────────────────────────────────────────────────────┘  │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Navigation Flows

#### Create ABPM Study Flow
```
1. Patient Summary → [Create New Study]
2. Study Type Selection Modal
   - Select "ABPM Study"
3. Configuration
   - Duration: 24h / 48h
   - Start time
   - Device assignment
4. Confirm → Study created
5. Redirect to Blood Pressure tab
```

#### View ABPM Results Flow
```
1. Studies list → Click ABPM study row
2. Opens patient Blood Pressure tab
3. Sphygmo iframe loads with study data
4. Native MVCP actions available above iframe
```

### Benefits of Recommended Approach

1. **Intuitive Navigation**
   - "Studies" clearly encompasses all monitoring types
   - Data-type tabs (ECG, Blood Pressure) are self-explanatory
   
2. **Scalability**
   - Easy to add "Glucose", "Weight", "SpO2" tabs
   - No top-level navigation changes needed
   
3. **Efficient Workflows**
   - 2 clicks to any study data
   - Summary provides at-a-glance status
   - Cross-study correlations visible
   
4. **Technical Simplicity**
   - Minimal changes to existing structure
   - Clear iframe boundaries
   - Straightforward state management

### Migration Path

1. **Phase 1**: Rename "Holter Studies" → "Studies"
2. **Phase 2**: Add study type filtering on Studies page
3. **Phase 3**: Implement patient-level tab structure
4. **Phase 4**: Integrate Sphygmo iframe in Blood Pressure tab
5. **Phase 5**: Remove virtual consultation elements

## Conclusion

The recommended navigation structure (Option 1 with refinements) provides the best balance of clarity, scalability, and user efficiency. It aligns with modern clinical software patterns while respecting the existing MVCP architecture. The data-centric patient tabs create a logical information hierarchy that will serve clinicians well as the platform expands to support additional monitoring devices.