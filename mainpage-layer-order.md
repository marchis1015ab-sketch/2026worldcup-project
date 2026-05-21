# 메인페이지 레이어 순서

기준:
- 배포 URL: https://2026worldcup-project.vercel.app/
- 확인 날짜: 2026-05-19
- 기준 소스:
  - HTML: https://2026worldcup-project.vercel.app/
  - CSS: https://2026worldcup-project.vercel.app/styles.css?v=korea-roster-20260518-01

## 배경부터 위로 쌓이는 순서

1. `body` 기본 배경색
- `body { background: #22536b; }`

2. 전체 화면 배경 그룹
- `body::before`: 어두운 그라데이션 안개층
- `body::after`: 얇은 격자 패턴층
- `.broadcast-bg` (`position: fixed; z-index: 0`): 실제 월드컵 배경 이미지층
- `.broadcast-bg::before`: 가장자리 비네팅층
- `.broadcast-bg::after`: 민트/오렌지 광선층

3. 메인 앱 셸
- `.shell-frame` (`position: relative; z-index: 1`)
- 실제 UI 본체 전체

4. 셸 안 1차 구조
- 왼쪽 `aside.sidebar`
- 오른쪽 `main.dashboard`

5. 사이드바 내부
- 사이드바 박스 자체
- `.sidebar::after` 장식 테두리
- 그 위에 `.sidebar-brand`, `.menu` (`z-index: 1`)

6. 메인 대시보드 상단
- `button.mobile-section-back`
  - 기본 숨김
  - 모바일 상세 모드에서는 `position: sticky; z-index: 8`
- `header.topbar`
  - 메인 제목, 시계, D-day

7. 메인페이지 본문 뷰
- 기본 표시: `#view-dashboard`
- 상세 뷰:
  - `#view-match-schedule`
  - `#view-map`
  - `#view-schedule`
  - `#view-field-ops`
  - `#view-archive`
  - `#view-broadcast-news`
  - `#view-operations`
- 상세 뷰들은 같은 레벨의 형제 구조이고 평소에는 `hidden`

8. 메인 6패널 그리드
- `data-layout-order="1"` `#panel-main-match` 타임라인
- `data-layout-order="2"` `#panel-field-status` 장비현황
- `data-layout-order="3"` `#panel-upcoming` 데일리 경기 일정
- `data-layout-order="4"` `#panel-schedule` 공식 사이트
- `data-layout-order="5"` `#panel-equipment` 방송편성
- `data-layout-order="6"` `#panel-ops-alert` 경기장

9. 패널 내부 레이어
- `.panel` 박스 본체
- `.panel::before` 상단 3px 컬러 바
- `.panel::after` 안쪽 테두리
- `.panel__header`, `.panel-body`는 `z-index: 1`

10. 메인 6패널 아래 줄
- `section.quick-strip` 빠른 실행 버튼줄
- `footer.ticker` 현재일정 티커줄

11. 숨김 보조층
- `section.panel-stash`
- `iframe#schedule-bridge-sync-frame`

12. 전역 알림층
- `#toast-shell` `.toast` (`position: fixed; z-index: 20`)

13. 전역 모달층
- `.timeline-modal` (`z-index: 1200`)
- `.archive-suit-gallery-modal` (`z-index: 1200`)

14. 툴팁층
- `#timeline-tooltip-shell` (`z-index: 1250`)

15. 최상단 미리보기 모달
- `#shared-schedule-file-preview-modal` (`z-index: 1320`)

## 한 줄 요약

`body 바탕색 -> 배경 오버레이/배경이미지 그룹 -> shell-frame -> sidebar/dashboard -> topbar/메인 6패널/quick-strip/ticker -> toast -> modal -> tooltip -> 파일 미리보기 modal`
