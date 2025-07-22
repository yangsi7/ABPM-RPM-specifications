# MVCP (Myant Virtual Clinic Portal) - Complete Application Reconstruction

## Overview

The Myant Virtual Clinic Portal (MVCP) is a comprehensive web application designed for clinicians to manage patients, monitor Holter studies, review ECG data, and track symptoms. This document provides a complete reconstruction of the application based on screenshot analysis.

## Application Structure

The MVCP application consists of several main sections accessible through a navigation menu:

1. **Symptom Log** - Main dashboard for reviewing patient symptoms
2. **Patients** - Patient management and registration
3. **Studies** - Holter study management and monitoring
4. **ECG Viewer** - Advanced ECG data visualization and analysis
5. **Notes** - Clinical notes and documentation
6. **Organization** - Team and member management

## Screen-by-Screen Analysis




### 1. ECG Viewer - Symptom Annotation Screen

**File:** MVCP2025-06-24at10.39.26.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Profile Icon] Yang, Simon [Verified]    PATIENT PROFILE | STUDIES | ECG VIEWER | NOTES │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ [← Back]                                                                             │
│                                                                                     │
│                    Annotations for symptom log                                      │
│                    For symptom log on 2025-06-24, 10:38                           │
│                                                                    [Save and Close] │
│                                                                                     │
│ Observation                    Notes                    Interpretation              │
│ ┌─────────────────────────────┐ ┌─────────────────────┐ ┌─────────────────────────┐ │
│ │ □ 1AVB    □ 2AVB1   □ 2AVB2 │ │                     │ │ (for reviewing          │ │
│ │ □ 3AVB                      │ │                     │ │ physicians only)        │ │
│ │ □ AF      □ Artifact □ AFL  │ │                     │ │                         │ │
│ │ □ BBB                       │ │                     │ │                         │ │
│ │ □ Diagnosis □ EAT   □ IRD   │ │                     │ │                         │ │
│ │ □ IVR                       │ │                     │ │                         │ │
│ │ □ JR      □ MAT     □ No    │ │                     │ │                         │ │
│ │           ECG       □ NNS   │ │                     │ │                         │ │
│ │ □ NNV     □ NS      □ NV    │ │                     │ │                         │ │
│ │ □ Pause                     │ │                     │ │                         │ │
│ │ □ SA      □ SR      □ SVT   │ │                     │ │                         │ │
│ │ □ VFib                      │ │                     │ │                         │ │
│ │ □ VT      □ WAP     □ Other │ │                     │ │                         │ │
│ └─────────────────────────────┘ │ 1000 characters    │ │ 1000 characters         │ │
│                                 │ remaining           │ │ remaining               │ │
│                                 └─────────────────────┘ └─────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Frequency filter    Mains noise filter    Amplitude    Date        Time            │
│ [0.05-45 Hz ▼]     [Off ▼]               [10mm/mV ▼]  [2025-06-24 ▼] [10:34] [Update] │
│                                                                      [⟲] [▶]        │
│                                                                      ECG Hours      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Full View: 10:34:30 - 10:38:30    Channel ● 1 ○ 2 ○ 3    ◀ Previous. 4m  Next. 4m ▶│
│ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     │
│ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     │
│ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     │
│ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     │
│                                                                                     │
│ Expanded View: 10:38:20 - 10:38:30                        All channels             │
│ [ECG waveform grid with detailed view]                                             │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Right Panel:**
```
┌─────────────────────────────┐
│ [Symptom Details] [Contextual│
│                   Metrics]  │
├─────────────────────────────┤
│ Sweating                    │
│                             │
│ Severity      Duration      │
│ 5/10          On Going      │
│                             │
│ Possible Triggers           │
│ Caffeine                    │
│                             │
│ Patient's note              │
└─────────────────────────────┘
```

**Interactive Elements:**
- Back button: Returns to previous screen
- Save and Close button: Saves annotations and closes modal
- Observation checkboxes: Multiple selection for ECG observations
- Notes text area: Free text input (1000 char limit)
- Interpretation text area: Free text input (1000 char limit)
- Filter controls: Dropdown menus for ECG display settings
- Update button: Applies filter changes
- Channel selection: Radio buttons for ECG channels
- Navigation arrows: Previous/Next 4-minute segments
- ECG Hours link: Likely opens time-based navigation
- Symptom Details/Contextual Metrics tabs: Switch between views



### 2. ECG Viewer - Symptom Logs Tab

**File:** MVCP2025-06-24at10.39.14.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Profile Icon] Yang, Simon [Verified]    PATIENT PROFILE | STUDIES | ECG VIEWER | NOTES │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ [Symptom logs] [ECG tags]                                                           │
│                                                                                     │
│ Status (All) ▼    Date (All) ▼    [Reset]    [?]                    Page 1 of 1    │
│                                                                                     │
│ SYMPTOM DATE AND TIME | REPORTED DATE AND TIME | STATUS ▼ | SYMPTOMS EXPERIENCED | ANNOTATIONS │
│ 2025-06-24 10:38     | 2025-06-24 10:38       | [Pending review ▼] | Sweating    | Add annotations │
│                      |                         |                     |             | Holter Dates    │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Frequency filter    Mains noise filter    Amplitude    Date        Time            │
│ [0.05-45 Hz ▼]     [Off ▼]               [10mm/mV ▼]  [2025-06-24 ▼] [10:35] [Update] │
│                                                                      [⟲] [▶]        │
│                                                                      ECG Hours      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Full View: 10:35:30 - 10:39:30    Channel ● 1 ○ 2 ○ 3    ◀ Previous. 4m  Next. 4m ▶│
│ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     │
│ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     │
│ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     │
│                                                                                     │
│ Expanded View: 10:35:30 - 10:35:40                        All channels             │
│ [ECG waveform grid with detailed view - Ch1 labeled]                               │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Right Panel:**
```
┌─────────────────────────────┐
│ [Symptom Details] [Contextual│
│                   Metrics]  │
├─────────────────────────────┤
│ Click on a symptom log to   │
│ view more details about     │
│ what the patient           │
│ experienced.               │
└─────────────────────────────┘
```

**Interactive Elements:**
- Symptom logs/ECG tags tabs: Switch between different views
- Status filter dropdown: Filter symptoms by status (All, Pending review, etc.)
- Date filter dropdown: Filter by date range
- Reset button: Clear all filters
- Help icon (?): Provides contextual help
- Status dropdown in table: Change individual symptom status
- "Add annotations" link: Opens annotation modal for specific symptom
- "Holter Dates" link: Likely shows study date information
- All ECG viewer controls same as previous screen
- Symptom log rows: Clickable to view details in right panel


### 3. Notes Section - New Note Modal

**File:** MVCP2025-06-24at10.38.06.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Profile Icon] Yang, Simon [Verified]    PATIENT PROFILE | STUDIES | ECG VIEWER | NOTES │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Notes                                                                               │
│                                                                                     │
│ Date (All) ▼    [Reset]                                            [🔒 New Note]   │
│                                                                                     │
│ DATE AND TIME ▲ | CREATED BY | TITLE | NOTE                                        │
│                                                                                     │
│         ┌─────────────────────────────────────────────────────────────────┐       │
│         │                        New Note                                  │       │
│         │                                                                 │       │
│         │ DATE AND TIME                                                   │       │
│         │ 2025-06-24 10:38                                               │       │
│         │                                                                 │       │
│         │ [Insert Title                                    ]              │       │
│         │                                                                 │       │
│         │ [≡] [≡] [≡] [≡] [•] [•] [B] [I] [U]  Normal ▼  [A]             │       │
│         │                                                                 │       │
│         │ ┌─────────────────────────────────────────────────────────────┐ │       │
│         │ │ Insert note                                                 │ │       │
│         │ │                                                             │ │       │
│         │ └─────────────────────────────────────────────────────────────┘ │       │
│         │                                                                 │       │
│         │ ℹ️ For record keeping purposes, you will be unable to edit or   │       │
│         │   delete this note once it is created.                         │       │
│         │                                                                 │       │
│         │                                        [Cancel] [Create]        │       │
│         └─────────────────────────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Interactive Elements:**
- New Note button: Opens note creation modal
- Date filter dropdown: Filter notes by date
- Reset button: Clear filters
- Title input field: Text input for note title
- Rich text editor toolbar: Text formatting options (alignment, lists, bold, italic, underline)
- Style dropdown: Text style selection
- Note content area: Rich text editor for note body
- Cancel button: Close modal without saving
- Create button: Save new note

### 4. Notes Section - Empty State

**File:** MVCP2025-06-24at10.38.01.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Profile Icon] Yang, Simon [Verified]    PATIENT PROFILE | STUDIES | ECG VIEWER | NOTES │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Notes                                                                               │
│                                                                                     │
│ Date (All) ▼    [Reset]                                            [🔒 New Note]   │
│                                                                                     │
│ DATE AND TIME ▲ | CREATED BY | TITLE | NOTE                                        │
│                                                                                     │
│                                                                                     │
│                         No Notes found for the given filters!                      │
│                                                                                     │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Interactive Elements:**
- Same header controls as new note modal
- Empty state message when no notes match current filters


### 5. ECG Viewer - ECG Tags Tab (Empty State)

**File:** MVCP2025-06-24at10.37.54.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Profile Icon] Yang, Simon [Verified]    PATIENT PROFILE | STUDIES | ECG VIEWER | NOTES │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ [Symptom logs] [ECG tags]                                                           │
│                                                                                     │
│ Status (All) ▼    Date (All) ▼    [Reset]    [?]                                   │
│                                                                                     │
│                                No Data found!                                       │
│                                                                                     │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Frequency filter    Mains noise filter    Amplitude    Date        Time            │
│ [0.05-45 Hz ▼]     [Off ▼]               [10mm/mV ▼]  [2025-06-24 ▼] [10:34] [Update] │
│                                                                      [⟲] [▶]        │
│                                                                      ECG Hours      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Full View: 10:34:32 - 10:38:32    Channel ● 1 ○ 2 ○ 3    ◀ Previous. 4m  Next. 4m ▶│
│ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     │
│ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     │
│ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     │
│                                                                                     │
│ Expanded View: 10:34:32 - 10:34:42                        All channels             │
│ [ECG waveform grid with detailed view - Ch1 labeled]                               │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Right Panel:**
```
┌─────────────────────────────┐
│ [Symptom Details] [Contextual│
│                   Metrics]  │
├─────────────────────────────┤
│ Click on a symptom log to   │
│ view more details about     │
│ what the patient           │
│ experienced.               │
└─────────────────────────────┘
```

### 6. Studies Section - Holter Study Setup Modal

**File:** MVCP2025-06-24at10.37.46.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Profile Icon] Yang, Simon [Verified]    PATIENT PROFILE | STUDIES | ECG VIEWER | NOTES │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Studies                                                        [Set up Holter study] │
│                                                                                     │
│ Holter studies                                                          Page 1 of 1 │
│                                                                                     │
│ START DATE ▼ | STUDY DURATION | ... | STUDY PROGRESS | EDF DOWNLOAD                │
│ 2025-06-24 10:21 | 14-days     | ... | Avg. 0 hrs of usable ECG/day | -           │
│                                                                                     │
│         ┌─────────────────────────────────────────────────────────────────┐       │
│         │                   Set up Holter study                           │       │
│         │                                                                 │       │
│         │ Select the duration of the Holter study                        │       │
│         │ ○ 24-hour    ○ 48-hour    ○ 72-hour                           │       │
│         │ ○ 7-day      ● 14-day                                          │       │
│         │                                                                 │       │
│         │ Select study start date                                         │       │
│         │ Year         Month                                              │       │
│         │ [2025 ▼]     [June ▼]                                          │       │
│         │                                                                 │       │
│         │ SUN MON TUE WED THU FRI SAT                                    │       │
│         │  1   2   3   4   5   6   7                                     │       │
│         │  8   9  10  11  12  13  14                                     │       │
│         │ 15  16  17  18  19  20  21                                     │       │
│         │ 22  23 [24] 25  26  27  28                                     │       │
│         │ 29  30                                                          │       │
│         │                                                                 │       │
│         │ Select study start time                                         │       │
│         │ [10:37]                                                        │       │
│         │                                                                 │       │
│         │ Holter Study setup information                                  │       │
│         │                                                                 │       │
│         │ Setup Type                                                      │       │
│         │ [In-Clinic Setup ▼]                                           │       │
│         │                                                                 │       │
│         │ Garment Type        Garment Size                               │       │
│         │ [Skiip-Band ▼]      [XS ▼]                                     │       │
│         └─────────────────────────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Interactive Elements:**
- Set up Holter study button: Opens study creation modal
- Duration radio buttons: Select study length (24-hour, 48-hour, 72-hour, 7-day, 14-day)
- Year/Month dropdowns: Navigate calendar
- Calendar grid: Select start date (24th is selected)
- Time input: Set start time
- Setup Type dropdown: Choose setup method
- Garment Type dropdown: Select device type
- Garment Size dropdown: Select size


