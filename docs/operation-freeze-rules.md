# Operation Freeze Rules

## 목적

이 문서는 월드컵 운영 전후에 Codex 또는 사람이 실수로 저장 구조를 건드리지 않도록 작업 금지선을 고정하기 위한 운영 잠금 문서다.

## 운영 전후 작업 금지선

- 저장 구조 변경 금지
- 레거시 key 삭제 금지
- Supabase table/bucket 삭제 금지
- localStorage 전체 초기화 금지
- mock/seed 데이터 복원 금지
- UI 수정 시 PC/태블릿/모바일 동시 확인 필수
- `git add .` 금지
- `tmp-*` 파일 커밋 금지
- 배포 전 `node --check` 필수
- 배포 후 운영 URL query string으로 확인 필수

## 운영 중 허용 작업

- 텍스트 오타 수정
- 작은 CSS overflow 보정
- 버튼 연결 오류 최소 수정
- 저장 실패 원인 진단 후 최소 수정
- 기존 데이터 보존을 전제로 한 fallback 보강

## 운영 중 금지 작업

- 저장 구조 통합 대공사
- key rename
- 전체 리팩터링
- 디자인 전면 개편
- 레거시 삭제
- 자동 마이그레이션
- 대량 데이터 정리

## Codex 작업 전 고정 점검 규칙

1. 작업 전 `docs/storage-source-of-truth.md`를 먼저 확인한다.
2. 현재 기능이 Supabase 원본인지 localStorage 단독인지 먼저 판정한다.
3. localStorage 단독 기능은 공유 데이터라고 가정하지 않는다.
4. 레거시 key가 읽기/병합/fallback 경로에 있는지 먼저 확인한다.
5. `tmp-*` 파일은 생성돼 있어도 절대 `git add` 하지 않는다.
6. 기능 파일 수정이 필요해 보이면 먼저 문서에 “추후 별도 작업 필요”로 남기고, 운영 시간대에는 바로 수정하지 않는다.

## 운영 시간대 특별 경고

- 월드컵 운영 중에는 저장 구조 변경을 시도하지 않는다.
- 레거시 key가 낡아 보여도 현재 fallback 경로에 연결돼 있을 수 있다.
- “정리”, “초기화”, “이전 버전 제거” 같은 표현은 실제 데이터 손실로 이어질 수 있으므로 운영 시간대에는 금지한다.

## 배포 전 최소 검증

- `node --check app.js`
- `node --check legacy-schedule/app.js`
- `node --check legacy-schedule/bridge.js`
- `node --check tournament-tab.js`
- `git diff --name-only`
- `git status --short`

## 배포 후 최소 확인

- 운영 URL에 query string을 붙여 최신 번들 반영 여부 확인
- 콘솔 `400/404/402/CORS` 오류 확인
- Supabase 응답 실패 여부 확인
- 메인/모바일/태블릿 핵심 화면 열림 여부 확인
