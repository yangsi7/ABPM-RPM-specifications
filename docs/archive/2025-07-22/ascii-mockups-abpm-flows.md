# ASCII Mock Screens - ABPM Integration Flows

## Overview
This document provides ASCII mockups for key ABPM integration screens and flows to guide the design team. Each screen shows the proposed UI changes and new ABPM-specific features.

## Screen 1: Patient Profile - Study Type Selection

### Current State (Holter Only)
```
┌────────────────────────────────────────────────────────────────────────────────┐
│ [←] Patients    Holter Studies                                  bp_chart@myant.ca│
│━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                                                 │
│ Braun, Miriam                            Summary  Holter Studies  ECG  Virtual  │
│                                          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                                                                 │
│                            Studies                                              │
│                                                                 [Set up Holter  │
│  ┌─ COLUMNS ─┬─ FILTERS ─┬─ EXPORT ─┐                           study ▼]      │
│  └───────────┴───────────┴──────────┘                                         │
│                                                                                 │
│  Start Date ↓  Study Duration  Status  Estimated End  Actual End  Progress     │
│  ─────────────────────────────────────────────────────────────────────────    │
│  2024-12-27    14-days        Overdue  2025-01-10    --         15.4 hrs     │
│                                                                                 │
│                                                   1-1 of 1  [<] 1 [>]          │
└────────────────────────────────────────────────────────────────────────────────┘
```

### Future State (Multi-Study Support)
```
┌────────────────────────────────────────────────────────────────────────────────┐
│ [←] Patients    Studies                                         bp_chart@myant.ca│
│━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                                                 │
│ Braun, Miriam                            Summary  Studies  ECG  Virtual         │
│                                          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                                                                 │
│                            All Studies                                          │
│                                                                 [+ New Study ▼] │
│  ┌─ COLUMNS ─┬─ FILTERS ─┬─ EXPORT ─┐    Study Type: [All Types ▼]            │
│  └───────────┴───────────┴──────────┘                                         │
│                                                                                 │
│  Type    Start Date ↓  Duration   Status    End Date    Progress   Actions     │
│  ──────────────────────────────────────────────────────────────────────────    │
│  [ECG]   2024-12-27    14-days   Overdue   2025-01-10  15.4 hrs  View │ ⋮    │
│  [BP]    2025-01-15    7-days    Active    2025-01-22  3 days    View │ ⋮    │
│  [⚖]     2025-01-15    30-days   Active    2025-02-14  Daily     View │ ⋮    │
│                                                                                 │
│                                                   1-3 of 3  [<] 1 [>]          │
└────────────────────────────────────────────────────────────────────────────────┘

Legend: [ECG] = Holter, [BP] = ABPM, [⚖] = Scale/Weight
```

