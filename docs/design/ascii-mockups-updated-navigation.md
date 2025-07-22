# ASCII Mockups - Updated Navigation (v3)

## Overview
Updated mockups reflecting the new navigation structure without virtual consultations and with unified studies management.

---

## 1. Studies List Page (Top Level)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [M] MYANT HEALTH        Patients    Studies                  bp_chart@myant.ca ▼ │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Studies                                              [Create SCLA Account]      │
│                                                                                 │
│  [All Types ▼] [All Status ▼] [Last 30 days ▼]       📊 Export   🔍 Search    │
│                                                                                 │
│  Showing 15 of 127 studies                                    Page 1 of 9 < >  │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │ □ │ Patient Name    │ Type   │ Study ID   │ Started    │ Status        │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ □ │ Braun, Miriam   │ [BP]   │ ABPM-001   │ Jan 7      │ Active        │  │
│  │   │                 │ ABPM   │            │ 10:30 AM   │ ████░░░ 25%   │  │
│  │   │                 │        │            │            │ [View] [End]  │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ □ │ Braun, Miriam   │ [ECG]  │ H2025-001  │ Jan 5      │ Active        │  │
│  │   │                 │ Holter │            │ 09:00 AM   │ Day 3/14      │  │
│  │   │                 │        │            │            │ [View] [End]  │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ □ │ Smith, John     │ [BP]   │ ABPM-002   │ Jan 6      │ Complete      │  │
│  │   │                 │ ABPM   │            │ 14:00 PM   │ ████████ 100% │  │
│  │   │                 │        │            │            │ [View] [Report]│  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ □ │ Davis, Emily    │ [ECG]  │ H2024-412  │ Dec 28     │ Complete      │  │
│  │   │                 │ Holter │            │ 11:00 AM   │ 14 days       │  │
│  │   │                 │        │            │            │ [View] [Report]│  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│  Selected: 0 studies                          [Bulk Export] [Bulk Archive]      │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Key Features**:
- Unified studies list with type indicators
- Visual progress bars for active studies
- Bulk actions for selected studies
- Clear filtering options

---

## 2. Patient Detail - Summary Tab

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [M] MYANT HEALTH        Patients    Studies                  bp_chart@myant.ca ▼ │
├─────────────────────────────────────────────────────────────────────────────────┤
│  ← Back to Patients                                                            │
│                                                                                 │
│  Braun, Miriam              Summary | Studies | ECG | Blood Pressure | Reports  │
│  Female · 57 years · DOB: 1967-07-19 · MRN: 8953480292                        │
│                                                                                 │
│  ┌─────────────────────────┬──────────────────────────────────────────────────┐│
│  │ Active Studies (2)      │ Recent Vital Signs                               ││
│  │                         │                                                  ││
│  │ ┌─────────────────────┐ │ ┌──────────────┬──────────────┬──────────────┐ ││
│  │ │ [ECG] Holter Study  │ │ │ Blood Pressure│ Heart Rate   │ Temperature  │ ││
│  │ │ Day 3 of 14         │ │ ├──────────────┼──────────────┼──────────────┤ ││
│  │ │ Quality: 98%        │ │ │   135/85     │    72 bpm    │   98.6°F     │ ││
│  │ │ 2 events detected   │ │ │    mmHg      │              │              │ ││
│  │ │                     │ │ │  10:20 AM    │  10:20 AM    │  Yesterday   │ ││
│  │ │ [View ECG Data →]   │ │ │     ↑        │    Normal    │   Normal     │ ││
│  │ └─────────────────────┘ │ └──────────────┴──────────────┴──────────────┘ ││
│  │                         │                                                  ││
│  │ ┌─────────────────────┐ │ Alerts & Notifications                          ││
│  │ │ [BP] ABPM Study     │ │ ┌────────────────────────────────────────────┐ ││
│  │ │ 12h of 48h          │ │ │ ⚠️ Elevated BP readings in ABPM study      │ ││
│  │ │ 37 readings         │ │ │    Average: 142/88 mmHg                    │ ││
│  │ │ Success: 94.6%      │ │ │    Review recommended                      │ ││
│  │ │                     │ │ └────────────────────────────────────────────┘ ││
│  │ │ [View BP Trends →]  │ │                                                  ││
│  │ └─────────────────────┘ │ Clinical Notes (Last 3)                         ││
│  │                         │ ┌────────────────────────────────────────────┐ ││
│  │ [Create New Study]      │ │ Jan 7 - Started ABPM monitoring            │ ││
│  │                         │ │ Jan 5 - Holter device applied              │ ││
│  │                         │ │ Jan 3 - Initial consultation               │ ││
│  └─────────────────────────┴──────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Key Features**:
- Active studies with direct links to data tabs
- Latest vital signs at a glance
- Prominent alerts for clinical attention
- Quick access to create new studies