### 7. Studies Section - Study Progress Modal

**File:** MVCP2025-06-24at10.37.37.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Profile Icon] Yang, Simon [Verified]    PATIENT PROFILE | STUDIES | ECG VIEWER | NOTES │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Studies                                                        [Set up Holter study] │
│                                                                                     │
│ Holter studies                                                          Page 1 of 1 │
│                                                                                     │
│ START DATE ▼ | STUDY DURATION | ... | STUDY PROGRESS | EDF DOWNLOAD                │
│ 2025-06-24 10:21 | 14-days     | ... | Avg. 0 hrs of usable ECG/day | -           │
│                                                                                     │
│    ┌─────────────────────────────────────────────────────────────────────────────┐ │
│    │        Study progress for 14-days Holter study started on 2025-06-24, 10:21│ │
│    │                                                                             │ │
│    │ Select a date on the calendar to view an hour by hour breakdown of the     │ │
│    │ patient's ECG data collection progress.                                    │ │
│    │                                                                             │ │
│    │                           Usable ECG / Total ECG                           │ │
│    │ Year        Month                                                           │ │
│    │ [2025 ▼]    [June ▼]                                                       │ │
│    │                                                                             │ │
│    │ SUN MON TUE WED THU FRI SAT                                                │ │
│    │  1   2   3   4   5   6   7                                                 │ │
│    │  8   9  10  11  12  13  14                                                 │ │
│    │ 15  16  17  18  19  20  21                                                 │ │
│    │ 22  23 [24] 25  26  27  28                                                 │ │
│    │ 29  30                                                                      │ │
│    │                                                                             │ │
│    │ 00:00  0 mins / 0 mins    12:00  0 mins / 0 mins                          │ │
│    │ 01:00  0 mins / 0 mins    13:00  0 mins / 0 mins                          │ │
│    │ 02:00  0 mins / 0 mins    14:00  0 mins / 0 mins                          │ │
│    │ 03:00  0 mins / 0 mins    15:00  0 mins / 0 mins                          │ │
│    │ 04:00  0 mins / 0 mins    16:00  0 mins / 0 mins                          │ │
│    │ 05:00  0 mins / 0 mins    17:00  0 mins / 0 mins                          │ │
│    │ 06:00  0 mins / 0 mins    18:00  0 mins / 0 mins                          │ │
│    │ 07:00  0 mins / 0 mins    19:00  0 mins / 0 mins                          │ │
│    │ 08:00  0 mins / 0 mins    20:00  0 mins / 0 mins                          │ │
│    │ 09:00  0 mins / 0 mins    21:00  0 mins / 0 mins                          │ │
│    │ 10:00  0 mins / 0 mins    22:00  0 mins / 0 mins                          │ │
│    │ 11:00  0 mins / 0 mins    23:00  0 mins / 0 mins                          │ │
│    │                                                                             │ │
│    │ Legend (Percentage of Usable Data Collected for Each Hour):                │ │
│    │ [Gray] 0%  [Light Green] 1-24%  [Green] 25-50%  [Dark Green] >50%         │ │
│    │                                                                             │ │
│    │ 0 hr 0 min of usable ECG / 0 hr 0 min of total ECG for the day            │ │
│    │                                                                             │ │
│    │                                    [Close]                                  │ │
│    └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 8. Studies Section - Main List View

**File:** MVCP2025-06-24at10.37.31.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Profile Icon] Yang, Simon [Verified]    PATIENT PROFILE | STUDIES | ECG VIEWER | NOTES │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Studies                                                        [Set up Holter study] │
│                                                                                     │
│ Holter studies                                                          Page 1 of 1 │
│                                                                                     │
│ START DATE ▼ | STUDY DURATION | STATUS | ESTIMATED END DATE | ACTUAL END DATE | STUDY PROGRESS | EDF DOWNLOAD │
│ 2025-06-24 10:21 | 14-days | Ongoing | 2025-07-08 | -- | Avg. 0 hrs of usable ECG/day | - │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Interactive Elements:**
- Study progress modal:
  - Year/Month dropdowns: Navigate calendar
  - Calendar dates: Click to view hourly breakdown
  - Close button: Close modal
  - Hourly data display: Shows usable vs total ECG minutes
  - Color-coded legend: Visual indicator for data quality
- Studies list:
  - Column headers: Sortable (START DATE has sort indicator)
  - Study progress link: Opens progress modal
  - Set up Holter study button: Opens study creation modal


### 9. Patient Profile Section

**File:** MVCP2025-06-24at10.37.24.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Profile Icon] Yang, Simon [Verified]    PATIENT PROFILE | STUDIES | ECG VIEWER | NOTES │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Patient Profile                                [Edit]                [SCLA Login Code] │
│                                                                                     │
│ Country                                                                             │
│ [Switzerland ▼]                                                                     │
│                                                                                     │
│ First name        Last name         Date of birth      Sex                         │
│ [Simon]           [Yang]            [1989-07-10]       [Male ▼]                    │
│                                                                                     │
│ Email                               Phone                                           │
│ [simon.yang.ch@gmail.com]          [🇨🇭 +41 78 795 00 09]                         │
│                                                                                     │
│ Health insurance policy             Insurance number                                │
│ [Avenir (Groupe Mutuel) ▼]         [7561234567897]                                │
│                                                                                     │
│ Medical record number                                                               │
│ [                                ]                                                  │
│                                                                                     │
│ Street address      City            Postal code                                     │
│ [Ackersteinstrasse 76] [Zurich]     [8049]                                         │
│                                                                                     │
│ Assigned physician                                                                  │
│ [Peter Wood ▼]                                                                      │
│                                                                                     │
│ [Archive Patient]                   Associated Pod: 31067601890 (view history)     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 10. Patients Section - Create SCLA Account Modal (Form)

**File:** MVCP2025-06-24at10.37.13.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ Patients                                                      [Create SCLA Account] │
│                                                                                     │
│ Approve registrations and manage patients under your organization's care.          │
│                                                                                     │
│         ┌─────────────────────────────────────────────────────────────────┐       │
│         │                    Create SCLA Account                          │       │
│         │                                                                 │       │
│         │ Create a Skin Connected Life App (SCLA) account for a patient   │       │
│         │ at your clinic.                                                 │       │
│         │                                                                 │       │
│         │ * Country                                                       │       │
│         │ [Canada ▼]                                                      │       │
│         │                                                                 │       │
│         │ * First name    * Last name    * Date of birth    Sex          │       │
│         │ [Enter patient's] [Enter patient's] [yyyy-mm-dd] [Unspecified ▼] │       │
│         │   first name      last name                                     │       │
│         │                                                                 │       │
│         │ * Email (SCLA account will be created under this email) *      │       │
│         │ [Enter patient's email address]                                │       │
│         │                                                                 │       │
│         │ * Phone                                                         │       │
│         │ [🇨🇦 +1                                    ]                    │       │
│         │                                                                 │       │
│         │ * Health insurance policy  * Health insurance policy number     │       │
│         │ [OHIP ▼]                   [Enter policy number]               │       │
│         │                                                                 │       │
│         │ * Version code             * Expiry Date                        │       │
│         │ [Enter version code]       [yyyy-mm-dd]                        │       │
│         │                                                                 │       │
│         │ Medical record number                                           │       │
│         │ [Enter patient's medical record number]                        │       │
│         │                                                                 │       │
│         │ Street address    City         Province        Postal code      │       │
│         │ [Enter street]    [Enter city] [Select province ▼] [Enter postal] │       │
│         │   address                                        code]          │       │
│         │                                                                 │       │
│         │ Assigned physician                                              │       │
│         │ [Select ▼]                                                      │       │
│         │                                                                 │       │
│         │                                        [Cancel] [Create Account] │       │
│         └─────────────────────────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Interactive Elements:**
- Patient Profile:
  - Edit button: Enable form editing
  - SCLA Login Code button: Generate/view login code
  - All form fields: Editable when in edit mode
  - Archive Patient button: Archive patient record
  - View history link: Show pod association history
- Create SCLA Account Modal:
  - All form fields with validation (asterisk indicates required)
  - Country dropdown: Select patient's country
  - Date inputs: Date picker for birth date and expiry
  - Phone field: Country code selector with phone input
  - Cancel button: Close modal without saving
  - Create Account button: Submit form and create account


### 11. Patients Section - Create SCLA Account Confirmation

**File:** MVCP2025-06-24at10.37.07.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ Patients                                                      [Create SCLA Account] │
│                                                                                     │
│ Approve registrations and manage patients under your organization's care.          │
│                                                                                     │
│ [Search                    ] [All Patients ▼]                        Page 1 of 36  │
│                                                                                     │
│ PATIENT NAME ▲ | DATE ADDED ▼ | STATUS ▲ | DATE OF BIRTH | HEALTHCARD NO. | VERSION │
│ Yang, Simon    | 2025-06-24, 10:16 | Verified | 1989-07-10 (35) | 7561234567897 | -- │
│ CA-Andriod-One, Fozia | 2025-06-16, 11:00 | Verified | 2000-01-20 (25) | 1235567880 | bb │
│ [Additional patient rows...]                                                        │
│                                                                                     │
│         ┌─────────────────────────────────────────────────────────────────┐       │
│         │                    Create SCLA Account                          │       │
│         │                                                                 │       │
│         │ Create a Skin Connected Life App (SCLA) account for a patient   │       │
│         │ at your clinic. Ensure you have their consent first.           │       │
│         │                                                                 │       │
│         │ ☑ The patient has provided consent to create an SCLA account   │       │
│         │   on their behalf.                                              │       │
│         │                                                                 │       │
│         │ ☑ I, Simon Yang, am taking responsibility for creating this     │       │
│         │   patient's SCLA account.                                       │       │
│         │                                                                 │       │
│         │                                        [Cancel] [Continue]      │       │
│         └─────────────────────────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 12. Patients Section - Main List View

**File:** MVCP2025-06-24at10.37.00.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Profile Icon] Simon Yang                                                           │
│                Staging Clinic                                                       │
│                373535                                                               │
│ Turn on multi-factor authentication                                                 │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ ≡ Symptom Log                                                                       │
│ 👥 Patients                                                                         │
│ 📋 Studies                                                                          │
│ 🏢 Organization                                                                     │
│ ❓ User Manual                                                                      │
│ 🚪 Logout                                                                          │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Patients                                                      [Create SCLA Account] │
│                                                                                     │
│ Approve registrations and manage patients under your organization's care.          │
│                                                                                     │
│ [Search                    ] [All Patients ▼]                        Page 1 of 36  │
│                                                                                     │
│ PATIENT NAME ▲ | DATE ADDED ▼ | STATUS ▲ | DATE OF BIRTH | HEALTHCARD NO. | VERSION │
│ Yang, Simon    | 2025-06-24, 10:16 | Verified | 1989-07-10 (35) | 7561234567897 | -- │
│ CA-Andriod-One, Fozia | 2025-06-16, 11:00 | Verified | 2000-01-20 (25) | 1235567880 | bb │
│ CA-Andriod, Fozia | 2025-06-16, 10:27 | Verified | 2000-01-20 (25) | 1235567880 | bb │
│ Prabhakaran, Praseena | 2025-06-12, 16:06 | Verified | 1990-10-04 (34) | 2433243434 | ff │
│ Rhino, Rick-HolterCloseTestOne | 2025-06-11, 11:49 | Verified | 1985-06-11 (40) | 9876543211 | RR │
│ Prabhakaran, Praseena | 2025-06-10, 13:57 | Verified | 1989-10-16 (35) | 1234567890 | PP │
│ MHDS 2.3.1 test, Praseena | 2025-05-12, 15:10 | Verified | 1990-10-04 (34) | 1234567890 | PP │
│ android, Fozia 2.3.1 | 2025-05-12, 12:29 | Verified | 2000-01-20 (25) | 1236567880 | bb │
│ MHDS 2.3 Study Test, Praseena | 2025-04-23, 14:25 | Verified | 1001-08-08 (1023) | 1234567890 | zz │
│ MHDS 2.3 Regression Test, Praseena | 2025-04-23, 13:01 | Verified | 1989-10-16 (35) | 1234567890 | VV │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Interactive Elements:**
- Left sidebar navigation:
  - Symptom Log: Navigate to symptom log section
  - Patients: Current section (highlighted)
  - Studies: Navigate to studies section
  - Organization: Navigate to organization management
  - User Manual: Open help documentation
  - Logout: Sign out of application