## Screen 2: New Study Creation Modal

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           Create New Study                                    [X]│
│ ═══════════════════════════════════════════════════════════════════════════════ │
│                                                                                  │
│  Select Study Type:                                                              │
│                                                                                  │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐   │
│  │      ECG      │  │      BP       │  │    SCALE      │  │   GLUCOSE     │   │
│  │               │  │               │  │               │  │               │   │
│  │   [♥♥♥♥♥]    │  │    [▂▄█▄▂]   │  │     [⚖]      │  │    [📊]      │   │
│  │               │  │               │  │               │  │   Coming      │   │
│  │    Holter     │  │     ABPM      │  │    Weight     │  │    Soon       │   │
│  │ ✓ Available   │  │ ✓ Available   │  │ ✓ Available   │  │               │   │
│  └───────────────┘  └───────────────┘  └───────────────┘  └───────────────┘   │
│         (•)                ( )                ( )                              │
│                                                                                  │
│  Study Duration:                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │ ( ) 24-hour  ( ) 48-hour  ( ) 72-hour  ( ) 7-day  (•) 14-day           │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                  │
│  Start Date & Time:                                                              │
│  ┌──────────────────┐  ┌─────────┐                                             │
│  │ 2025-01-21  📅   │  │ 10:30   │                                             │
│  └──────────────────┘  └─────────┘                                             │
│                                                                                  │
│                                              [Cancel]  [Continue →]              │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Screen 3: ABPM-Specific Configuration

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        ABPM Study Configuration                               [X]│
│ ═══════════════════════════════════════════════════════════════════════════════ │
│                                                                                  │
│  Blood Pressure Measurement Settings:                                            │
│                                                                                  │
│  Daytime Interval:              Nighttime Interval:                              │
│  ┌─────────────────┐           ┌─────────────────┐                             │
│  │ Every 20 min ▼  │           │ Every 30 min ▼  │                             │
│  └─────────────────┘           └─────────────────┘                             │
│                                                                                  │
│  Daytime Hours:                 Nighttime Hours:                                │
│  ┌──────┐ to ┌──────┐         ┌──────┐ to ┌──────┐                           │
│  │ 06:00│    │ 22:00│         │ 22:00│    │ 06:00│                           │
│  └──────┘    └──────┘         └──────┘    └──────┘                           │
│                                                                                  │
│  Target Ranges:                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │ Systolic:   [120] / [80]  mmHg    (Daytime)                            │   │
│  │ Diastolic:  [110] / [70]  mmHg    (Nighttime)                          │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                  │
│  Device Information:                                                             │
│  ┌─────────────────────────────────────────────────────────────────────────┐   │
│  │ Device Model: [ABPM-50 ▼]                                               │   │
│  │ Cuff Size:    [Medium (22-32cm) ▼]                                     │   │
│  │ Setup Type:   [In-Clinic Setup ▼]                                      │   │
│  └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                  │
│  [✓] Send setup instructions to patient's SCLA app                              │
│  [✓] Enable automatic data sync every 4 hours                                   │
│                                                                                  │
│                                              [← Back]  [Create Study]            │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Screen 4: ABPM Study Details View (with Sphygmo iframe)

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ [←] Studies    ABPM Study Details                               bp_chart@myant.ca│
│━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                                                 │
│ Braun, Miriam - ABPM Study (Active)                        [End Study] [Export]│
│                                                                                 │
│ Started: 2025-01-15 10:30 | Duration: 7-days | Ends: 2025-01-22 10:30         │
│                                                                                 │
│ ┌─ Study Progress ──────────────────────────────────────────────────────────┐  │
│ │ Day 1  [████████] 100%  |  Day 4  [████░░░░] 65%   |  Day 7  [░░░░░░░] 0% │  │
│ │ Day 2  [████████] 100%  |  Day 5  [██░░░░░░] 35%   |                      │  │
│ │ Day 3  [████████] 100%  |  Day 6  [░░░░░░░░] 5%    |  Overall: 71%       │  │
│ └────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│ ┌─ Quick Stats ─────────────────────────────────────────────────────────────┐  │
│ │ Total Readings: 312 | Valid: 298 (95.5%) | Latest: 135/82 (10 min ago)    │  │
│ │ Day Avg: 128/79 | Night Avg: 118/72 | Morning Surge: +15 mmHg             │  │
│ └────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│ ╔═══════════════════════════════════════════════════════════════════════════╗  │
│ ║                        Sphygmo ABPM Analytics                             ║  │
│ ║ ┌─────────────────────────────────────────────────────────────────────┐ ║  │
│ ║ │  24-Hour BP Trend                          [Day|Week|Full] [PDF📄]   │ ║  │
│ ║ │  160 ┤                                                              │ ║  │
│ ║ │  140 ┤     ╱╲    ╱╲      ╱╲    ──── Systolic                      │ ║  │
│ ║ │  120 ┤────╯──╲──╱──╲────╱──╲───── Target                          │ ║  │
│ ║ │  100 ┤        ╲╱    ╲  ╱    ╲                                      │ ║  │
│ ║ │   80 ┤─────────────────────────── Diastolic                       │ ║  │
│ ║ │   60 ┤                                                              │ ║  │
│ ║ │      └──┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬──         │ ║  │
│ ║ │        6am  9am noon 3pm  6pm  9pm  mid  3am  6am               │ ║  │
│ ║ └─────────────────────────────────────────────────────────────────────┘ ║  │
│ ║                                                                          ║  │
│ ║ [Readings] [Statistics] [Diary] [Report] [Settings]                     ║  │
│ ║                                                                          ║  │
│ ╚═══════════════════════════════════════════════════════════════════════════╝  │
│                                                                 Powered by Sphygmo│
└────────────────────────────────────────────────────────────────────────────────┘
```

## Screen 5: Virtual Consultation Tab (RPM Dashboard)

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ [←] Patients    Studies                                         bp_chart@myant.ca│
│━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│                                                                                 │
│ Braun, Miriam                     Summary  Studies  ECG  Virtual Consultation  │
│                                   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                                                                 │
│                 Remote Patient Monitoring Dashboard                             │
│                                                          [Dash] [Graph] [Table] │
│ ┌─ Active Monitoring ───────────────────────────────────────────────────────┐  │
│ │ ⚡ Holter ECG: Day 5 of 14  |  🩺 ABPM: Day 3 of 7  |  ⚖ Weight: Daily   │  │
│ └────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│ ┌─ Blood Pressure ──────────────────┬─ Heart Rate ─────────────────────────┐  │
│ │                                    │                                       │  │
│ │  Latest: 128/82 mmHg               │  Latest: 72 bpm                     │  │
│ │  ┌────────────────────┐           │  ┌────────────────────┐             │  │
│ │  │ ▂▄█▆▄▂▄█▄▂▄▆▄▂    │           │  │    ∿∿∿∿∿∿∿∿∿∿∿    │             │  │
│ │  │ 7-day trend        │           │  │    24-hr trend     │             │  │
│ │  └────────────────────┘           │  └────────────────────┘             │  │
│ │  Day Avg: 125/78                  │  Resting: 68 | Active: 95           │  │
│ │  Night Avg: 115/70                │  Variability: Normal                │  │
│ │  [View ABPM Study →]              │  [View ECG →]                       │  │
│ └────────────────────────────────────┴───────────────────────────────────────┘  │
│                                                                                 │
│ ┌─ Weight ──────────────────────────┬─ Activity ────────────────────────────┐  │
│ │                                    │                                       │  │
│ │  Latest: 154 lbs (70 kg)          │  Today: 3,847 steps                 │  │
│ │  ┌────────────────────┐           │  ┌────────────────────┐             │  │
│ │  │ ───__──────_____   │           │  │ ║║ ║  ║║║  ║ ║║   │             │  │
│ │  │ 30-day trend       │           │  │ Weekly view        │             │  │
│ │  └────────────────────┘           │  └────────────────────┘             │  │
│ │  Change: -2 lbs (30d)             │  Goal: 10,000 steps                 │  │
│ │  BMI: 23.4                        │  Avg Sleep: 6.5 hrs                 │  │
│ └────────────────────────────────────┴───────────────────────────────────────┘  │
│                                                                                 │
│ ┌─ Alerts & Notifications ───────────────────────────────────────────────────┐  │
│ │ 🔴 High BP Reading: 145/95 at 3:45 PM - Patient reported headache         │  │
│ │ 🟡 Missed readings: ABPM device disconnected for 2 hours last night       │  │
│ │ 🟢 Weight goal achieved: Patient reached 30-day target                    │  │
│ └────────────────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Screen 6: SCLA App - ABPM Device Pairing

```
┌─────────────────────────────────────┐
│ ≡                SCLA            ⚙  │
│─────────────────────────────────────│
│                                     │
│        Add Blood Pressure           │
│           Monitor                   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │                             │   │
│  │      [█▀▀█]                │   │
│  │      [█▄▄█]                │   │
│  │      ABPM-50               │   │
│  │                             │   │
│  │    ●●●●● ●●●●●            │   │
│  │    Searching...            │   │
│  └─────────────────────────────┘   │
│                                     │
│  Nearby Devices:                    │
│  ┌─────────────────────────────┐   │
│  │ 📱 ABPM-50-A3F2  [Pair]    │   │
│  │ 📱 ABPM-50-B1C4  [Pair]    │   │
│  │ ⚖  Scale-200    [Pair]    │   │
│  └─────────────────────────────┘   │
│                                     │
│  Your clinician has scheduled:      │
│  • 7-day ABPM study                 │
│  • Starting: Today 10:30 AM         │
│  • Measurements every 20 min        │
│                                     │
│  [?] Pairing Instructions           │
│                                     │
│─────────────────────────────────────│
│  [Home]  [Devices]  [Log]  [More]  │
└─────────────────────────────────────┘
```

## Screen 7: SCLA App - ABPM Active Monitoring

```
┌─────────────────────────────────────┐
│ ≡         ABPM Study Active      ⚙  │
│─────────────────────────────────────│
│                                     │
│         Day 3 of 7                  │
│     ████████████░░░░░░░             │
│         42% Complete                │
│                                     │
│  ┌─────────────────────────────┐   │
│  │     Latest Reading           │   │
│  │                              │   │
│  │      135/85 mmHg            │   │
│  │                              │   │
│  │      10 mins ago            │   │
│  │      ♥ 78 bpm               │   │
│  └─────────────────────────────┘   │
│                                     │
│  Next Reading: In 10 minutes        │
│  [■■■■■■■□□□]                      │
│                                     │
│  Today's Summary:                   │
│  ┌─────────────────────────────┐   │
│  │ Readings: 42/48 (88%)       │   │
│  │ Average: 128/82 mmHg        │   │
│  │ Highest: 142/88 mmHg        │   │
│  │ In Range: 85%               │   │
│  └─────────────────────────────┘   │
│                                     │
│  Quick Actions:                     │
│  [📝 Add Symptom] [⏸ Pause Study] │
│                                     │
│  ⚠️ Keep device on during shower   │
│                                     │
│─────────────────────────────────────│
│  [Home]  [Devices]  [Log]  [More]  │
└─────────────────────────────────────┘
```

## Flow Diagram: Complete ABPM Study Lifecycle

```
MVCP Portal                          SCLA App                         Sphygmo
    │                                   │                                │
    ├─[1]─Create ABPM Study             │                                │
    │     Select patient                │                                │
    │     Choose ABPM type              │                                │
    │     Configure intervals           │                                │
    │                                   │                                │
    ├─[2]─Generate Study ID──────────>  │                                │
    │     Push to Event Bus             │                                │
    │                                   │                                │
    ├─[3]─Sync to Sphygmo ─────────────────────────────────────────────>│
    │     Create shadow patient         │                                │
    │     Create ABPM study             │                                │
    │     Return Sphygmo ID <───────────────────────────────────────────┤
    │                                   │                                │
    │                              [4] Receive                           │
    │                              Study Config                          │
    │                                   ├─[5]─Pair ABPM Device           │
    │                                   │     Bluetooth discovery        │
    │                                   │     Configure device           │
    │                                   │                                │
    │                                   ├─[6]─Collect BP Data           │
    │                                   │     Every 20 minutes           │
    │                                   │     Store locally              │
    │                                   │                                │
    │<──────[7]─Sync BP Readings────────┤                                │
    │       Every 4 hours / on-demand   │                                │
    │                                   │                                │
    ├─[8]─Forward to Sphygmo ──────────────────────────────────────────>│
    │     Via API Gateway               │                                │
    │                                   │                                │
    ├─[9]─View in iframe <──────────────────────────────────────────────┤
    │     PostMessage communication     │                                │
    │     Real-time updates             │                                │
    │                                   │                                │
    ├─[10]─End Study                    │                                │
    │      Generate report request ─────────────────────────────────────>│
    │      Receive PDF <────────────────────────────────────────────────┤
    │      Store in S3                  │                                │
    │                                   │                                │
    └───────────────────────────────────┴────────────────────────────────┘
