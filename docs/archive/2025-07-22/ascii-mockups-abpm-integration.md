# ASCII Mock Screens - ABPM Integration

## Overview
This document provides ASCII mockups for key ABPM integration screens to guide the design team. Each screen shows the new ABPM functionality integrated into the existing MVCP interface.

---

## 1. Study Setup Modal - Enhanced with Study Type Selection

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ Patients    Holter Studies                          bp_chart@myant.ca ▼ │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Braun, Miriam                      Summary | Studies | ECG | Virtual Consultation │
│                                                                                 │
│         ┌───────────────────────────────────────────────────────────────┐      │
│         │                     Set up New Study                          │      │
│         │                                                               │      │
│         │ Select Study Type                                             │      │
│         │ ┌─────────────────────┐  ┌─────────────────────┐            │      │
│         │ │    [ECG ICON]       │  │    [BP ICON]        │            │      │
│         │ │                     │  │                     │            │      │
│         │ │   Holter Study      │  │    ABPM Study       │            │      │
│         │ │                     │  │                     │            │      │
│         │ │ ● Selected          │  │ ○ Select            │            │      │
│         │ └─────────────────────┘  └─────────────────────┘            │      │
│         │                                                               │      │
│         │ ┌─────────────────────┐  ┌─────────────────────┐            │      │
│         │ │   [SCALE ICON]      │  │  [GLUCOSE ICON]     │            │      │
│         │ │                     │  │                     │            │      │
│         │ │   Weight Tracking   │  │  Glucose Monitoring │            │      │
│         │ │   (Coming Soon)     │  │   (Coming Soon)     │            │      │
│         │ │ ○ Disabled          │  │ ○ Disabled          │            │      │
│         │ └─────────────────────┘  └─────────────────────┘            │      │
│         │                                                               │      │
│         │ Study Duration                                                │      │
│         │ ○ 24-hour    ● 48-hour    ○ 7-day    ○ 14-day              │      │
│         │                                                               │      │
│         │ Study Start Date                    Study Start Time          │      │
│         │ [2025-01-07 ▼]                     [10:30 AM ▼]             │      │
│         │                                                               │      │
│         │ Setup Type                          Device Configuration      │      │
│         │ [In-Clinic Setup ▼]                 [Standard Cuff ▼]        │      │
│         │                                                               │      │
│         │                              [Cancel]  [Continue →]           │      │
│         └───────────────────────────────────────────────────────────────┘      │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Interaction Flow:
1. User clicks "Set up study" button
2. Modal opens with study type selection
3. User selects ABPM Study
4. Duration options update to ABPM-specific (24h, 48h only)
5. Device configuration shows ABPM-specific options
6. Continue button creates study in MVCP and syncs to Sphygmo

---

## 2. Studies Tab - Mixed Study Types

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ Patients    Holter Studies                          bp_chart@myant.ca ▼ │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Braun, Miriam                      Summary | Studies | ECG | Virtual Consultation │
│                                                                                 │
│  Studies                                                    [Set up study]       │
│                                                                                 │
│  [All Types ▼] [All Status ▼] [Date Range ▼]              Page 1 of 3         │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │ TYPE | START DATE | DURATION | STATUS | END DATE | PROGRESS | ACTIONS    │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ [BP] │ 2025-01-07 │ 48-hours │ Active │    --    │ 12/48 hrs│ View      │  │
│  │ ABPM │ 10:30 AM  │          │        │          │ ████░░░░ │ Cancel    │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ [ECG]│ 2024-12-27│ 14-days  │Completed│2025-01-10│ 336 hrs  │ View      │  │
│  │Holter│ 14:00 PM  │          │        │          │ ████████ │ Download  │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ [BP] │ 2024-12-15│ 24-hours │Completed│2024-12-16│ 24 hrs   │ View      │  │
│  │ ABPM │ 09:00 AM  │          │        │          │ ████████ │ Report    │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│  Study Statistics:                                                              │
│  Total: 15 | Holter: 12 | ABPM: 3 | Active: 1 | Completed: 14                │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Key Features:
- Type filter includes "All Types", "Holter", "ABPM", "Weight" (future)
- Visual type indicators (icons) for quick scanning
- Progress bar shows completion status
- Actions vary by study type and status