- Patient list:
  - Search field: Filter patients by name
  - All Patients dropdown: Filter by patient status
  - Column headers: Sortable (arrows indicate sort direction)
  - Patient rows: Clickable to view patient details
  - Pagination: Navigate through patient pages
- Create SCLA Account confirmation:
  - Consent checkboxes: Required confirmations
  - Cancel/Continue buttons: Modal navigation


### 13. Symptom Log - Main View with Status Filter

**File:** MVCP2025-06-24at10.36.51.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ Symptom Log                                                                         │
│                                                                                     │
│ Symptom logs reported in the last 6 months.                                        │
│                                                                                     │
│ Status (All) ▲    Date (All) ▼    ☐ Only show logs with Routine ECG    [Reset]    │
│ ┌─────────────────┐                                                    Page 1 of 21 │
│ │ ☑ Pending review│                                                                 │
│ │ ☑ MD to review  │                                                                 │
│ │ ☑ Reviewed by MD│                                                                 │
│ │ ☑ Reviewed by tech│                                                               │
│ │ [Cancel] [Apply]│                                                                 │
│ └─────────────────┘                                                                 │
│                                                                                     │
│ PATIENT NAME | SYMPTOM DATE | SYMPTOMS EXPERIENCED | PHYSICIAN | TAGS | STATUS ▼   │
│ MHDS 2.3.1 test, Praseena | 2025-05-13 12:54 | testing | ⓘ Not Assigned | -- | [Pending review] │
│ MHDS 2.3 Study Test, Praseena | 2025-04-23 15:00 | study started | Prasi MD test | -- | [Pending review] │
│ MHDS 2.3 Regression Test, Praseena | 2025-04-23 14:00 | new patient new study | ⓘ Not Assigned | -- | [Pending review] │
│ MHDS 2.3 Testing, Praseena | 2025-04-23 12:59 | testing | ⓘ Not Assigned | -- | [Pending review] │
│ MHDS 2.3 test, Praseena | 2025-04-22 23:25 | Routine ECG | ⓘ Not Assigned | -- | [Pending review] │
│ Android 1, Fozia 2.3 | 2025-04-21 12:25 | Routine ECG | ⓘ Not Assigned | -- | [Pending review] │
│ Android 1, Fozia 2.3 | 2025-04-21 12:23 | band to left | ⓘ Not Assigned | -- | [Pending review] │
│ Android 1, Fozia 2.3 | 2025-04-21 12:21 | band normal | ⓘ Not Assigned | -- | [Pending review] │
│ Android 1, Fozia 2.3 | 2025-04-21 12:14 | moving band to right | ⓘ Not Assigned | -- | [Pending review] │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 14. Symptom Log - Log History Modal

**File:** MVCP2025-06-24at10.36.41.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ Symptom Log                                                                         │
│                                                                                     │
│ Symptom logs reported in the last 6 months.                                        │
│                                                                                     │
│ Status (All) ▼    Date (All) ▼    ☐ Only show logs with Routine ECG    [Reset]    │
│                                                                        Page 1 of 21 │
│                                                                                     │
│ PATIENT NAME | SYMPTOM DATE | SYMPTOMS EXPERIENCED | PHYSICIAN | TAGS | STATUS ▼   │
│ MHDS 2.3.1 test, Praseena | 2025-05-13 12:54 | testing | ⓘ Not Assigned | -- | [Pending review] │
│                                                                          [Log History] │
│ MHDS 2.3 Study Test, Praseena | 2025-04-23 15:00 | study started | Prasi MD test | -- | [Pending review] │
│                                                                                     │
│         ┌─────────────────────────────────────────────────────────────────┐       │
│         │                        Log History                               │       │
│         │                                                                 │       │
│         │ [Most Recent ▼]                                                 │       │
│         │                                                                 │       │
│         │ ○ 2025-05-13, 12:54                                            │       │
│         │   Symptom Log created by Praseena MHDS 2.3.1 test             │       │
│         │                                                                 │       │
│         │                                    [Close]                      │       │
│         └─────────────────────────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 15. Symptom Log - Main View (Sidebar Visible)

**File:** MVCP2025-06-24at10.36.25.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Profile Icon] Simon Yang                                                           │
│                Staging Clinic                                                       │
│                373535                                                               │
│ Turn on multi-factor authentication                                                 │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ ≡ Symptom Log                                                                       │
│ 👥 Patients                                                                         │
│ 📋 Studies                                                                          │
│ 🏢 Organization                                                                     │
│ ❓ User Manual                                                                      │
│ 🚪 Logout                                                                          │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Symptom Log                                                                         │
│                                                                                     │
│ Symptom logs reported in the last 6 months.                                        │
│                                                                                     │
│ Status (All) ▼    Date (All) ▼    ☐ Only show logs with Routine ECG    [Reset]    │
│                                                                        Page 1 of 21 │
│                                                                                     │
│ PATIENT NAME | SYMPTOM DATE | SYMPTOMS EXPERIENCED | PHYSICIAN | TAGS | STATUS ▼   │
│ MHDS 2.3.1 test, Praseena | 2025-05-13 12:54 | testing | ⓘ Not Assigned | -- | [Pending review] │
│ MHDS 2.3 Study Test, Praseena | 2025-04-23 15:00 | study started | Prasi MD test | -- | [Pending review] │
│ MHDS 2.3 Regression Test, Praseena | 2025-04-23 14:00 | new patient new study | ⓘ Not Assigned | -- | [Pending review] │
│ MHDS 2.3 Testing, Praseena | 2025-04-23 12:59 | testing | ⓘ Not Assigned | -- | [Pending review] │
│ MHDS 2.3 test, Praseena | 2025-04-22 23:25 | Routine ECG | ⓘ Not Assigned | -- | [Pending review] │
│ Android 1, Fozia 2.3 | 2025-04-21 12:25 | Routine ECG | ⓘ Not Assigned | -- | [Pending review] │
│ Android 1, Fozia 2.3 | 2025-04-21 12:23 | band to left | ⓘ Not Assigned | -- | [Pending review] │
│ Android 1, Fozia 2.3 | 2025-04-21 12:21 | band normal | ⓘ Not Assigned | -- | [Pending review] │
│ Android 1, Fozia 2.3 | 2025-04-21 12:14 | moving band to right | ⓘ Not Assigned | -- | [Pending review] │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 16. Organization Management

**File:** MVCP2025-06-24at10.39.49.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ Organization                                                          [Add Member] │
│                                                                                     │
│ Add and manage members in your organization.                                        │
│                                                                                     │
│ [Search                    ] [All Members ▼]                         Page 1 of 18  │
│                                                                                     │
│ MEMBER NAME | EMAIL | ROLE | DATE ADDED                                            │
│ (invited)   | fozia.noor+da@myant.ca | Desk Admin | --                            │
│ (invited)   | @gmail.com | Desk Admin | --                                        │
│ (invited)   | gurpreet_test351@mailinator.com | Desk Admin | --                   │
│ (invited)   | gurpreet_test153@dispostable.com | Cardiac Tech | --                │
│ (invited)   | gurpreet_test210@mailinator.com | MD | --                           │
│ (invited)   | pranali.patel+stagmd@myant.ca | MD | --                             │
│ (invited)   | augtestingmhp@dispostable.com | Cardiac Tech | --                   │
│ (invited)   | tetiana.kokorovets+ref2@myant.ca | Desk Admin | --                  │
│ (invited)   | ppatel@dispostable.com | Cardiac Tech | --                          │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Interactive Elements:**
- Symptom Log:
  - Status filter dropdown with multi-select checkboxes
  - Date filter dropdown
  - Routine ECG checkbox filter
  - Reset button: Clear all filters
  - Status dropdown in each row: Change symptom status
  - Log History link: Opens history modal
  - Patient name links: Navigate to patient details
- Organization:
  - Add Member button: Invite new organization members
  - Search field: Filter members by name/email
  - All Members dropdown: Filter by member type/status
  - Member rows: Show invitation status and roles


### 17. ECG Viewer - Contextual Metrics View

**File:** MVCP2025-06-24at10.39.34.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ Frequency filter    Mains noise filter    Amplitude    Date        Time            │
│ [0.05-45 Hz ▼]     [Off ▼]               [10mm/mV ▼]  [2025-06-24 ▼] [10:34] [Update] │
│                                                                      [⟲] [▶]        │
│                                                                      ECG Hours      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Full View: 10:34:30 - 10:38:30    Channel ● 1 ○ 2 ○ 3    ◀ Previous. 4m  Next. 4m ▶│
│ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     │
│ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     │
│ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     │
│ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     │
│                                                                                     │
│ Expanded View: 10:38:20 - 10:38:30                        All channels             │
│ [ECG waveform grid - Ch1]                                                          │
│ [ECG waveform grid - Ch2 with glucose trend line]                                  │
│ [ECG waveform grid - Ch3]                                                          │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Right Panel - Contextual Metrics:**
```
┌─────────────────────────────┐
│ [Symptom Details] [Contextual│
│                   Metrics]  │
├─────────────────────────────┤
│ 🩸 BLOOD PRESSURE           │
│ -- mmHg (closest before)    │
│ -- mmHg (closest after)     │
│                             │
│ 🫁 OXYGEN SATURATION        │
│ -- mmHg (closest before)    │
│ -- mmHg (closest after)     │
│                             │
│ ⚖️ BODY WEIGHT              │
│ -- kg (closest before)      │
│ -- kg (closest after)       │
│                             │
│ 🍯 GLUCOSE                  │
│ -- mmol/L (closest before)  │
│ -- mmol/L (closest after)   │
│                             │
│ 🌡️ BODY TEMPERATURE         │
│ -- °C                       │
│                             │
│ 🏃 ACTIVITY                 │
│ -- steps                    │
│ -- (last posture)           │
└─────────────────────────────┘
```

### 18. Studies Section - Overview with Multiple Studies