```

## Error States and Edge Cases

### Connection Lost During Study
```
┌─────────────────────────────────────┐
│ ⚠️  ABPM Device Disconnected        │
│─────────────────────────────────────│
│                                     │
│  Last seen: 2 hours ago            │
│                                     │
│  Missed readings: 6                 │
│                                     │
│  This may affect your study         │
│  results. Please ensure:            │
│                                     │
│  • Device is charged (🔋 65%)      │
│  • Bluetooth is enabled             │
│  • You're within 30ft of phone     │
│                                     │
│  [Troubleshoot]  [Reconnect Now]   │
│                                     │
└─────────────────────────────────────┘
```

### Sync Failure Handling
```
┌────────────────────────────────────────────────────────────────────────────────┐
│ ⚠️ Data Sync Issue                                               [Retry] [X]   │
│────────────────────────────────────────────────────────────────────────────────│
│                                                                                │
│  Unable to sync ABPM data to clinic portal.                                   │
│                                                                                │
│  • 42 readings pending upload                                                  │
│  • Last successful sync: 4 hours ago                                          │
│  • Next auto-retry: in 5 minutes                                              │
│                                                                                │
│  Your data is safely stored on your device and will sync when connection      │
│  is restored. The study will continue normally.                               │
│                                                                                │
│                                            [Sync Now]  [Sync Settings]         │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Design System Tokens