---

## 3. ABPM Study Detail View (Virtual Consultation Tab)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ Patients    Holter Studies                          bp_chart@myant.ca ▼ │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Braun, Miriam                      Summary | Studies | ECG | Virtual Consultation │
│                                                                                 │
│  ABPM Study - Active (Started: 2025-01-07 10:30 AM)           [End Study] [⚙️] │
│                                                                                 │
│  ┌─────────────────────────────────────────┬──────────────────────────────────┐│
│  │ Study Progress                           │ Latest Measurements              ││
│  │                                          │                                  ││
│  │ Time Elapsed:    12 hrs 15 min          │ Last Reading: 10:20 AM          ││
│  │ Time Remaining:  35 hrs 45 min          │                                  ││
│  │                                          │ ┌────────────┬────────────┐    ││
│  │ Measurements:   37 / 96 expected        │ │  135/85    │   72 bpm   │    ││
│  │ Success Rate:    94.6%                  │ │   mmHg     │            │    ││
│  │                                          │ └────────────┴────────────┘    ││
│  │ Progress: ████████░░░░░░░░░░ 25%        │                                  ││
│  │                                          │ MAP: 102 mmHg                    ││
│  └─────────────────────────────────────────┴──────────────────────────────────┘│
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │                         Sphygmo Visualization                            │  │
│  │ ┌─────────────────────────────────────────────────────────────────────┐ │  │
│  │ │                                                                       │ │  │
│  │ │  [THIS IS AN IFRAME CONTAINING SPHYGMO BP TRENDS VISUALIZATION]     │ │  │
│  │ │                                                                       │ │  │
│  │ │  • 24-hour BP trend graph                                           │ │  │
│  │ │  • Day/Night analysis                                               │ │  │
│  │ │  • Statistical summary                                              │ │  │
│  │ │  • Measurement table                                                │ │  │
│  │ │                                                                       │ │  │
│  │ │  Navigation: [Summary] [Trends] [Statistics] [Reports]              │ │  │
│  │ │                                                                       │ │  │
│  │ └─────────────────────────────────────────────────────────────────────┘ │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Key Features:
- Native MVCP header shows study progress
- Sphygmo iframe provides detailed visualization
- Actions available: End Study, Settings, Export
- Real-time progress updates

---

## 4. SCLA App - ABPM Device Pairing

```
┌─────────────────────────────────────────┐
│ 📱 SCLA App - Device Setup              │
├─────────────────────────────────────────┤
│                                         │
│  Select Device Type                     │
│                                         │
│  ┌───────────────┐  ┌───────────────┐  │
│  │               │  │               │  │
│  │  [ECG ICON]   │  │  [BP ICON]    │  │
│  │               │  │               │  │
│  │ Holter Band   │  │ BP Monitor    │  │
│  │               │  │               │  │
│  └───────────────┘  └───────────────┘  │
│         ○                  ●            │
│                                         │
│  Available Devices:                     │
│  ┌─────────────────────────────────┐   │
│  │ 🔵 ABPM-001                     │   │
│  │    Battery: 95%                 │   │
│  │    Signal: ████████             │   │
│  │                    [Connect]    │   │
│  ├─────────────────────────────────┤   │
│  │ 🔵 ABPM-002                     │   │
│  │    Battery: 78%                 │   │
│  │    Signal: ████░░░░             │   │
│  │                    [Connect]    │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [← Back]              [Scan Again]     │
└─────────────────────────────────────────┘
```

---

## 5. SCLA App - ABPM Measurement Screen