**File:** MVCP2025-06-24at10.40.08.png

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│ [Profile Icon] Simon Yang                                                           │
│                Staging Clinic                                                       │
│                373535                                                               │
│ Turn on multi-factor authentication                                                 │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ ≡ Symptom Log                                                                       │
│ 👥 Patients                                                                         │
│ 📋 Studies                                                                          │
│ 🏢 Organization                                                                     │
│ ❓ User Manual                                                                      │
│ 🚪 Logout                                                                          │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ Studies                                                                             │
│                                                                                     │
│ Add and manage studies in your organization.                                        │
│                                                                                     │
│ Holter studies    [Status (All) ▼]                                    Page 1 of 33 │
│                                                                                     │
│ PATIENT NAME | START DATE ▼ | STUDY DURATION | STATUS | ESTIMATED END DATE | ACTUAL END DATE | STUDY PROGRESS | EDF DOWNLOAD │
│ Fozia 2.3, Android 1 | 2028-04-18 09:50 | 14-days | Closed by Staff | 2028-05-02 | 2028-04-18 | Avg. 0 hrs of usable ECG/day | - │
│ Praseena, MHDS 2.3 test | 2026-04-01 16:50 | 48-hours | Cancelled | 2026-04-03 | 2025-04-11 | 0 hrs of usable ECG data, 0 hrs of total ECG data | - │
│ Fozia 2.3, Android 1 | 2026-04-01 09:57 | 14-days | Closed by Staff | 2026-04-15 | 2026-04-01 | Avg. 0 hrs of usable ECG/day | - │
│ Simon, Yang | 2025-06-24 10:21 | 14-days | Ongoing | 2025-07-08 | -- | Avg. 0 hrs of usable ECG/day | - │
│ Fozia, CA-Andriod-One | 2025-06-16 11:05 | 24-hours | Closed by Staff | 2025-06-17 | 2025-06-16 | 0 hrs of usable ECG data, 0 hrs of total ECG data | - │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Interactive Elements:**
- ECG Viewer Contextual Metrics:
  - Symptom Details/Contextual Metrics tabs: Switch between views
  - Contextual metrics display: Shows physiological data closest to ECG timepoint
  - Multiple ECG channels with overlay data (glucose trend on Ch2)
  - All standard ECG viewer controls
- Studies Overview:
  - Status filter dropdown: Filter studies by status
  - Column headers: Sortable (START DATE shows sort indicator)
  - Study progress links: Open detailed progress views
  - Patient name links: Navigate to patient details
  - Multiple study statuses: Ongoing, Closed by Staff, Cancelled
  - EDF Download column: Access to raw data files

## Summary of Interactive Elements and Navigation

The MVCP application provides a comprehensive interface for managing cardiac monitoring studies with the following key interactive patterns:

1. **Tab-based navigation** within sections (Symptom logs/ECG tags, Symptom Details/Contextual Metrics)
2. **Modal dialogs** for complex forms (Create SCLA Account, Set up Holter study, New Note, Study Progress)
3. **Dropdown filters** with multi-select capabilities for data filtering
4. **Sortable table columns** with visual indicators
5. **Rich text editing** capabilities in notes section
6. **Advanced ECG viewer** with multiple channels, filtering, and time navigation
7. **Contextual data display** showing physiological metrics alongside ECG data
8. **Status management** with dropdown controls for workflow progression


## Component Interactions and Navigation Flows

### Main Navigation Structure

The MVCP application uses a sidebar navigation pattern with the following main sections:

```
Main Navigation:
├── Symptom Log (≡ icon)
├── Patients (👥 icon)
├── Studies (📋 icon)
├── Organization (🏢 icon)
├── User Manual (❓ icon)
└── Logout (🚪 icon)
```

### Top-Level Navigation Bar

When viewing a specific patient, a secondary navigation appears:
```
Patient Context Navigation:
├── PATIENT PROFILE
├── STUDIES
├── ECG VIEWER
└── NOTES
```

### Detailed Interaction Mappings

#### 1. Symptom Log Section

**Main View Interactions:**
- **Status Filter Dropdown** → Opens multi-select filter with options:
  - Pending review
  - MD to review
  - Reviewed by MD
  - Reviewed by tech
- **Date Filter Dropdown** → Date range selection
- **Routine ECG Checkbox** → Filters to show only routine ECG logs
- **Reset Button** → Clears all applied filters
- **Patient Name Links** → Navigate to Patient Profile for that patient
- **Status Dropdown (per row)** → Change individual symptom status
- **Log History Link** → Opens Log History modal
- **Pagination Controls** → Navigate through symptom log pages

**Log History Modal:**
- **Sort Dropdown** → Change chronological order (Most Recent, Oldest First, etc.)
- **Close Button** → Close modal and return to main view

#### 2. Patients Section

**Main List View Interactions:**
- **Create SCLA Account Button** → Opens account creation workflow
- **Search Field** → Real-time patient name filtering
- **All Patients Dropdown** → Filter by patient status/type
- **Column Headers** → Sort patients by different criteria
- **Patient Name Links** → Navigate to Patient Profile
- **Pagination Controls** → Navigate through patient pages

**Create SCLA Account Workflow:**
1. **Create SCLA Account Button** → Opens consent confirmation modal
2. **Consent Checkboxes** → Required confirmations
3. **Continue Button** → Opens patient information form
4. **Form Fields** → Patient data entry with validation
5. **Create Account Button** → Submit and create account
6. **Cancel Button** → Exit workflow at any step

#### 3. Patient Profile Section

**Profile View Interactions:**
- **Edit Button** → Enable form editing mode
- **SCLA Login Code Button** → Generate/display patient login code
- **Form Fields** → Editable when in edit mode
- **Dropdown Selectors** → Country, insurance, physician selection
- **Archive Patient Button** → Archive patient record
- **View History Link** → Show pod association history

#### 4. Studies Section

**Main List View Interactions:**
- **Set up Holter study Button** → Opens study creation modal
- **Status Filter Dropdown** → Filter studies by status
- **Column Headers** → Sort studies by different criteria
- **Study Progress Links** → Opens study progress modal
- **Patient Name Links** → Navigate to Patient Profile
- **EDF Download Links** → Download study data files

**Set up Holter Study Modal:**
- **Duration Radio Buttons** → Select study length (24h, 48h, 72h, 7-day, 14-day)
- **Year/Month Dropdowns** → Navigate calendar
- **Calendar Grid** → Select start date
- **Time Input** → Set start time
- **Setup Type Dropdown** → Choose setup method
- **Garment Type/Size Dropdowns** → Select device configuration

**Study Progress Modal:**
- **Year/Month Dropdowns** → Navigate calendar
- **Calendar Dates** → Click to view hourly breakdown
- **Hourly Data Display** → Shows usable vs total ECG minutes
- **Close Button** → Return to studies list

#### 5. ECG Viewer Section

**Main Viewer Interactions:**
- **Symptom logs/ECG tags Tabs** → Switch between data views
- **Filter Controls:**
  - Frequency filter dropdown → Adjust ECG frequency filtering
  - Mains noise filter dropdown → Noise reduction settings
  - Amplitude dropdown → Adjust ECG amplitude scaling
  - Date picker → Select viewing date
  - Time input → Set specific time
  - Update button → Apply filter changes
- **Channel Selection** → Radio buttons for ECG channels (1, 2, 3)
- **Navigation Controls:**
  - Previous/Next 4m buttons → Time-based navigation
  - ECG Hours link → Time-based navigation interface
- **Symptom Details/Contextual Metrics Tabs** → Switch right panel view

**Symptom Logs Tab:**
- **Status/Date Filters** → Filter symptom data
- **Reset Button** → Clear filters
- **Help Icon (?)** → Contextual help
- **Add annotations Link** → Opens annotation modal
- **Holter Dates Link** → Study date information
- **Symptom Rows** → Click to view details in right panel

**Annotation Modal:**
- **Back Button** → Return to previous view
- **Observation Checkboxes** → Multiple selection for ECG findings
- **Notes Text Area** → Free text input (1000 char limit)
- **Interpretation Text Area** → Clinical interpretation (1000 char limit)
- **Save and Close Button** → Save annotations and close modal

#### 6. Notes Section

**Main View Interactions:**
- **New Note Button** → Opens note creation modal
- **Date Filter Dropdown** → Filter notes by date
- **Reset Button** → Clear filters
- **Column Headers** → Sort notes

**New Note Modal:**
- **Title Input** → Note title
- **Rich Text Toolbar** → Text formatting options
- **Style Dropdown** → Text style selection
- **Content Area** → Rich text editor
- **Cancel Button** → Close without saving
- **Create Button** → Save new note

#### 7. Organization Section

**Main View Interactions:**
- **Add Member Button** → Invite new organization members
- **Search Field** → Filter members by name/email
- **All Members Dropdown** → Filter by member type/status
- **Member Rows** → View member details and status

### Modal and Popup Behaviors

**Modal Types:**
1. **Form Modals** (Create SCLA Account, Set up Holter study, New Note)
   - Overlay main content
   - Require user action to close
   - Include Cancel/Submit buttons
   - Form validation before submission

2. **Information Modals** (Study Progress, Log History)
   - Display read-only information
   - Single Close button
   - Click outside to close (implied)

3. **Annotation Modal** (ECG Viewer)
   - Complex form with multiple sections
   - Save and Close functionality
   - Back button navigation

**Popup Behaviors:**
1. **Dropdown Filters**
   - Click to open/close
   - Multi-select capability (Status filters)
   - Apply/Cancel buttons for complex filters

2. **Status Dropdowns**
   - Inline editing capability
   - Immediate save on selection
   - Visual feedback on status change

### ECG Viewer Advanced Functionality

**Time Navigation:**
- 4-minute segments with Previous/Next navigation
- Full view shows 4-minute window
- Expanded view shows 10-second detailed window
- ECG Hours link provides time-based navigation interface

**Channel Management:**
- 3 ECG channels available
- Radio button selection
- Individual channel viewing
- "All channels" view in expanded mode

**Filter Controls:**
- Real-time ECG signal processing
- Frequency filtering (0.05-45 Hz standard)
- Mains noise filtering options
- Amplitude scaling (10mm/mV standard)
- Update button applies all filter changes

**Contextual Data Integration:**
- Right panel shows physiological metrics
- Blood pressure, oxygen saturation, body weight, glucose, temperature, activity
- "Closest before/after" temporal correlation
- Glucose trend overlay on ECG Channel 2


## Visual App Structure and Relationship Mapping

### Application Hierarchy

```
MVCP (Myant Virtual Clinic Portal)
│
├── Authentication Layer
│   ├── Login
│   ├── Multi-factor Authentication
│   └── Session Management
│
├── Main Application Shell
│   ├── User Profile Header
│   │   ├── Profile Icon
│   │   ├── User Name & Clinic
│   │   ├── User ID
│   │   └── MFA Toggle
│   │
│   ├── Primary Navigation Sidebar
│   │   ├── Symptom Log (≡)
│   │   ├── Patients (👥)
│   │   ├── Studies (📋)
│   │   ├── Organization (🏢)
│   │   ├── User Manual (❓)
│   │   └── Logout (🚪)
│   │
│   └── Main Content Area
│       ├── Section-Specific Content
│       └── Modal Overlay Layer
│
└── Patient Context Shell (when patient selected)
    ├── Patient Header
    │   ├── Patient Name
    │   ├── Verification Status
    │   └── Patient Context Navigation
    │       ├── PATIENT PROFILE
    │       ├── STUDIES
    │       ├── ECG VIEWER
    │       └── NOTES
    │
    └── Patient-Specific Content Area
```

### Section-Level Structure

#### 1. Symptom Log Section
```
Symptom Log
├── Filter Controls
│   ├── Status Multi-Select Filter
│   ├── Date Range Filter
│   ├── Routine ECG Checkbox
│   └── Reset Button
├── Data Table
│   ├── Patient Name (→ Patient Profile)
│   ├── Symptom Date
│   ├── Symptoms Experienced
│   ├── Physician Assignment
│   ├── Tags
│   └── Status Dropdown
├── Pagination Controls
└── Modals
    └── Log History Modal
        ├── Sort Controls
        ├── History Timeline
        └── Close Button
```