---

## 3. Patient Detail - Studies Tab

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [M] MYANT HEALTH        Patients    Studies                  bp_chart@myant.ca ▼ │
├─────────────────────────────────────────────────────────────────────────────────┤
│  ← Back to Patients                                                            │
│                                                                                 │
│  Braun, Miriam              Summary | Studies | ECG | Blood Pressure | Reports  │
│                                                                                 │
│  Patient Studies                                          [Create New Study]     │
│                                                                                 │
│  Active (2)  Completed (5)  All (7)                                            │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │ Type  │ Study Details                                    │ Actions       │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ [ECG] │ Holter Study H2025-001                          │               │  │
│  │       │ Started: Jan 5, 2025 09:00 AM                   │ [View ECG]    │  │
│  │       │ Duration: 14 days (Day 3 of 14)                 │ [End Study]   │  │
│  │       │ Quality: 98% · Events: 2                        │ [Export]      │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ [BP]  │ ABPM Study A2025-001                            │               │  │
│  │       │ Started: Jan 7, 2025 10:30 AM                   │ [View BP]     │  │
│  │       │ Duration: 48 hours (25% complete)               │ [End Study]   │  │
│  │       │ Readings: 37/96 · Success Rate: 94.6%           │ [Settings]    │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ [BP]  │ ABPM Study A2024-127 ✓                          │               │  │
│  │       │ Dec 15-16, 2024 (24 hours)                      │ [View Report] │  │
│  │       │ Completed successfully                           │ [Download]    │  │
│  │       │ 48 readings · 95.8% success rate                │ [Archive]     │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│  Comparison View: [□ Select studies to compare]                                │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Patient Detail - Blood Pressure Tab (ABPM)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [M] MYANT HEALTH        Patients    Studies                  bp_chart@myant.ca ▼ │
├─────────────────────────────────────────────────────────────────────────────────┤
│  ← Back to Patients                                                            │
│                                                                                 │
│  Braun, Miriam              Summary | Studies | ECG | Blood Pressure | Reports  │
│                                                                                 │
│  ABPM Study A2025-001 - Active                        [End Study] [⚙️ Settings] │
│  Started: January 7, 2025 at 10:30 AM · Progress: 12h of 48h (25%)            │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │ Study Metrics                                                           │  │
│  │ Readings: 37/96 · Success Rate: 94.6% · Last Reading: 10:20 AM        │  │
│  │ Average BP: 142/88 mmHg · Average HR: 75 bpm                          │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │                         Sphygmo BP Analysis                             │  │
│  │ ╔═══════════════════════════════════════════════════════════════════╗ │  │
│  │ ║                                                                     ║ │  │
│  │ ║                    [SPHYGMO IFRAME CONTENT]                        ║ │  │
│  │ ║                                                                     ║ │  │
│  │ ║  • 24-hour ambulatory BP trend visualization                      ║ │  │
│  │ ║  • Day/night blood pressure patterns                              ║ │  │
│  │ ║  • Statistical analysis and distributions                         ║ │  │
│  │ ║  • Individual measurement details                                 ║ │  │
│  │ ║  • BP load calculations                                           ║ │  │
│  │ ║  • Circadian rhythm analysis                                      ║ │  │
│  │ ║                                                                     ║ │  │
│  │ ║  Navigation: [Summary] [Trends] [Statistics] [Measurements]       ║ │  │
│  │ ║                                                                     ║ │  │
│  │ ╚═══════════════════════════════════════════════════════════════════╝ │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│  Quick Actions: [Download Data] [Generate Report] [Share with Patient]         │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Create New Study Modal

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ [M] MYANT HEALTH        Patients    Studies                  bp_chart@myant.ca ▼ │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Braun, Miriam              Summary | Studies | ECG | Blood Pressure | Reports  │
│                                                                                 │
│         ┌───────────────────────────────────────────────────────────────┐      │
│         │                    Create New Study                           X │      │
│         │                                                               │      │
│         │ Select Study Type:                                            │      │
│         │                                                               │      │
│         │ ┌─────────────────────┐  ┌─────────────────────┐            │      │
│         │ │    [ECG ICON]       │  │    [BP ICON]        │            │      │
│         │ │                     │  │                     │            │      │
│         │ │   Holter Study      │  │    ABPM Study       │            │      │
│         │ │                     │  │                     │            │      │
│         │ │ ○ Select            │  │ ● Selected          │            │      │
│         │ └─────────────────────┘  └─────────────────────┘            │      │
│         │                                                               │      │
│         │ ┌─────────────────────┐  ┌─────────────────────┐            │      │
│         │ │   [SCALE ICON]      │  │  [GLUCOSE ICON]     │            │      │
│         │ │                     │  │                     │            │      │
│         │ │   Weight Tracking   │  │  Glucose Monitoring │            │      │
│         │ │   (Coming Q2 2025)  │  │   (Coming Q3 2025)  │            │      │
│         │ │ ○ Disabled          │  │ ○ Disabled          │            │      │
│         │ └─────────────────────┘  └─────────────────────┘            │      │
│         │                                                               │      │
│         │ ABPM Study Configuration:                                    │      │
│         │                                                               │      │
│         │ Duration:        ○ 24 hours    ● 48 hours                   │      │
│         │                                                               │      │
│         │ Start Date:      [2025-01-08 ▼]                             │      │
│         │                                                               │      │
│         │ Start Time:      [10:30 AM ▼]                               │      │
│         │                                                               │      │
│         │ Device Setup:    ○ In-clinic    ○ At-home                   │      │
│         │                                                               │      │
│         │                              [Cancel]  [Create Study]        │      │
│         └───────────────────────────────────────────────────────────────┘      │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. SCLA App - Updated Navigation

