# 2026 Worldcup Project Lock

## 목적

이 문서는 현재 운영 기준과 작업 금지선을 고정하기 위한 프로젝트 잠금 문서다.

## 현재 운영 기준 커밋

- `bb8d4430b2c8f4692ac24faf297121bac92ea9d0`

## 현재 운영 URL

- [https://2026worldcup-project.vercel.app/](https://2026worldcup-project.vercel.app/)

## 승인된 작업 경로

- `C:\Users\Jnote\Desktop\2026worldcup-project`
- `C:\Users\march\OneDrive\Desktop\2026worldcup-project`

## 작업 전 필수 명령

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\check-project-root.ps1
git fetch origin main
git pull --ff-only origin main
git status --short
```

## 작업 전 고정 규칙

- `git add .` 금지
- `tmp-*` 커밋 금지
- 레거시 key 삭제 금지
- Supabase 데이터 삭제 금지
- 기능 파일 수정 전 반드시 `docs/storage-source-of-truth.md` 확인
- 기능 파일 수정 전 반드시 `docs/operation-freeze-rules.md` 확인

## 절대 금지

- localStorage 전체 초기화
- shared_state key 삭제
- Supabase table/bucket 삭제
- seed/mock/test 데이터 주입
- 자동 마이그레이션 실행
- 저장 key rename
- 운영 시간대 대규모 리팩터링

## 반드시 보존할 legacy key

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

## 운영 원칙

- 저장 원본이 혼합된 기능은 함부로 정리하지 않는다.
- localStorage 단독 기능은 공유 데이터라고 가정하지 않는다.
- fallback 경로가 있는 기능은 “오래된 데이터처럼 보이는 key”라도 삭제 전에 반드시 읽기 경로를 확인한다.