```css
/* ABPM-Specific Colors */
--abpm-primary: #00796B;      /* Teal - matches medical theme */
--abpm-secondary: #004D40;    /* Dark teal */
--abpm-accent: #4DB6AC;       /* Light teal */
--abpm-danger: #D32F2F;       /* High BP alert */
--abpm-warning: #F57C00;      /* Missed readings */
--abpm-success: #388E3C;      /* Normal readings */

/* Study Type Icons */
--icon-holter: "♥";           /* Heart for ECG */
--icon-abpm: "🩺";            /* Stethoscope for BP */
--icon-scale: "⚖";            /* Scale for weight */
--icon-glucose: "📊";         /* Chart for glucose */

/* Spacing for Multi-Study Lists */
--study-card-padding: 16px;
--study-type-badge-size: 32px;
--study-progress-height: 8px;
```

## Responsive Considerations

### Tablet View (Patient List with Preview)
```
┌─────────────────────────┬────────────────────────────────┐
│ Patient List            │ Patient Preview                │
│ ─────────────────────   │ ─────────────────────────────  │
│ Braun, Miriam        >  │ Active Studies:                │
│ [●●●] 3 active studies  │ • Holter (Day 5/14)           │
│                         │ • ABPM (Day 3/7)              │
│ Deborah, Miss        >  │ • Weight (Daily)              │
│ [●] 1 active study      │                               │
│                         │ Latest Alerts:                 │
│ Emard, Arnold        >  │ 🔴 High BP: 145/95           │
│ [●●] 2 active studies   │ 🟡 Missed ABPM readings      │
└─────────────────────────┴────────────────────────────────┘
```

## Next Steps for Design Team

1. **Visual Design**:
   - Apply brand colors to ASCII layouts
   - Design study type icons and badges
   - Create loading and transition states

2. **Interaction Design**:
   - Define PostMessage animation for iframe
   - Design touch targets for mobile
   - Create gesture controls for graphs

3. **Information Architecture**:
   - Finalize navigation labels
   - Design breadcrumb patterns
   - Plan notification grouping

4. **Accessibility**:
   - Ensure WCAG AA compliance
   - Design for screen readers
   - Provide keyboard navigation

5. **Design System**:
   - Extend existing components
   - Create ABPM-specific patterns
   - Document usage guidelines