```
┌─────────────────────────────────────────┐
│ 📱 SCLA App - BP Measurement            │
├─────────────────────────────────────────┤
│                                         │
│  Next Measurement In:                   │
│                                         │
│      ┌─────────────────────┐           │
│      │     08:45:32         │           │
│      └─────────────────────┘           │
│                                         │
│  Last Measurement:                      │
│  ┌─────────────────────────────────┐   │
│  │ Time: 2:15 PM                   │   │
│  │                                 │   │
│  │    128 / 82 mmHg                │   │
│  │    ♥ 68 bpm                     │   │
│  │                                 │   │
│  │ Status: ✓ Successfully sent     │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Today's Progress:                      │
│  ┌─────────────────────────────────┐   │
│  │ Measurements: 18/48              │   │
│  │ ████████████░░░░░░░░ 37.5%      │   │
│  │                                 │   │
│  │ Success Rate: 94.4% (17/18)     │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [Manual Measurement]  [View History]   │
│                                         │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│  [Home]  [Log]  [Studies]  [Profile]   │
└─────────────────────────────────────────┘
```

---

## 6. Notification Center - Unified Alerts

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ Patients    Holter Studies                   🔔 3      bp_chart@myant.ca ▼ │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Notifications                                          [Mark All Read] [⚙️]     │
│                                                                                 │
│  Today                                                                          │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │ 🔴 HIGH PRIORITY - 2:45 PM                                              │  │
│  │ ABPM Study Alert: Multiple failed measurements                          │  │
│  │ Patient: Braun, Miriam | Study ID: ABPM-2025-001                       │  │
│  │ 3 consecutive measurement failures detected                             │  │
│  │                                                [View Study] [Dismiss]    │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ 🟡 MEDIUM - 1:30 PM                                                     │  │
│  │ Holter Study: Symptom logged requiring review                           │  │
│  │ Patient: Smith, John | Symptom: Chest discomfort                        │  │
│  │                                                [Review ECG] [Dismiss]    │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ 🔵 INFO - 10:30 AM                                                      │  │
│  │ ABPM Study Started Successfully                                          │  │
│  │ Patient: Braun, Miriam | Duration: 48 hours                            │  │
│  │                                                [View Study] [Dismiss]    │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│  Yesterday                                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │ ✅ COMPLETED - 4:15 PM                                                   │  │
│  │ ABPM Study Completed - Report Available                                  │  │
│  │ Patient: Davis, Emily | Study ID: ABPM-2024-127                         │  │
│  │                                            [Download Report] [Archive]    │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Notification Types:
- 🔴 High Priority: Failed measurements, critical values
- 🟡 Medium: Symptom logs, manual review needed
- 🔵 Info: Study started/completed
- ✅ Completed: Reports ready

---