#### 2. Patients Section
```
Patients
├── Action Bar
│   ├── Create SCLA Account Button
│   ├── Search Field
│   └── Patient Type Filter
├── Data Table
│   ├── Patient Name (→ Patient Profile)
│   ├── Date Added
│   ├── Status
│   ├── Date of Birth
│   ├── Healthcare Number
│   └── Version
├── Pagination Controls
└── Modals
    ├── Create SCLA Account Workflow
    │   ├── Consent Confirmation
    │   │   ├── Consent Checkboxes
    │   │   ├── Cancel Button
    │   │   └── Continue Button
    │   └── Patient Information Form
    │       ├── Personal Information Fields
    │       ├── Contact Information Fields
    │       ├── Insurance Information Fields
    │       ├── Address Information Fields
    │       ├── Medical Information Fields
    │       ├── Cancel Button
    │       └── Create Account Button
    └── Account Creation Confirmation
```

#### 3. Patient Profile Section
```
Patient Profile
├── Action Bar
│   ├── Edit Button
│   └── SCLA Login Code Button
├── Patient Information Form
│   ├── Country Selection
│   ├── Personal Information
│   │   ├── First Name
│   │   ├── Last Name
│   │   ├── Date of Birth
│   │   └── Sex
│   ├── Contact Information
│   │   ├── Email
│   │   └── Phone
│   ├── Insurance Information
│   │   ├── Health Insurance Policy
│   │   └── Insurance Number
│   ├── Medical Information
│   │   └── Medical Record Number
│   ├── Address Information
│   │   ├── Street Address
│   │   ├── City
│   │   └── Postal Code
│   └── Care Team
│       └── Assigned Physician
├── Patient Actions
│   └── Archive Patient Button
└── Associated Data
    └── Pod Association (with history link)
```

#### 4. Studies Section
```
Studies
├── Action Bar
│   ├── Set up Holter study Button
│   └── Status Filter
├── Data Table
│   ├── Patient Name (→ Patient Profile)
│   ├── Start Date
│   ├── Study Duration
│   ├── Status
│   ├── Estimated End Date
│   ├── Actual End Date
│   ├── Study Progress (→ Progress Modal)
│   └── EDF Download
├── Pagination Controls
└── Modals
    ├── Set up Holter Study
    │   ├── Duration Selection
    │   ├── Start Date Calendar
    │   ├── Start Time Input
    │   └── Study Configuration
    │       ├── Setup Type
    │       ├── Garment Type
    │       └── Garment Size
    └── Study Progress Modal
        ├── Calendar Navigation
        ├── Date Selection
        ├── Hourly Data Display
        ├── Quality Legend
        └── Close Button
```

#### 5. ECG Viewer Section
```
ECG Viewer
├── Tab Navigation
│   ├── Symptom logs Tab
│   └── ECG tags Tab
├── Filter Controls (per tab)
│   ├── Status Filter
│   ├── Date Filter
│   ├── Reset Button
│   └── Help Icon
├── Data Table (tab-specific)
│   ├── Symptom Date/Time
│   ├── Reported Date/Time
│   ├── Status Dropdown
│   ├── Symptoms Experienced
│   └── Actions
│       ├── Add annotations (→ Annotation Modal)
│       └── Holter Dates
├── ECG Viewer Controls
│   ├── Filter Controls
│   │   ├── Frequency Filter
│   │   ├── Mains Noise Filter
│   │   ├── Amplitude Control
│   │   ├── Date Picker
│   │   ├── Time Input
│   │   └── Update Button
│   ├── Navigation Controls
│   │   ├── Channel Selection (1, 2, 3)
│   │   ├── Previous/Next 4m
│   │   └── ECG Hours Link
│   └── View Controls
│       ├── Full View (4-minute window)
│       └── Expanded View (10-second detail)
├── ECG Display Area
│   ├── Multi-channel ECG Waveforms
│   ├── Time Axis
│   └── Amplitude Scaling
├── Right Panel
│   ├── Tab Navigation
│   │   ├── Symptom Details Tab
│   │   └── Contextual Metrics Tab
│   └── Content Area
│       ├── Symptom Information
│       │   ├── Symptom Type
│       │   ├── Severity
│       │   ├── Duration
│       │   ├── Triggers
│       │   └── Patient Notes
│       └── Contextual Metrics
│           ├── Blood Pressure
│           ├── Oxygen Saturation
│           ├── Body Weight
│           ├── Glucose
│           ├── Body Temperature
│           └── Activity Data
└── Modals
    └── Annotation Modal
        ├── Navigation
        │   └── Back Button
        ├── Observation Section
        │   └── Medical Observation Checkboxes
        ├── Notes Section
        │   └── Free Text Area (1000 chars)
        ├── Interpretation Section
        │   └── Clinical Interpretation Area (1000 chars)
        └── Actions
            └── Save and Close Button
```

#### 6. Notes Section
```
Notes
├── Action Bar
│   ├── New Note Button
│   ├── Date Filter
│   └── Reset Button
├── Data Table
│   ├── Date and Time
│   ├── Created By
│   ├── Title
│   └── Note Content
├── Pagination Controls
└── Modals
    └── New Note Modal
        ├── Date and Time (auto-populated)
        ├── Title Input
        ├── Rich Text Editor
        │   ├── Formatting Toolbar
        │   │   ├── Alignment Controls
        │   │   ├── List Controls
        │   │   ├── Text Formatting (B, I, U)
        │   │   ├── Style Dropdown
        │   │   └── Text Color
        │   └── Content Area
        ├── Information Notice
        └── Actions
            ├── Cancel Button
            └── Create Button
```

#### 7. Organization Section
```
Organization
├── Action Bar
│   ├── Add Member Button
│   ├── Search Field
│   └── Member Type Filter
├── Data Table
│   ├── Member Name
│   ├── Email
│   ├── Role
│   └── Date Added
└── Pagination Controls
```

### Cross-Section Relationships

#### Patient-Centric Navigation Flow
```
Patient Selection (from any section)
    ↓
Patient Context Activated
    ↓
Patient Context Navigation Available:
    ├── PATIENT PROFILE → Patient Profile Section
    ├── STUDIES → Studies filtered for this patient
    ├── ECG VIEWER → ECG data for this patient
    └── NOTES → Notes for this patient
```

#### Data Relationship Flow
```
Patient Creation (Patients Section)
    ↓
Patient Profile (Patient Profile Section)
    ↓
Study Creation (Studies Section)
    ↓
ECG Data Collection (automatic)
    ↓
Symptom Logging (patient-initiated)
    ↓
Symptom Review (Symptom Log Section)
    ↓
ECG Analysis (ECG Viewer Section)
    ↓
Clinical Notes (Notes Section)
```

#### Modal Interaction Patterns
```
Primary Action Buttons → Form Modals
    ├── Create SCLA Account → Multi-step form workflow
    ├── Set up Holter study → Configuration form
    ├── New Note → Rich text editor
    └── Add annotations → Clinical observation form

Information Links → Display Modals
    ├── Study Progress → Calendar with hourly data
    ├── Log History → Timeline view
    └── View History → Pod association history

Status Changes → Inline Dropdowns
    ├── Symptom Status → Workflow progression
    └── Study Status → Study lifecycle management
```

### Component Reusability Map

#### Shared Components
```
Data Tables
├── Sortable Headers
├── Pagination Controls
├── Search/Filter Controls
└── Action Buttons

Form Components
├── Dropdown Selectors
├── Date Pickers
├── Text Inputs
├── Rich Text Editors
└── Validation Messages

Navigation Components
├── Tab Navigation
├── Breadcrumb Navigation
├── Sidebar Navigation
└── Modal Navigation

Filter Components
├── Multi-select Dropdowns
├── Date Range Pickers
├── Checkbox Filters
└── Reset Controls
```

#### Specialized Components
```
ECG Viewer
├── Waveform Renderer
├── Channel Selector
├── Time Navigation
├── Filter Controls
└── Overlay Data Display

Study Progress
├── Calendar Grid
├── Quality Indicators
├── Hourly Data Display
└── Legend Components

Patient Context
├── Patient Header
├── Verification Badge
├── Context Navigation
└── Associated Data Display
```


## User Flows and Workflows

### Primary User Roles

The MVCP system supports multiple user roles with different access levels:
- **Desk Admin**: Administrative functions, patient management
- **MD (Medical Doctor)**: Clinical review, diagnosis, patient care
- **Cardiac Tech**: Technical ECG analysis, device management
- **Organization Admin**: User management, system configuration

### Core User Workflows

#### 1. Create Patient Account Workflow

**Trigger**: Clinician needs to register a new patient for cardiac monitoring

**Flow Steps**:
```
1. Navigate to Patients Section
   └── Click "Patients" in sidebar navigation

2. Initiate Account Creation
   └── Click "Create SCLA Account" button

3. Consent Verification
   ├── Review consent requirements
   ├── Check "Patient has provided consent" checkbox
   ├── Check "I am taking responsibility" checkbox
   └── Click "Continue" button

4. Patient Information Entry
   ├── Select Country (required)
   ├── Enter Personal Information
   │   ├── First Name (required)
   │   ├── Last Name (required)
   │   ├── Date of Birth (required)
   │   └── Sex (optional)
   ├── Enter Contact Information
   │   ├── Email (required - becomes SCLA login)
   │   └── Phone (required)
   ├── Enter Insurance Information
   │   ├── Health Insurance Policy (required)
   │   ├── Policy Number (required)
   │   ├── Version Code (required)
   │   └── Expiry Date (required)
   ├── Enter Medical Information
   │   └── Medical Record Number (optional)
   ├── Enter Address Information
   │   ├── Street Address (optional)
   │   ├── City (optional)
   │   ├── Province (optional)
   │   └── Postal Code (optional)
   └── Assign Physician (optional)

5. Account Creation
   ├── Click "Create Account" button
   ├── System validates all required fields
   ├── System creates SCLA account
   └── Patient appears in patients list with "Verified" status

6. Post-Creation Actions
   ├── Generate SCLA Login Code (if needed)
   └── Navigate to Patient Profile for additional configuration
```

**Error Handling**:
- Form validation prevents submission with missing required fields
- Email validation ensures proper format
- Phone number validation with country code
- Insurance policy validation

#### 2. Create Holter Study Workflow

**Trigger**: Patient requires cardiac monitoring study

**Prerequisites**: Patient account must exist and be verified

**Flow Steps**:
```
1. Navigate to Studies Section
   └── Click "Studies" in sidebar navigation

2. Initiate Study Creation
   └── Click "Set up Holter study" button

3. Study Configuration
   ├── Select Study Duration (required)
   │   ├── 24-hour
   │   ├── 48-hour
   │   ├── 72-hour
   │   ├── 7-day
   │   └── 14-day (default shown)
   ├── Select Start Date (required)
   │   ├── Navigate to desired month/year
   │   └── Click on calendar date
   ├── Set Start Time (required)
   │   └── Enter time in HH:MM format
   └── Configure Study Setup
       ├── Setup Type (required)
       │   └── In-Clinic Setup (default)
       ├── Garment Type (required)
       │   └── Skiip-Band (default)
       └── Garment Size (required)
           └── XS (default)

4. Study Creation
   ├── System validates configuration
   ├── System creates study record
   ├── Study appears in studies list with "Ongoing" status
   └── System calculates estimated end date

5. Study Monitoring
   ├── Study progress tracked automatically
   ├── Hourly data quality monitoring
   └── Real-time status updates
```

#### 3. Review Holter Quality Data Workflow

**Trigger**: Clinician needs to assess study data quality

