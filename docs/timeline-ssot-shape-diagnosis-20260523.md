# Timeline SSOT Shape Diagnosis - 2026-05-23

## Scope
- Diagnostic only
- `app.js` not modified by this task
- No key changes
- No data deletion
- No deprecated-key recovery

## Current Start State
- Working path: `C:\Users\march\OneDrive\Desktop\2026worldcup-project`
- Branch: `main`
- `HEAD`: `992464a2053b09f0b537e333a3a7d6b2d7ed2a51`
- `origin/main`: `992464a2053b09f0b537e333a3a7d6b2d7ed2a51`
- Note: `app.js` was already dirty before this diagnosis began

## Official Keys Present
- `worldcup-guide-personal-timeline-shared-v1`: present
- `worldcup-guide-personal-timeline-details-v1`: present
- `worldcup-guide-personal-timeline-details-deleted-v1`: present

## Deprecated Keys Present
- `wc26_new_suit_timeline_blocks_v1`: present, but current value is `[]`
- `wc26_new_suit_shared_schedule_deleted_keys_v1`: present

## Runtime Counts
- Shared raw entries: `87`
- Shared rendered groups from `readSharedScheduleGroups()`: `86`
- Personal entries from `getPersonalScheduleEntries()`: `1`
- Accumulated entries from `getAccumulatedPersonalScheduleEntries()`: `1`
- Timeline blocks rendered in DOM: `0`
- Non-empty rows from `buildTimelineBlocksByName(...)`: `0`

## Official Key Samples

### `worldcup-guide-personal-timeline-shared-v1`
Shape:

```json
{
  "2026-05-20": [
    {
      "id": "cb510cb6-3cfc-4a19-ab4b-6fc9951ee6cf",
      "text": "[TEST_REALTIME_SYNC_20260519] shared",
      "images": [],
      "updatedAt": "2026-05-19T07:55:13.785Z"
    }
  ]
}
```

Observed normalized runtime shape from `readSharedScheduleGroups()`:

```json
{
  "dateKey": "2026-05-20",
  "label": "5/20",
  "metaLabel": "2026.05.20",
  "entries": [
    {
      "id": "cb510cb6-3cfc-4a19-ab4b-6fc9951ee6cf",
      "dateKey": "2026-05-20",
      "entryIndex": 0,
      "text": "[TEST_REALTIME_SYNC_20260519] shared",
      "firstLine": "[TEST_REALTIME_SYNC_20260519] shared",
      "attachments": [],
      "updatedAt": "2026-05-19T07:55:13.785Z",
      "createdAt": "",
      "deleted": false,
      "source": "",
      "images": []
    }
  ]
}
```

### `worldcup-guide-personal-timeline-details-v1`
Shape:

```json
{
  "2026-05-05": {
    "박재현": [
      {
        "장소": "과달라하라",
        "취재기자": "전영희",
        "TVU": "19번",
        "업무내용": "외곽 취재",
        "_savedAt": 1777987864587
      }
    ]
  }
}
```

Observed normalized runtime shape from `getPersonalScheduleEntries()`:

```json
{
  "key": "2026-05-05::박재현::0",
  "dateKey": "2026-05-05",
  "name": "박재현",
  "entryIndex": 0,
  "reporter": "전영희",
  "startTime": "",
  "endTime": "",
  "place": "과달라하라",
  "tvuValue": "19번",
  "tvuLabel": "TVU 19번 TRS 0019",
  "taskValue": "외곽 취재",
  "taskLabel": "외곽 취재",
  "text": "",
  "savedAt": 1777987864587,
  "ended": false
}
```

### `worldcup-guide-personal-timeline-details-deleted-v1`
Shape:

```json
{
  "version": 1,
  "updatedAt": 1779471763561,
  "keys": [
    "2026-05-22::박재현",
    "2026-05-19::박재현",
    "2026-05-06::정상원"
  ]
}
```

## Deprecated Key Samples

### `wc26_new_suit_timeline_blocks_v1`
Current value:

```json
[]
```

Expected block item shape from `sanitizeTimelineBlock()`:

```json
{
  "id": "string",
  "kind": "member",
  "name": "string",
  "startDate": "YYYY-MM-DD",
  "endDate": "YYYY-MM-DD",
  "place": "string",
  "memo": "string",
  "createdAt": "ISO string",
  "updatedAt": "ISO string"
}
```

### `wc26_new_suit_shared_schedule_deleted_keys_v1`
Observed shape:

```json
[
  "id::2026-05-18::optimistic-shared-1779088786837",
  "semantic::2026-05-18::...::img_0228.jpeg",
  "id::2026-05-20::7767ba4b-506f-46e2-bd98-1ab22c3d6656"
]
```

## `renderTimelineGantt` Required Input Shape

`renderTimelineGantt()` itself consumes:

```js
[
  {
    name: "박재현",
    blocks: [
      {
        id: "string",
        name: "박재현",
        startDate: "YYYY-MM-DD",
        endDate: "YYYY-MM-DD",
        period: "formatted label",
        place: "string",
        memo: "string",
        task: "string",
        title: "tooltip/title text"
      }
    ]
  }
]
```

Actual field dependencies observed in `buildTimelineBlocksByName()` and `renderTimelineGanttHost()`:
- row key: `name`
- row collection key: `blocks`
- block id: `id`
- row-to-color key: `name`
- date placement: `startDate`, `endDate`
- body text: `period`, `place`
- tooltip: `memo`, `title`
- date memo special case: `kind/type === WC26_TIMELINE_DATE_MEMO_KIND`

## Current Official Data vs Timeline Block Shape

### Shared schedule official shape
- Has: `dateKey`, `text`, `images`, `updatedAt`
- Missing for gantt blocks: `name`, `startDate`, `endDate`, `place`, `period`, `title`
- Conclusion: cannot be rendered directly as gantt blocks without an adapter

### Personal detail official shape
- Has: `dateKey`, `name`, `place`, `taskLabel`, `reporter`
- Missing or partial for gantt blocks: explicit `startDate/endDate` block object, `period`, `title`
- Can be adapted, but current code does not adapt it
- Also current only entry is dated `2026-05-05`, outside the currently visible gantt range

### Deleted official shape
- Has tombstone `keys`
- Current row data inspected does not indicate that the single personal entry is being incorrectly hidden by this key

## Bridge Summary Shape

`legacy-schedule/app.js` exports `getWC26LegacyTimelineGanttSummary()` with this shape:

```json
{
  "startDateKey": "2026-05-23",
  "dates": ["2026-05-23", "..."],
  "rows": [
    {
      "name": "박재현",
      "place": "",
      "items": [
        {
          "dateKey": "2026-05-23",
          "place": "",
          "task": "",
          "startTime": "",
          "status": "idle"
        }
      ]
    }
  ]
}
```

Important mismatch:
- `buildTimelineBlocksFromLegacySummary()` currently returns an empty `Map`
- So even when `summary.rows` exists, it is not converted into renderable block objects

## Why Grid Is Empty

Primary classification: `A`
- Official key data exists
- But it is not transformed into the block shape that `renderTimelineGantt()` expects

Secondary classification: `B`
- The only personal detail entry found is `2026-05-05`
- Current visible gantt dates start around `2026-05-21` to `2026-05-30`
- So even a personal-detail adapter would currently filter out that single entry from the visible window

Not supported by current evidence:
- `C`: no sign that row keys themselves are wrong; member names align with `WC26_TIMELINE_MEMBER_ORDER`
- `D`: official deleted key does not appear to be hiding the currently inspected personal row
- `E`: hydrate is running enough to populate shared/personal readers; the problem is the transform path, not pure hydrate absence

## Root Cause Summary
1. `loadTimelineBlocks()` reads only deprecated `wc26_new_suit_timeline_blocks_v1`
2. That deprecated key is currently empty (`[]`)
3. `buildTimelineBlocksFromLegacySummary()` intentionally returns empty rows
4. `buildTimelineBlocksByName()` therefore only renders deprecated custom blocks
5. Official shared/personal timeline state never becomes gantt block input
6. The one personal detail entry that does exist is also outside the current visible date window

## Next Adapter Design Needed

Recommended adapter functions for the next change:
- `buildTimelineBlocksFromOfficialPersonalDetails(dates, personalEntries, deletedState)`
- `buildTimelineBlocksFromOfficialSharedSchedules(dates, sharedGroups, assignmentsState)`
- `buildTimelineGanttRowsFromOfficialState(dates, summary)`
- `normalizeOfficialDeletedTimelineKeys(rawDeletedState)`

Recommended integration point:
- Replace the current empty `buildTimelineBlocksFromLegacySummary()` path with an adapter that converts official canonical state into the block shape consumed by `renderTimelineGantt()`
- Do not restore `wc26_new_suit_timeline_blocks_v1` as a source of truth

## Modification Ban Compliance
- `app.js` not modified by this diagnosis
- No key writes
- No data deletion
- No deprecated-key recovery used
- Deprecated keys inspected for comparison only