## 7. Study Comparison View

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ Patients    Holter Studies                          bp_chart@myant.ca ▼ │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Braun, Miriam                      Summary | Studies | ECG | Virtual Consultation │
│                                                                                 │
│  Concurrent Studies Overview                                                    │
│                                                                                 │
│  ┌────────────────────────────┬────────────────────────────┐                  │
│  │ Holter Study                │ ABPM Study                 │                  │
│  │ Status: Active              │ Status: Active             │                  │
│  ├────────────────────────────┼────────────────────────────┤                  │
│  │ Started: Jan 7, 9:00 AM     │ Started: Jan 7, 10:30 AM   │                  │
│  │ Duration: 14 days           │ Duration: 48 hours         │                  │
│  │ Progress: ███░░░░░░░ 15%    │ Progress: ████░░░░░░ 25%   │                  │
│  ├────────────────────────────┼────────────────────────────┤                  │
│  │ Latest Data:                │ Latest Data:               │                  │
│  │ HR: 72 bpm                  │ BP: 135/85 mmHg            │                  │
│  │ Rhythm: Normal Sinus        │ MAP: 102 mmHg              │                  │
│  │ Quality: 98%                │ Success Rate: 94.6%        │                  │
│  ├────────────────────────────┼────────────────────────────┤                  │
│  │ Alerts: None                │ Alerts: 1 Warning          │                  │
│  │                             │ "Elevated readings"         │                  │
│  ├────────────────────────────┼────────────────────────────┤                  │
│  │ [View ECG Data]             │ [View BP Trends]           │                  │
│  │ [Symptom Logs]              │ [Generate Report]          │                  │
│  │ [End Study]                 │ [End Study]                │                  │
│  └────────────────────────────┴────────────────────────────┘                  │
│                                                                                 │
│  Correlation Insights:                                                          │
│  • BP elevations correlate with increased HR events (r=0.72)                   │
│  • Nocturnal dipping absent during arrhythmia episodes                         │
│  • Consider medication timing adjustment                                        │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Report Download Center

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ Patients    Holter Studies                          bp_chart@myant.ca ▼ │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  Braun, Miriam                      Summary | Studies | ECG | Virtual Consultation │
│                                                                                 │
│  Reports & Documents                                         [Generate New]     │
│                                                                                 │
│  Filter: [All Types ▼] [Last 30 Days ▼]                                       │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────┐  │
│  │ TYPE | STUDY PERIOD | GENERATED | SIZE | STATUS | ACTIONS                │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ [PDF] ABPM Report                                                        │  │
│  │       Dec 15-16, 2024 | Dec 17, 2024 | 2.4 MB | ✓ Ready                │  │
│  │       • 24-hour ambulatory blood pressure analysis                      │  │
│  │       • Generated by Sphygmo                          [View] [Download] │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ [PDF] Holter + ABPM Combined Report                                     │  │
│  │       Dec 1-15, 2024 | Dec 16, 2024 | 8.7 MB | ✓ Ready                 │  │
│  │       • Integrated cardiovascular assessment                            │  │
│  │       • Includes correlation analysis                [View] [Download] │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ [ZIP] Raw ABPM Data Export                                              │  │
│  │       Nov 20-21, 2024 | Nov 22, 2024 | 156 KB | ✓ Ready                │  │
│  │       • CSV format, all measurements                                    │  │
│  │       • Includes device metadata                     [Info] [Download] │  │
│  ├─────────────────────────────────────────────────────────────────────────┤  │
│  │ [PDF] Holter Report                                                      │  │
│  │       Nov 1-14, 2024 | Nov 15, 2024 | 5.2 MB | ✓ Ready                 │  │
│  │       • 14-day continuous ECG analysis                                  │  │
│  │       • Arrhythmia summary included                  [View] [Download] │  │
│  └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│  Storage Used: 127 MB / 1 GB                    [Manage Storage]               │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## Screen Flow Diagrams

### Flow 1: Setting Up an ABPM Study
```
Patient List → Patient Profile → Studies Tab → Set up Study
    ↓                                              ↓
    └──────────────────────────────────→ Study Type Selection
                                                   ↓
                                          Select ABPM Study
                                                   ↓
                                          Configure Duration
                                                   ↓
                                          Set Start Time
                                                   ↓
                                          Create Study
                                                   ↓
                                    Study Created in MVCP
                                                   ↓
                                    Sync to Sphygmo (async)
                                                   ↓
                                    View Active Study
```

### Flow 2: Monitoring Active ABPM Study
```
Studies List → Active ABPM Study → Virtual Consultation Tab
                                            ↓
                                    View Native Progress
                                            ↓
                                    Sphygmo Iframe Loads
                                            ↓
                                 View Detailed BP Trends
                                            ↓
                        Check Notifications for Alerts
```

### Flow 3: Patient Device Setup (SCLA)
```
SCLA Home → Active Studies → ABPM Study Details
                                    ↓
                            Device Setup Required
                                    ↓
                            Select Device Type
                                    ↓
                            Scan for BP Monitors
                                    ↓
                            Connect to Device
                                    ↓
                        Begin Automatic Measurements
                                    ↓
                        Data Syncs to MVCP → Sphygmo
```

---

## Design Considerations

1. **Visual Consistency**
   - Maintain MVCP design system in native components
   - Sphygmo iframe should have minimal chrome
   - Use consistent icons for study types

2. **Progressive Disclosure**
   - Show summary data natively
   - Detailed analysis in Sphygmo iframe
   - Advanced features accessible via settings

3. **Error States**
   - Sphygmo unavailable: Show cached data + warning
   - Sync failures: Queue for retry + notification
   - Device disconnection: Clear user guidance

4. **Performance**
   - Lazy load Sphygmo iframe
   - Cache study progress data
   - Optimistic UI updates

5. **Accessibility**
   - Keyboard navigation across iframe boundary
   - Screen reader announcements for updates
   - High contrast mode support