**Flow Steps**:
```
1. Access Study Progress
   ├── Navigate to Studies section
   ├── Locate target study in list
   └── Click "Study Progress" link

2. Study Progress Modal
   ├── View overall study information
   ├── Navigate to specific date using calendar
   ├── Select date to view hourly breakdown
   └── Review hourly data quality

3. Quality Assessment
   ├── Review "Usable ECG / Total ECG" metrics
   ├── Interpret color-coded quality indicators
   │   ├── Gray: 0% usable data
   │   ├── Light Green: 1-24% usable data
   │   ├── Green: 25-50% usable data
   │   └── Dark Green: >50% usable data
   ├── Identify problematic time periods
   └── Note overall study quality trends

4. Quality-Based Actions
   ├── If quality is poor:
   │   ├── Contact patient for device adjustment
   │   ├── Schedule device replacement
   │   └── Consider study extension
   └── If quality is good:
       └── Continue monitoring until study completion

5. Documentation
   └── Add clinical notes about quality assessment
```

#### 4. Extend Study Workflow

**Trigger**: Study needs extension due to insufficient data or clinical requirements

**Flow Steps**:
```
1. Study Assessment
   ├── Review current study progress
   ├── Evaluate data quality
   └── Determine extension requirements

2. Study Modification
   ├── Access study configuration (implied from UI)
   ├── Modify end date
   ├── Update study duration
   └── Notify patient of extension

3. System Updates
   ├── Update estimated end date
   ├── Continue data collection
   └── Reset quality monitoring for extended period

Note: Specific UI for study extension not visible in screenshots,
but workflow inferred from study management patterns
```

#### 5. Review ECG Strips per Symptom Workflow

**Trigger**: Patient reports symptoms that require ECG correlation

**Flow Steps**:
```
1. Access Symptom Logs
   ├── Navigate to Symptom Log section
   ├── Review list of reported symptoms
   ├── Filter by status if needed
   └── Identify symptoms requiring review

2. Symptom Selection
   ├── Click on specific symptom entry
   ├── Note symptom details:
   │   ├── Date and time
   │   ├── Symptoms experienced
   │   ├── Patient description
   │   └── Current status
   └── Click patient name to enter patient context

3. ECG Viewer Access
   ├── Navigate to ECG VIEWER tab
   ├── System automatically loads ECG data for symptom timepoint
   └── ECG viewer displays relevant time period

4. ECG Analysis
   ├── Review ECG waveforms at symptom time
   ├── Use filter controls to optimize display:
   │   ├── Adjust frequency filtering
   │   ├── Modify amplitude scaling
   │   ├── Apply noise filtering
   │   └── Select appropriate channels
   ├── Navigate through time periods:
   │   ├── Use Previous/Next 4m controls
   │   ├── Review expanded 10-second views
   │   └── Correlate with symptom timing
   └── Review contextual metrics:
       ├── Blood pressure
       ├── Activity level
       ├── Other physiological data
       └── Temporal correlation

5. Clinical Annotation
   ├── Click "Add annotations" for the symptom
   ├── Complete observation checklist:
   │   ├── Select relevant ECG findings
   │   ├── Note arrhythmias or abnormalities
   │   └── Document technical observations
   ├── Add clinical notes (1000 char limit)
   ├── Provide interpretation (for reviewing physicians)
   └── Save annotations

6. Status Update
   ├── Update symptom status:
   │   ├── "Pending review" → "MD to review"
   │   ├── "MD to review" → "Reviewed by MD"
   │   └── "Reviewed by tech" (for technical review)
   └── System tracks review workflow

7. Clinical Documentation
   ├── Navigate to Notes section
   ├── Create clinical note documenting findings
   ├── Include symptom correlation
   └── Document clinical significance
```

#### 6. Clinical Review and Diagnosis Workflow

**Trigger**: MD needs to review and provide clinical interpretation

**Flow Steps**:
```
1. Review Queue Access
   ├── Navigate to Symptom Log
   ├── Filter by "MD to review" status
   └── Prioritize by clinical urgency

2. Symptom Review
   ├── Select symptom requiring MD review
   ├── Review technical annotations
   ├── Access ECG viewer for detailed analysis
   └── Review patient context and history

3. Clinical Analysis
   ├── Correlate ECG findings with symptoms
   ├── Consider patient medical history
   ├── Evaluate clinical significance
   └── Determine diagnosis or recommendations

4. Clinical Documentation
   ├── Update interpretation section in annotations
   ├── Provide clinical diagnosis
   ├── Document treatment recommendations
   └── Note follow-up requirements

5. Status Completion
   ├── Update status to "Reviewed by MD"
   ├── System tracks completion
   └── Triggers any required notifications

6. Patient Communication
   ├── Generate patient report (implied)
   ├── Schedule follow-up if needed
   └── Coordinate care team communication
```

#### 7. Organization Management Workflow

**Trigger**: Need to manage team members and access

**Flow Steps**:
```
1. Access Organization Section
   └── Navigate to Organization in sidebar

2. Member Management
   ├── Review current team members
   ├── Check member roles and status
   └── Identify access needs

3. Add New Members
   ├── Click "Add Member" button
   ├── Enter member email address
   ├── Assign appropriate role:
   │   ├── Desk Admin
   │   ├── MD
   │   ├── Cardiac Tech
   │   └── Organization Admin
   ├── Send invitation
   └── Track invitation status

4. Member Administration
   ├── Monitor invitation acceptance
   ├── Update member roles as needed
   ├── Manage access permissions
   └── Remove members when necessary
```

### Workflow Integration Points

#### Cross-Section Data Flow
```
Patient Creation → Study Setup → Data Collection → Symptom Logging → Clinical Review → Documentation

Each step creates data dependencies:
├── Patient Profile enables Study Creation
├── Active Study enables ECG Data Collection
├── ECG Data enables Symptom Correlation
├── Symptom Reports trigger Clinical Review
└── Clinical Review generates Documentation
```

#### Status Progression Workflows
```
Symptom Status Progression:
Patient Reports → "Pending review" → "MD to review" → "Reviewed by MD"
                                  ↘ "Reviewed by tech" ↗

Study Status Progression:
Setup → "Ongoing" → "Completed" → "Closed by Staff"
                 ↘ "Cancelled" (if needed)

Patient Status Progression:
Registration → "Pending" → "Verified" → "Active" → "Archived"
```

#### Quality Assurance Workflows
```
Data Quality Monitoring:
Continuous ECG Collection → Hourly Quality Assessment → Quality Alerts → Intervention Actions

Clinical Quality Assurance:
Technical Review → MD Review → Documentation → Quality Metrics → Process Improvement
```

### Error Handling and Edge Cases

#### Common Error Scenarios
1. **Incomplete Patient Information**: Form validation prevents submission
2. **Study Setup Conflicts**: Date/time validation prevents scheduling conflicts
3. **Poor ECG Quality**: Quality monitoring triggers intervention workflows
4. **Missing Symptom Correlation**: System prompts for ECG review
5. **Incomplete Clinical Review**: Status tracking ensures completion

#### Recovery Workflows
1. **Data Loss Recovery**: System maintains audit trails for data reconstruction
2. **Device Malfunction**: Study extension and device replacement workflows
3. **Clinical Escalation**: Urgent findings trigger immediate notification workflows
4. **System Downtime**: Offline data collection with sync capabilities


## Data Model and Backend Structure

### Database Schema Inference

Based on the UI elements and workflows observed, the following database structure can be inferred:

#### 1. Users Table

**Purpose**: Manages clinician accounts and authentication

```sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role ENUM('desk_admin', 'md', 'cardiac_tech', 'organization_admin') NOT NULL,
    organization_id BIGINT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    mfa_enabled BOOLEAN DEFAULT FALSE,
    mfa_secret VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP,
    
    FOREIGN KEY (organization_id) REFERENCES organizations(id)
);
```

**Key Fields Observed**:
- Email: Used for login (simon.yang.ch@gmail.com)
- Name: Displayed in header (Simon Yang)
- Role: Determines access permissions (MD, Desk Admin, Cardiac Tech)
- Organization: Links to clinic (Staging Clinic, ID: 373535)
- MFA: Multi-factor authentication toggle visible

#### 2. Organizations Table

**Purpose**: Manages clinic/organization information

