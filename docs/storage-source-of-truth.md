# Storage Source of Truth

## 목적

이 문서는 현재 프로젝트의 기능별 저장 원본을 고정 문서화하기 위한 운영 기준 문서다.  
지금 프로젝트는 기능별 저장 원본이 혼합 상태이며, 기능마다 Supabase/shared_state/localStorage/IndexedDB/fallback 경로가 함께 얽혀 있다.

반드시 기억할 결론:

- 현재 프로젝트는 기능별 저장 원본이 혼합 상태다.
- Supabase 기반 기능은 여러 PC/사용자 간 공유 가능성이 높다.
- localStorage 단독 기능은 PC/브라우저별로 분리되어 있다.
- 따라서 localStorage 단독 기능은 “공유 데이터”로 간주하면 안 된다.
- 레거시 key는 오래돼 보여도 현재 병합/fallback 경로에 쓰일 수 있으므로 삭제하면 안 된다.

## 반드시 보존해야 하는 legacy key

- `timelineData`
- `worldcup-guide-personal-timeline-shared-v1`
- `worldcup-guide-personal-timeline-details-v1`
- `worldcup-guide-timeline-assignments-v2`
- `galleryData`
- `galleryItems`
- `worldcup-gallery-items-v1`
- `worldcup_timeline_gallery_v1`
- `equipmentState`
- `worldcup-guide-equipment-editor-v1`
- `worldcup-guide-equipment-carnet-v1`
- `worldcup-guide-news-programming-v1`
- `worldcup-guide-news-editor-v1`
- `worldcup-file-storage-v1`
- `worldcup-guide-map-location-pins-v1`
- `wc26_new_suit_timeline_blocks_v1`
- `wc26_new_suit_ops_memo_pad_v1`

## 기능별 저장 원본 표