```
┌─────────────────────────────────────────┐
│ 📱 SCLA - Connected Health              │
├─────────────────────────────────────────┤
│                                         │
│  Welcome, Miriam                        │
│                                         │
│  Active Studies (2)                     │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ [ECG] Holter Monitoring          │   │
│  │ Day 3 of 14                     │   │
│  │ Device: Connected ✓              │   │
│  │ Quality: 98%                     │   │
│  │                   [View Details] │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ [BP] ABPM Study                  │   │
│  │ 12h of 48h complete              │   │
│  │ Device: Active ✓                 │   │
│  │ Next reading: 11:30 AM           │   │
│  │                   [View Details] │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Quick Actions:                         │
│  [Log Symptom] [Manual BP Reading]     │
│                                         │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│  [Studies]  [Devices]  [Profile]       │
└─────────────────────────────────────────┘
```

---

## 7. Responsive Mobile View - Studies List

```
┌─────────────────────┐
│ 📱 Studies         │
├─────────────────────┤
│ [≡] [All Types ▼]  │
│                     │
│ ┌─────────────────┐ │
│ │ Braun, Miriam   │ │
│ │ [BP] ABPM       │ │
│ │ Active · 25%    │ │
│ │ Jan 7, 10:30 AM │ │
│ │         [View>] │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ Braun, Miriam   │ │
│ │ [ECG] Holter    │ │
│ │ Active · Day 3  │ │
│ │ Jan 5, 09:00 AM │ │
│ │         [View>] │ │
│ └─────────────────┘ │
│                     │
│ ┌─────────────────┐ │
│ │ Smith, John     │ │
│ │ [BP] ABPM       │ │
│ │ Complete · 100% │ │
│ │ Jan 6, 14:00 PM │ │
│ │       [Report>] │ │
│ └─────────────────┘ │
│                     │
│ [Patients][Studies] │
└─────────────────────┘
```

---

## Navigation Flow Diagrams

### Flow 1: View Active ABPM Study
```
Studies List
    ↓ Click ABPM row
Patient Detail (Opens on Blood Pressure tab)
    ↓ Sphygmo iframe loads
View detailed BP analysis
    ↓ Optional actions
[End Study] or [Generate Report]
```

### Flow 2: Create New ABPM Study
```
Patient Summary
    ↓ Click [Create New Study]
Study Type Selection Modal
    ↓ Select ABPM
Configure Study Parameters
    ↓ Click [Create Study]
Study created in MVCP
    ↓ Async sync to Sphygmo
Redirect to Blood Pressure tab
```

### Flow 3: Cross-Study Review
```
Patient Summary
    ↓ View active studies
Click study link
    ↓ Navigate to specific tab
Switch between tabs for correlation
    ↓ ECG ↔ Blood Pressure
Generate combined report
```

---

## Design Principles Applied

1. **Simplified Navigation**
   - Removed virtual consultation
   - Unified studies management
   - Clear data-type separation

2. **Visual Hierarchy**
   - Study type icons for quick scanning
   - Progress indicators for active studies
   - Status badges for completed studies

3. **Efficient Workflows**
   - Maximum 2 clicks to any data
   - Direct links from summary
   - Bulk actions where appropriate

4. **Responsive Design**
   - Mobile-first approach
   - Touch-friendly targets
   - Collapsible navigation

5. **Integration Points**
   - Clear iframe boundaries
   - Native MVCP controls
   - Seamless Sphygmo embedding