```sql
CREATE TABLE organizations (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    organization_code VARCHAR(50) UNIQUE NOT NULL,
    address TEXT,
    phone VARCHAR(50),
    email VARCHAR(255),
    country VARCHAR(100),
    timezone VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

**Key Fields Observed**:
- Name: "Staging Clinic"
- Organization Code: "373535"
- Multiple organizations supported (member invitations across organizations)

#### 3. Patients Table

**Purpose**: Stores patient demographic and medical information

```sql
CREATE TABLE patients (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    scla_account_id VARCHAR(255) UNIQUE,
    organization_id BIGINT NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    sex ENUM('male', 'female', 'unspecified'),
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    country VARCHAR(100) NOT NULL,
    
    -- Insurance Information
    health_insurance_policy VARCHAR(255) NOT NULL,
    insurance_number VARCHAR(100) NOT NULL,
    insurance_version_code VARCHAR(50),
    insurance_expiry_date DATE,
    
    -- Medical Information
    medical_record_number VARCHAR(100),
    assigned_physician_id BIGINT,
    
    -- Address Information
    street_address VARCHAR(255),
    city VARCHAR(100),
    province_state VARCHAR(100),
    postal_code VARCHAR(20),
    
    -- System Fields
    status ENUM('pending', 'verified', 'active', 'archived') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by BIGINT NOT NULL,
    
    FOREIGN KEY (organization_id) REFERENCES organizations(id),
    FOREIGN KEY (assigned_physician_id) REFERENCES users(id),
    FOREIGN KEY (created_by) REFERENCES users(id)
);
```

**Key Fields Observed**:
- Personal: Yang, Simon, 1989-07-10, Male
- Contact: simon.yang.ch@gmail.com, +41 78 795 00 09
- Insurance: Avenir (Groupe Mutuel), 7561234567897
- Address: Ackersteinstrasse 76, Zurich, 8049
- Status: "Verified" badge visible
- Physician: Peter Wood (assigned)

#### 4. Studies Table

**Purpose**: Manages Holter monitoring studies

```sql
CREATE TABLE studies (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    patient_id BIGINT NOT NULL,
    organization_id BIGINT NOT NULL,
    study_type ENUM('holter') DEFAULT 'holter',
    duration_type ENUM('24_hour', '48_hour', '72_hour', '7_day', '14_day') NOT NULL,
    
    -- Study Timeline
    start_date DATE NOT NULL,
    start_time TIME NOT NULL,
    estimated_end_date DATE NOT NULL,
    actual_end_date DATE,
    
    -- Study Configuration
    setup_type VARCHAR(100) DEFAULT 'in_clinic_setup',
    garment_type VARCHAR(100) DEFAULT 'skiip_band',
    garment_size VARCHAR(20) DEFAULT 'xs',
    
    -- Study Status
    status ENUM('ongoing', 'completed', 'cancelled', 'closed_by_staff') DEFAULT 'ongoing',
    
    -- Quality Metrics
    total_ecg_minutes INT DEFAULT 0,
    usable_ecg_minutes INT DEFAULT 0,
    average_daily_usable_hours DECIMAL(4,2) DEFAULT 0.00,
    
    -- Associated Data
    pod_id VARCHAR(255),
    edf_file_path VARCHAR(500),
    
    -- System Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by BIGINT NOT NULL,
    
    FOREIGN KEY (patient_id) REFERENCES patients(id),
    FOREIGN KEY (organization_id) REFERENCES organizations(id),
    FOREIGN KEY (created_by) REFERENCES users(id)
);
```

**Key Fields Observed**:
- Duration: 14-days, 48-hours, 24-hours options
- Dates: 2025-06-24 10:21 start, 2025-07-08 estimated end
- Status: "Ongoing", "Closed by Staff", "Cancelled"
- Quality: "Avg. 0 hrs of usable ECG/day"
- Pod Association: "31067601890"

#### 5. Study_Quality Table

**Purpose**: Stores hourly ECG data quality metrics

```sql
CREATE TABLE study_quality (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    study_id BIGINT NOT NULL,
    date DATE NOT NULL,
    hour TINYINT NOT NULL, -- 0-23
    
    -- Quality Metrics
    total_minutes TINYINT DEFAULT 0, -- 0-60
    usable_minutes TINYINT DEFAULT 0, -- 0-60
    quality_percentage DECIMAL(5,2) DEFAULT 0.00,
    quality_category ENUM('none', 'low', 'medium', 'high') DEFAULT 'none',
    
    -- Technical Metrics
    signal_quality_score DECIMAL(5,2),
    noise_level DECIMAL(5,2),
    artifact_count INT DEFAULT 0,
    
    -- System Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (study_id) REFERENCES studies(id),
    UNIQUE KEY unique_study_hour (study_id, date, hour)
);
```

**Key Fields Observed**:
- Hourly breakdown: 00:00-23:00 time slots
- Quality metrics: "0 mins / 0 mins" (usable/total)
- Quality categories: Color-coded (0%, 1-24%, 25-50%, >50%)
- Date-specific tracking: Calendar navigation for specific dates

#### 6. Symptoms Table

**Purpose**: Stores patient-reported symptoms

```sql
CREATE TABLE symptoms (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    patient_id BIGINT NOT NULL,
    study_id BIGINT,
    
    -- Symptom Information
    symptom_date TIMESTAMP NOT NULL,
    reported_date TIMESTAMP NOT NULL,
    symptoms_experienced TEXT NOT NULL,
    severity TINYINT, -- 1-10 scale
    duration VARCHAR(100),
    triggers TEXT,
    patient_notes TEXT,
    
    -- Clinical Review
    status ENUM('pending_review', 'md_to_review', 'reviewed_by_md', 'reviewed_by_tech') DEFAULT 'pending_review',
    assigned_physician_id BIGINT,
    
    -- ECG Correlation
    ecg_start_time TIMESTAMP,
    ecg_end_time TIMESTAMP,
    has_routine_ecg BOOLEAN DEFAULT FALSE,
    
    -- System Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (patient_id) REFERENCES patients(id),
    FOREIGN KEY (study_id) REFERENCES studies(id),
    FOREIGN KEY (assigned_physician_id) REFERENCES users(id)
);
```

**Key Fields Observed**:
- Timing: "2025-06-24 10:38" symptom and reported dates
- Symptoms: "Sweating", "testing", "study started", "Routine ECG"
- Status: "Pending review" with dropdown options
- Severity: "5/10" scale
- Duration: "On Going"
- Triggers: "Caffeine"

#### 7. ECG_Data Table

**Purpose**: Links to ECG binary data stored in S3

```sql
CREATE TABLE ecg_data (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    study_id BIGINT NOT NULL,
    patient_id BIGINT NOT NULL,
    
    -- Temporal Information
    start_timestamp TIMESTAMP NOT NULL,
    end_timestamp TIMESTAMP NOT NULL,
    duration_seconds INT NOT NULL,
    
    -- ECG Channels
    channel_1_s3_path VARCHAR(500),
    channel_2_s3_path VARCHAR(500),
    channel_3_s3_path VARCHAR(500),
    
    -- Data Quality
    signal_quality ENUM('poor', 'fair', 'good', 'excellent'),
    noise_level DECIMAL(5,2),
    artifact_flags JSON,
    
    -- Processing Information
    sampling_rate INT DEFAULT 250, -- Hz
    amplitude_scale DECIMAL(8,4) DEFAULT 10.0, -- mm/mV
    frequency_filter_low DECIMAL(6,3) DEFAULT 0.05, -- Hz
    frequency_filter_high DECIMAL(6,3) DEFAULT 45.0, -- Hz
    
    -- System Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    processed_at TIMESTAMP,
    
    FOREIGN KEY (study_id) REFERENCES studies(id),
    FOREIGN KEY (patient_id) REFERENCES patients(id),
    
    INDEX idx_study_timestamp (study_id, start_timestamp),
    INDEX idx_patient_timestamp (patient_id, start_timestamp)
);
```

**Key Fields Observed**:
- Time ranges: "10:34:30 - 10:38:30" (4-minute segments)
- Channels: 1, 2, 3 with radio button selection
- Filters: "0.05-45 Hz (Standard)", "Off" noise filter, "10mm/mV" amplitude
- S3 storage: Binary ECG data stored externally

#### 8. Symptom_Annotations Table

**Purpose**: Stores clinical annotations for symptoms

```sql
CREATE TABLE symptom_annotations (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    symptom_id BIGINT NOT NULL,
    annotated_by BIGINT NOT NULL,
    
    -- Observation Checkboxes (stored as JSON for flexibility)
    observations JSON, -- Array of selected observations
    
    -- Text Fields
    clinical_notes TEXT, -- 1000 character limit
    interpretation TEXT, -- 1000 character limit (for reviewing physicians only)
    
    -- System Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (symptom_id) REFERENCES symptoms(id),
    FOREIGN KEY (annotated_by) REFERENCES users(id)
);
```

**Key Fields Observed**:
- Observations: Checkboxes for 1AVB, 2AVB1, 2AVB2, 3AVB, AF, Artifact, AFL, BBB, Diagnosis, EAT, IRD, IVR, JR, MAT, No ECG, NNS, NNV, NS, NV, Pause, SA, SR, SVT, VFib, VT, WAP, Other
- Notes: 1000 character limit
- Interpretation: 1000 character limit (physicians only)

#### 9. Clinical_Notes Table

**Purpose**: Stores clinical documentation

```sql
CREATE TABLE clinical_notes (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    patient_id BIGINT NOT NULL,
    created_by BIGINT NOT NULL,
    
    -- Note Content
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    note_type ENUM('clinical', 'administrative', 'technical') DEFAULT 'clinical',
    
    -- Rich Text Formatting (stored as HTML or markdown)
    formatted_content TEXT,
    
    -- System Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- Notes cannot be edited or deleted once created (per UI notice)
    
    FOREIGN KEY (patient_id) REFERENCES patients(id),
    FOREIGN KEY (created_by) REFERENCES users(id)
);
```

**Key Fields Observed**:
- Rich text editor with formatting options
- Title field
- Immutable once created (per UI warning)
- Date/time auto-populated

#### 10. Contextual_Metrics Table

**Purpose**: Stores physiological data for ECG correlation

```sql
CREATE TABLE contextual_metrics (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    patient_id BIGINT NOT NULL,
    study_id BIGINT,
    
    -- Temporal Information
    measurement_timestamp TIMESTAMP NOT NULL,
    
    -- Physiological Metrics
    blood_pressure_systolic INT,
    blood_pressure_diastolic INT,
    oxygen_saturation DECIMAL(5,2),
    body_weight DECIMAL(6,2),
    glucose_level DECIMAL(6,2),
    body_temperature DECIMAL(4,2),
    activity_steps INT,
    last_posture VARCHAR(50),
    
    -- Data Source
    source_device VARCHAR(100),
    measurement_type ENUM('manual', 'automatic', 'imported'),
    
    -- System Fields
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (patient_id) REFERENCES patients(id),
    FOREIGN KEY (study_id) REFERENCES studies(id),
    
    INDEX idx_patient_timestamp (patient_id, measurement_timestamp)
);
```

**Key Fields Observed**:
- Blood pressure: "mmHg (closest before/after)"
- Oxygen saturation: "mmHg (closest before/after)"
- Body weight: "kg (closest before/after)"
- Glucose: "mmol/L (closest before/after)"
- Temperature: "°C"
- Activity: "steps", "last posture"

### Backend Architecture Inference

#### API Structure

Based on the UI interactions, the following API endpoints can be inferred:

```
Authentication & Users:
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me
PUT /api/auth/mfa/enable
PUT /api/auth/mfa/disable

Organizations:
GET /api/organizations/{id}/members
POST /api/organizations/{id}/members/invite
DELETE /api/organizations/{id}/members/{userId}

Patients:
GET /api/patients
POST /api/patients
GET /api/patients/{id}
PUT /api/patients/{id}
DELETE /api/patients/{id}/archive
POST /api/patients/{id}/scla-login-code

Studies:
GET /api/studies
POST /api/studies
GET /api/studies/{id}
PUT /api/studies/{id}
GET /api/studies/{id}/progress
GET /api/studies/{id}/quality/{date}
GET /api/studies/{id}/edf-download

Symptoms:
GET /api/symptoms
GET /api/symptoms/{id}
PUT /api/symptoms/{id}/status
GET /api/symptoms/{id}/history
POST /api/symptoms/{id}/annotations

ECG Data:
GET /api/ecg/{studyId}/data
GET /api/ecg/{studyId}/channels/{channel}
GET /api/ecg/{studyId}/timerange/{start}/{end}
POST /api/ecg/filters/apply

Notes:
GET /api/notes
POST /api/notes
GET /api/notes/{id}

Contextual Metrics:
GET /api/metrics/{patientId}/timerange/{start}/{end}
POST /api/metrics/{patientId}
```

#### Data Storage Architecture

```
Primary Database (MySQL/PostgreSQL):
├── User management and authentication
├── Patient demographics and medical records
├── Study configuration and metadata
├── Symptom logs and annotations
├── Clinical notes and documentation
└── Quality metrics and aggregations

S3 Object Storage:
├── Raw ECG binary data files
├── Processed ECG segments
├── EDF export files
└── System backups

Redis Cache:
├── Session management
├── Real-time ECG data cache
├── Quality metric aggregations
└── API response caching

Time-Series Database (InfluxDB/TimescaleDB):
├── High-frequency ECG data points
├── Contextual physiological metrics
├── Device telemetry data
└── Quality monitoring metrics
```

#### Integration Points

```
External Systems:
├── SCLA Mobile App (patient-facing)
├── ECG Device APIs (data collection)
├── Healthcare Information Systems (HL7/FHIR)
├── Insurance Verification Services
└── Notification Services (email/SMS)

Internal Services:
├── ECG Processing Engine
├── Quality Assessment Service
├── Clinical Decision Support
├── Report Generation Service
└── Audit Logging Service
```

### Data Relationships and Constraints

#### Primary Relationships
```
Organizations (1) → (N) Users
Organizations (1) → (N) Patients
Patients (1) → (N) Studies
Studies (1) → (N) ECG_Data
Studies (1) → (N) Study_Quality
Patients (1) → (N) Symptoms
Symptoms (1) → (N) Symptom_Annotations
Patients (1) → (N) Clinical_Notes
Patients (1) → (N) Contextual_Metrics
```

#### Business Rules and Constraints
1. **Patient-Study Relationship**: One patient can have multiple studies, but each study belongs to one patient
2. **Study Quality**: Quality data is generated hourly for active studies
3. **Symptom Correlation**: Symptoms must be correlated with ECG data within study timeframe
4. **Clinical Review**: Only MDs can provide clinical interpretations
5. **Data Immutability**: Clinical notes cannot be modified once created
6. **Organization Isolation**: Users can only access data within their organization
7. **Study Lifecycle**: Studies progress through defined status states
8. **Quality Thresholds**: Minimum quality requirements for clinical validity


## Implementation Guidance

### Technology Stack Recommendations

#### Frontend Technologies
```
Framework: React.js with TypeScript
├── UI Library: Material-UI or Ant Design
├── State Management: Redux Toolkit or Zustand
├── Routing: React Router v6
├── Forms: React Hook Form with Yup validation
├── Charts: Chart.js or D3.js for ECG visualization
├── Rich Text: Draft.js or TinyMCE for notes editor
└── Date/Time: date-fns or moment.js