| 기능명 | 현재 읽기 경로 | 현재 쓰기 경로 | 서버 원본 여부 | localStorage/IndexedDB/fallback 여부 | 최신 원본 판정 | 안정도 | 지우면 안 되는 key | 운영 중 주의사항 | 향후 단일화 방향 |
|---|---|---|---|---|---|---|---|---|---|
| 공용일정 | `app.js`의 shared schedule 병합 경로. `worldcup-guide-personal-timeline-shared-v1` local raw, `wc26_new_suit_shared_schedule_snapshot_v1`, 복구 문자열, legacy bridge/shared window 결과를 함께 읽음 | 공용일정 저장 시 local raw와 snapshot에 다시 기록되고, bridge/shared 경로와 병행됨 | 부분 예 | 예. localStorage snapshot, legacy shared raw, 복구 fallback이 동시에 존재 | bridge/shared 읽기 성공본을 우선 시도하되 local snapshot/local raw가 계속 fallback으로 남음 | 주의 | `worldcup-guide-personal-timeline-shared-v1`, `wc26_new_suit_shared_schedule_snapshot_v1`, `wc26_new_suit_shared_schedule_deleted_keys_v1` | local snapshot이 남아 있어도 곧바로 삭제/초기화 금지. 복구 문자열과 dedupe 경로가 연결되어 있음 | bridge/shared_state 기준으로 단일화하되 snapshot은 마지막 단계에만 정리 |
| 개인일정 상세 | `legacy-schedule/app.js`에서 `worldcup-guide-personal-timeline-details-v1`, deleted-keys, shared_state 동기화 로컬 raw를 함께 읽음 | 저장 시 localStorage에 기록 후 `shared_state` 동기화 스케줄 등록 | 부분 예 | 예. localStorage mirror와 deleted key 동반 | shared_state 반영본을 지향하지만 local raw와 deleted key가 실제 fallback 역할 수행 | 주의 | `worldcup-guide-personal-timeline-details-v1`, `worldcup-guide-personal-timeline-details-deleted-v1` | details만 보고 삭제하지 말 것. deleted key를 함께 유지해야 복구/삭제 판정이 유지됨 | details + deleted keys를 서버 기준으로 정리하되 local mirror는 마지막에만 제거 |
| 레거시 일정현황 배정 | `legacy-schedule/app.js`에서 `worldcup-guide-timeline-assignments-v2` 우선, compat `timelineData`, legacy `worldcup-guide-timeline-assignments-v1`를 차례로 읽음 | 저장 시 `worldcup-guide-timeline-assignments-v2`와 `timelineData`를 함께 쓰고 legacy v1은 정리함. shared_state sync도 예약됨 | 부분 예 | 예. compat key와 legacy key fallback이 남아 있음 | `worldcup-guide-timeline-assignments-v2`가 우선 원본이지만 compat key도 실제 읽기 경로에 포함 | 주의 | `worldcup-guide-timeline-assignments-v2`, `timelineData`, `worldcup-guide-timeline-assignments-v1` | compat key를 낡았다고 보고 지우면 안 됨. 기존 브라우저/bridge가 여전히 읽을 수 있음 | v2 단일화 후 compat key는 충분한 검증 뒤 read-only fallback으로 축소 |
| 새 메인 타임라인 블록 | `app.js`에서 `wc26_new_suit_timeline_blocks_v1` localStorage를 즉시 읽고 Supabase `shared_state`와 병합 | `app.js`에서 localStorage 즉시 기록 후 `shared_state`에 upsert | 예 | 예. localStorage는 즉시 표시/오프라인 보조 mirror | `shared_state`가 공유 원본, localStorage는 mirror | 주의 | `wc26_new_suit_timeline_blocks_v1` | 집 PC에 남은 기존 localStorage는 앱을 열 때 서버값과 병합되어 올라감. 삭제 금지 | 서버 sync 검증 후 backup prefix만 정리 |
| 방송편성 | `app.js`의 `worldcup-guide-news-programming-v1` local raw와 `legacy-schedule/app.js`의 shared_state local raw/메모 persistence를 함께 읽음 | local raw 기록 후 shared_state sync, 추가 메모는 localStorage compat key에도 저장 | 부분 예 | 예. local raw + programming memo localStorage + shared_state 병행 | shared_state 반영 경로가 있으나 local memo 계층이 별도로 살아 있음 | 주의 | `worldcup-guide-news-programming-v1` | 메모 계층이 따로 있으므로 key 하나만 보고 정리하면 안 됨 | programming state와 메모 계층을 서버 기준으로 정리 |
| 월드컵 뉴스 | `legacy-schedule/app.js`에서 `worldcup-guide-news-editor-v1` local raw + shared_state 경로 | local raw 기록 후 shared_state sync | 부분 예 | 예. localStorage mirror 존재 | shared_state 동기화본을 지향하지만 local raw가 즉시 fallback | 주의 | `worldcup-guide-news-editor-v1` | 에디터 캐시를 초기화하면 브라우저 단 임시 작성 내용 손실 가능 | shared_state 단일화 후 local raw는 캐시로만 축소 |
| 장비 기본 상태 | `legacy-schedule/app.js`에서 `worldcup-guide-equipment-editor-v1` 우선, compat `equipmentState` 및 shared_state local raw를 함께 사용 | local raw 기록 후 shared_state sync | 부분 예 | 예. compat key와 local mirror 존재 | shared_state와 localStorage가 혼합되어 있어 단일 원본이라고 단정하면 안 됨 | 주의 | `worldcup-guide-equipment-editor-v1`, `equipmentState` | compat `equipmentState`도 삭제 금지. 오래된 브라우저/bridge 복구 경로일 수 있음 | equipment editor state를 서버 기준으로 단일화 |
| 문서보관 | `legacy-schedule/app.js`에서 `worldcup-guide-equipment-carnet-v1` local/shared_state raw 및 bridge 요약 경로 | local raw 기록 후 shared_state sync | 부분 예 | 예. local raw + shared_state lazy fetch | shared_state 반영본이 우선이지만 local raw가 lazy fetch fallback | 주의 | `worldcup-guide-equipment-carnet-v1` | 문서보관 데이터는 다른 장비 요약과 엮여 있어 단독 정리 금지 | carnet 저장 경로를 shared_state 또는 별도 서버 테이블로 명확화 |
| 파일보관 | `legacy-schedule/app.js`에서 `worldcup-file-storage-v1` local payload를 먼저 읽고, 이후 Supabase 파일 테이블/Storage bucket 목록을 다시 fetch | 업로드 시 Supabase table + Storage bucket 기록, fetch 후 local payload를 다시 저장 | 예 | 예. local payload fallback 존재 | Supabase table/Storage bucket이 실서버 원본, local payload는 캐시/복구용 | 주의 | `worldcup-file-storage-v1` | local payload를 비웠다고 서버 파일이 사라지는 것은 아니지만, 목록 캐시/복구 경로가 손상될 수 있음 | Supabase table/Storage를 단일 원본으로 확정하고 local payload는 캐시로만 명시 |
| 갤러리 | `galleryData`, legacy gallery keys, IndexedDB(`worldcup-guide-gallery-db`), shared_state raw, Supabase Storage bucket `timeline-gallery`를 병합 | 저장/삭제 시 local raw, shared_state sync, deleted ids, bucket 업로드/삭제 경로가 함께 움직임 | 부분 예 | 예. localStorage + IndexedDB + shared_state + bucket fallback 혼합 | 단일 최신 원본 판정이 가장 어려움. 삭제 id와 bucket 실제 파일을 함께 봐야 함 | 위험 | `galleryData`, `galleryItems`, `worldcup-gallery-items-v1`, `worldcup_timeline_gallery_v1`, `worldcup-guide-gallery-deleted-v1` | 삭제/복구 작업 위험이 큼. bucket 실제 파일, deleted ids, local raw를 함께 확인해야 함 | 갤러리를 최우선으로 단일 서버 루트로 이관 필요 |
| MAP 핀 | `legacy-schedule/app.js`에서 `worldcup-guide-map-location-pins-v1` shared_state local raw를 읽음 | local raw 기록 후 shared_state sync | 부분 예 | 예. local raw fallback 존재 | shared_state 반영본을 기대하지만 로컬 raw가 실질 저장소 역할도 함 | 주의 | `worldcup-guide-map-location-pins-v1` | 핀 삭제/수정 시 local raw만 보고 초기화하면 공유 상태 손상 가능 | shared/local fallback을 줄이고 서버 단일 상태로 축소 |
| 운영메모 | `app.js`에서 `wc26_new_suit_ops_memo_pad_v1` localStorage 직접 읽기 | `app.js`에서 `wc26_new_suit_ops_memo_pad_v1` localStorage 직접 쓰기 | 아니오 | 예. localStorage 단독 | 현재 브라우저 localStorage가 유일 원본 | 위험 | `wc26_new_suit_ops_memo_pad_v1` | 다른 PC 공유 보장 없음. 운영 공용 메모처럼 사용하면 안 됨 | 별도 서버 저장소로 옮기기 전까지 로컬 메모임을 명시 |

## 핵심 운영 해석

- Supabase 테이블 또는 `shared_state` 동기화가 있는 기능도 localStorage mirror를 유지하는 경우가 많다.
- 새 메인 운영 메모 `wc26_new_suit_ops_memo_pad_v1`도 2026-05-21 이후 `shared_state` 동기화 대상으로 전환되었다.
- localStorage mirror가 남아 있다고 해서 곧바로 “구버전 쓰레기 데이터”라고 판단하면 안 된다.
- 갤러리, 파일보관, 공용일정은 fallback 경로가 특히 많아서 키 하나만 지워도 복구/표시 흐름이 깨질 수 있다.
- 새 메인 타임라인 블록과 운영메모는 서버 공유 원본이 아니므로, 다른 PC에서 안 보이는 것이 정상일 수 있다.

## 향후 원칙

1. 지금은 key rename, 자동 마이그레이션, 레거시 삭제를 하지 않는다.
2. 기능 수정 전에는 반드시 이 문서와 `docs/operation-freeze-rules.md`를 먼저 확인한다.
3. Supabase 기반 기능이라도 local fallback을 끊기 전에는 “혼합 저장 구조”로 취급한다.