ECG Visualization:
├── Canvas-based rendering for performance
├── WebGL for real-time data processing
├── Custom waveform components
└── Multi-channel synchronization
```

#### Backend Technologies
```
Framework: Node.js with Express.js or Python with FastAPI
├── Database: PostgreSQL with TimescaleDB extension
├── ORM: Prisma (Node.js) or SQLAlchemy (Python)
├── Authentication: JWT with refresh tokens
├── File Storage: AWS S3 or compatible object storage
├── Caching: Redis for session and data caching
├── Queue: Bull (Node.js) or Celery (Python) for background jobs
└── Real-time: Socket.io or WebSockets for live updates

ECG Processing:
├── Signal processing libraries (scipy, numpy)
├── Real-time data streaming
├── Quality assessment algorithms
└── Artifact detection and filtering
```

#### Infrastructure
```
Deployment:
├── Containerization: Docker with docker-compose
├── Orchestration: Kubernetes or Docker Swarm
├── Load Balancing: NGINX or AWS ALB
├── Monitoring: Prometheus + Grafana
├── Logging: ELK Stack (Elasticsearch, Logstash, Kibana)
└── CI/CD: GitHub Actions or GitLab CI

Security:
├── HTTPS/TLS encryption
├── HIPAA compliance measures
├── Data encryption at rest and in transit
├── Regular security audits
└── Access logging and monitoring
```

### Component Implementation Details

#### 1. ECG Viewer Component

**Core Requirements**:
```typescript
interface ECGViewerProps {
  studyId: string;
  patientId: string;
  timeRange: {
    start: Date;
    end: Date;
  };
  channels: number[];
  filters: ECGFilters;
  onAnnotationAdd: (annotation: Annotation) => void;
}

interface ECGFilters {
  frequencyLow: number;    // 0.05 Hz default
  frequencyHigh: number;   // 45 Hz default
  mainsNoiseFilter: boolean;
  amplitude: number;       // 10 mm/mV default
}
```

**Implementation Considerations**:
- Canvas-based rendering for smooth scrolling and zooming
- Efficient data loading with pagination for large datasets
- Real-time filter application without server round-trips
- Multi-channel synchronization with precise time alignment
- Annotation overlay system with click-to-annotate functionality

#### 2. Data Table Component

**Reusable Table Structure**:
```typescript
interface DataTableProps<T> {
  data: T[];
  columns: ColumnDefinition<T>[];
  pagination: PaginationConfig;
  sorting: SortConfig;
  filtering: FilterConfig;
  actions?: ActionConfig<T>[];
}

interface ColumnDefinition<T> {
  key: keyof T;
  title: string;
  sortable: boolean;
  filterable: boolean;
  render?: (value: any, record: T) => React.ReactNode;
}
```

**Features to Implement**:
- Server-side pagination for large datasets
- Multi-column sorting with visual indicators
- Advanced filtering with multiple criteria
- Inline editing for status changes
- Bulk actions for multiple selections

#### 3. Modal System

**Modal Management**:
```typescript
interface ModalConfig {
  id: string;
  component: React.ComponentType<any>;
  props: any;
  size: 'small' | 'medium' | 'large' | 'fullscreen';
  closable: boolean;
  maskClosable: boolean;
}

// Global modal state management
const useModalStore = () => {
  const [modals, setModals] = useState<ModalConfig[]>([]);
  
  const openModal = (config: ModalConfig) => { /* ... */ };
  const closeModal = (id: string) => { /* ... */ };
  const closeAllModals = () => { /* ... */ };
  
  return { modals, openModal, closeModal, closeAllModals };
};
```

#### 4. Form Validation System

**Validation Schema Examples**:
```typescript
// Patient Creation Form
const patientValidationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  dateOfBirth: yup.date().required('Date of birth is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  healthInsurancePolicy: yup.string().required('Insurance policy is required'),
  insuranceNumber: yup.string().required('Insurance number is required'),
});

// Study Creation Form
const studyValidationSchema = yup.object({
  duration: yup.string().oneOf(['24_hour', '48_hour', '72_hour', '7_day', '14_day']).required(),
  startDate: yup.date().min(new Date(), 'Start date cannot be in the past').required(),
  startTime: yup.string().matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format').required(),
});
```

### API Implementation Specifications

#### Authentication & Authorization

**JWT Token Structure**:
```typescript
interface JWTPayload {
  userId: string;
  organizationId: string;
  role: UserRole;
  permissions: string[];
  iat: number;
  exp: number;
}

// Role-based access control
const permissions = {
  desk_admin: ['patients:read', 'patients:write', 'studies:read'],
  md: ['patients:read', 'studies:read', 'symptoms:review', 'notes:write'],
  cardiac_tech: ['studies:read', 'ecg:analyze', 'symptoms:review'],
  organization_admin: ['users:manage', 'organization:manage']
};
```

#### Real-time Data Handling

**WebSocket Events**:
```typescript
// Client-side event handling
interface ECGDataEvent {
  studyId: string;
  timestamp: Date;
  channels: {
    channel1: number[];
    channel2: number[];
    channel3: number[];
  };
  quality: QualityMetrics;
}

// Server-side event emission
socket.emit('ecg:data', {
  studyId: study.id,
  timestamp: new Date(),
  channels: processedECGData,
  quality: qualityAssessment
});
```

#### Data Processing Pipeline

**ECG Quality Assessment**:
```python
def assess_ecg_quality(ecg_data, sampling_rate=250):
    """
    Assess ECG signal quality based on multiple criteria
    """
    quality_score = 0
    
    # Signal-to-noise ratio
    snr = calculate_snr(ecg_data)
    quality_score += min(snr / 20, 0.3)  # Max 30% from SNR
    
    # Artifact detection
    artifact_percentage = detect_artifacts(ecg_data)
    quality_score += max(0, 0.3 - artifact_percentage)  # Max 30% from artifacts
    
    # Heart rate variability
    hrv_score = assess_hrv_quality(ecg_data, sampling_rate)
    quality_score += hrv_score * 0.2  # Max 20% from HRV
    
    # Baseline stability
    baseline_score = assess_baseline_stability(ecg_data)
    quality_score += baseline_score * 0.2  # Max 20% from baseline
    
    return min(quality_score, 1.0)
```

### Security Implementation

#### Data Encryption

**Encryption Strategy**:
```typescript
// Patient data encryption
const encryptPatientData = (data: PatientData): EncryptedPatientData => {
  const sensitiveFields = ['ssn', 'medicalRecordNumber', 'insuranceNumber'];
  const encrypted = { ...data };
  
  sensitiveFields.forEach(field => {
    if (encrypted[field]) {
      encrypted[field] = encrypt(encrypted[field], process.env.ENCRYPTION_KEY);
    }
  });
  
  return encrypted;
};

// ECG data integrity
const generateECGChecksum = (ecgData: ECGData): string => {
  return crypto
    .createHash('sha256')
    .update(JSON.stringify(ecgData))
    .digest('hex');
};
```

#### Audit Logging

**Audit Trail Implementation**:
```typescript
interface AuditLog {
  id: string;
  userId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  changes: any;
  ipAddress: string;
  userAgent: string;
  timestamp: Date;
}

const logAuditEvent = async (event: Omit<AuditLog, 'id' | 'timestamp'>) => {
  await auditLogRepository.create({
    ...event,
    id: generateUUID(),
    timestamp: new Date()
  });
};
```

### Performance Optimization

#### ECG Data Optimization

**Data Compression and Streaming**:
```typescript
// Client-side ECG data management
class ECGDataManager {
  private cache = new Map<string, ECGSegment>();
  private maxCacheSize = 100; // segments
  
  async loadECGSegment(studyId: string, startTime: Date, duration: number): Promise<ECGSegment> {
    const cacheKey = `${studyId}-${startTime.getTime()}-${duration}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }
    
    const segment = await this.fetchECGData(studyId, startTime, duration);
    this.addToCache(cacheKey, segment);
    
    return segment;
  }
  
  private addToCache(key: string, segment: ECGSegment) {
    if (this.cache.size >= this.maxCacheSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, segment);
  }
}
```

#### Database Optimization

**Query Optimization Strategies**:
```sql
-- Optimized symptom query with proper indexing
CREATE INDEX idx_symptoms_patient_date ON symptoms(patient_id, symptom_date DESC);
CREATE INDEX idx_symptoms_status_date ON symptoms(status, symptom_date DESC);

-- Optimized ECG data query for time-range searches
CREATE INDEX idx_ecg_study_time ON ecg_data(study_id, start_timestamp, end_timestamp);

-- Partitioned study_quality table for better performance
CREATE TABLE study_quality_2025 PARTITION OF study_quality
FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');
```

### Testing Strategy

#### Unit Testing

**Component Testing Examples**:
```typescript
// ECG Viewer component test
describe('ECGViewer', () => {
  it('should render ECG waveforms correctly', async () => {
    const mockData = generateMockECGData();
    render(<ECGViewer studyId="123" data={mockData} />);
    
    expect(screen.getByTestId('ecg-canvas')).toBeInTheDocument();
    expect(screen.getByText('Channel 1')).toBeInTheDocument();
  });
  
  it('should apply filters correctly', async () => {
    const mockData = generateMockECGData();
    const { rerender } = render(<ECGViewer studyId="123" data={mockData} />);
    
    const filters = { frequencyLow: 0.1, frequencyHigh: 40, amplitude: 15 };
    rerender(<ECGViewer studyId="123" data={mockData} filters={filters} />);
    
    // Verify filter application
    expect(mockFilterFunction).toHaveBeenCalledWith(mockData, filters);
  });
});
```

#### Integration Testing

**API Integration Tests**:
```typescript
describe('Patient API', () => {
  it('should create patient with valid data', async () => {
    const patientData = {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      email: 'john.doe@example.com',
      // ... other required fields
    };
    
    const response = await request(app)
      .post('/api/patients')
      .set('Authorization', `Bearer ${validToken}`)
      .send(patientData)
      .expect(201);
    
    expect(response.body.id).toBeDefined();
    expect(response.body.status).toBe('pending');
  });
});
```

### Deployment Configuration

#### Docker Configuration

**Dockerfile Example**:
```dockerfile
# Frontend Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Docker Compose Configuration**:
```yaml
version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:80"
    depends_on:
      - backend
  
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mvcp
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
  
  db:
    image: timescale/timescaledb:latest-pg14
    environment:
      - POSTGRES_DB=mvcp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data
  
  redis:
    image: redis:alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

### Monitoring and Maintenance

#### Health Checks

**Application Health Monitoring**:
```typescript
// Health check endpoint
app.get('/health', async (req, res) => {
  const health = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    services: {
      database: await checkDatabaseHealth(),
      redis: await checkRedisHealth(),
      s3: await checkS3Health(),
      ecgProcessor: await checkECGProcessorHealth()
    }
  };
  
  const isHealthy = Object.values(health.services).every(service => service.status === 'ok');
  res.status(isHealthy ? 200 : 503).json(health);
});
```

#### Performance Monitoring

**Key Metrics to Track**:
```typescript
const metrics = {
  // Application Performance
  responseTime: 'Average API response time',
  throughput: 'Requests per second',
  errorRate: 'Percentage of failed requests',
  
  // ECG Processing
  ecgProcessingLatency: 'Time to process ECG segments',
  qualityAssessmentTime: 'Time to assess data quality',
  dataIngestionRate: 'ECG data points per second',
  
  // User Experience
  pageLoadTime: 'Frontend page load times',
  ecgRenderTime: 'Time to render ECG waveforms',
  modalOpenTime: 'Time to open complex modals',
  
  // Business Metrics
  activeStudies: 'Number of ongoing studies',
  dailySymptomReports: 'Symptoms reported per day',
  clinicalReviewTime: 'Average time for clinical review'
};
```

This comprehensive documentation provides all the necessary information for an AI system to reconstruct the MVCP application from scratch, including detailed technical specifications, implementation guidance, and operational considerations.

