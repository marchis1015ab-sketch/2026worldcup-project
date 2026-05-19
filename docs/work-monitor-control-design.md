# Work Monitor / Control Design

## 1. 목적

이 문서는 운영 사이트 기능을 직접 수정하기 전에, 별도 개발 보조 시스템으로 현재 화면의 패널/레이어를 안전하게 관찰하고 임시로 조작할 수 있는 구조를 설계한다.

핵심 목표는 다음과 같다.

- 기존 작업용 사이트 주소는 그대로 유지한다.
- 별도 모니터/컨트롤 주소에서 iframe 기반 미리보기와 개발용 제어 UI를 제공한다.
- 패널 hide/show, outline, 이동, 크기조정, 메모 작성은 모두 preview 전용 임시 상태로만 처리한다.
- 실제 `app.js`, `styles.css`, `legacy-schedule/app.js`, Supabase 저장/삭제 로직은 설계 단계에서 건드리지 않는다.
- 태블릿에서 누른 동작이 실제 코드 삭제나 운영 데이터 변경으로 이어지지 않게 한다.

## 2. 왜 필요한가

현재 모바일/태블릿 UI 작업은 특정 패널을 지우거나 옮길 때 실제 코드 구조를 계속 추적해야 해서 반복 비용이 크다. 특히 다음 문제가 있다.

- 어떤 패널이 현재 화면 위에 쌓여 있는지 육안으로 빠르게 파악하기 어렵다.
- 특정 패널을 잠깐 숨겨 보고 싶은데 실제 CSS/JS를 건드리면 범위가 커진다.
- 모바일 뷰에서 패널을 하나씩 벗겨 보거나 다시 조립해 보는 작업이 느리다.
- “여기 삭제”, “20px 위로”, “이 영역 비어 있음” 같은 지시를 태블릿에서 바로 남기기 어렵다.
- stale cache, mock/seed 데이터, localStorage 복원 때문에 이미 정리한 상태가 다시 나타나는 문제가 생기기 쉽다.

따라서 운영 기능과 분리된 개발용 컨트롤러를 두고, preview 전용 오버레이와 상태 파일만 다루는 구조가 필요하다.

## 3. 전체 구조

전체 구조는 2개 주소와 1개의 상태 저장 영역으로 나눈다.

### 3.1 주소 분리

- 작업용 주소: 기존 Live Server 또는 현재 로컬 서버
- 모니터/컨트롤 주소: 별도 Node 서버

예시:

- 작업용 주소: `http://127.0.0.1:5500/`
- 작업용 태블릿 주소: `http://192.168.0.15:5500/`
- 모니터 주소: `http://127.0.0.1:8787/`
- 모니터 태블릿 주소: `http://192.168.0.15:8787/`

### 3.2 역할 분리

- 작업용 주소는 실제 사이트 미리보기와 기존 저장/삭제/업로드 흐름을 그대로 유지한다.
- 모니터 주소는 preview 제어, 메모, git/node-check 상태, 위험 변경 감지, 수정 지시 생성만 담당한다.

### 3.3 중요한 기술 전제

`8787` 대시보드가 `5500` 사이트의 DOM을 직접 읽거나 조작하려면 같은 출처 제약을 해결해야 한다. 따라서 구현 시에는 대시보드에서 raw 작업용 주소를 그냥 iframe으로 넣는 방식이 아니라, 다음 2계층 구조를 사용한다.

- raw 작업용 주소: 사람이 직접 보는 실제 사이트 주소
- instrumented preview 주소: `8787` 서버가 작업용 주소를 프록시하거나 래핑해서 preview 제어 스크립트와 overlay만 주입한 주소

즉, 사용자가 보는 canonical 작업 주소는 그대로 `5500`이고, 모니터 내부 iframe은 `8787` 서버가 제공하는 preview 전용 경로를 사용한다.

예시:

- 실제 작업용 주소: `http://127.0.0.1:5500/`
- 모니터 대시보드: `http://127.0.0.1:8787/`
- 모니터 내부 iframe 소스: `http://127.0.0.1:8787/preview?target=http%3A%2F%2F127.0.0.1%3A5500%2F`

이 구조를 쓰면 preview 내부에만 개발용 CSS, outline, panel label, temporary transform을 주입할 수 있고, 실제 사이트 파일은 수정하지 않아도 된다.

## 4. 작업용 주소와 모니터용 주소 차이

| 구분 | 작업용 주소 | 모니터/컨트롤 주소 |
| --- | --- | --- |
| 목적 | 실제 사이트 동작 확인 | 개발용 제어/모니터링 |
| 포트 예시 | `5500` | `8787` |
| 데이터 변경 | 기존 사이트 동작 그대로 | 실제 저장/삭제 금지 |
| 패널 조작 | 없음 | preview 전용 hide/show/outline/reorder |
| 메모 작성 | 없음 | 가능 |
| git/node 상태 | 없음 | 표시 |
| 위험 변경 경고 | 없음 | 표시 |
| 배포 기능 | 없음 | 금지 |

원칙:

- 모니터 주소는 작업용 주소를 대체하지 않는다.
- 모니터 주소는 코드를 직접 바꾸지 않는다.
- 모니터 주소는 “현재 보이는 구조를 안전하게 조립/분해해 보는 실험 공간”이다.

## 5. 태블릿 접속 방식

태블릿 접속은 PC 내부 IP 기준으로 통일한다.

- 작업용 주소: `http://PC내부IP:5500/`
- 모니터 주소: `http://PC내부IP:8787/`

시작 스크립트는 내부 IP를 자동 탐지해서 아래 정보를 터미널에 출력해야 한다.

- PC 로컬 주소
- 태블릿 접속 주소
- 현재 작업용 주소
- 현재 모니터 주소

태블릿 접속 관련 설계 원칙:

- `8787` 서버는 `0.0.0.0`으로 바인딩해서 같은 네트워크 기기에서 접속 가능해야 한다.
- 캐시 오염을 줄이기 위해 모니터 API 응답과 JSON 응답은 `Cache-Control: no-store`로 제공한다.
- 태블릿 UI는 세로/가로 전환을 고려하고, 조작 패널은 세로에서는 하단 스택, 가로에서는 우측 패널로 재배치한다.

## 6. 패널/레이어 컨트롤 개념

### 6.1 자동 수집 대상

패널 후보는 preview DOM에서 다음 규칙으로 자동 수집한다.

- `section`, `article`, `aside`, `header`, `footer`
- `.panel`, `.ops-panel`, `.detail-panel`, `.sidebar`, `.topbar`, `.ticker`
- `[data-panel]`, `[data-tab]`, `[data-role]`, `[data-section-shell]`, `[data-section-panel]`
- 고유 `id`를 가진 주요 레이아웃 노드

현재 프로젝트 기준으로 1차 seed 후보 예시는 다음과 같다.

- `#panel-main-match`
- `#panel-field-status`
- `#panel-upcoming`
- `#panel-schedule`
- `#panel-equipment`
- `#panel-ops-alert`
- `#panel-map`
- `#panel-archive`
- `#panel-broadcast`
- `#panel-news`
- `#ops-ticker`
- `.sidebar`
- `.topbar`
- `#view-schedule [data-section-shell="schedule"]`
- `#view-map [data-section-shell="stadiums"]`
- `#view-broadcast-news [data-section-shell="broadcast-schedule"]`

### 6.2 panelId 부여 규칙

panelId는 다음 우선순위로 결정한다.

1. 요소 `id`
2. `data-role`
3. `data-section-shell`
4. `data-section-panel`
5. 태그명 + class slug + 순번

예:

- `panel-main-match`
- `panel-field-status`
- `panel-upcoming`
- `panel-schedule`
- `panel-equipment`
- `panel-ops-alert`
- `sidebar`
- `topbar`
- `ops-ticker`

### 6.3 panel-map.json과의 관계

자동 수집 결과는 매번 새로 덮어쓰지 않고 merge 방식으로 `panel-map.json`에 반영한다.

- 신규 후보 발견 시 append
- 기존 panelId 재탐지 시 selector/confidence/notes만 merge
- 삭제 의심 패널도 즉시 제거하지 않고 `notes`에 상태 기록

### 6.4 preview 전용 오버레이

패널 제어는 preview iframe 내부에서만 동작하는 개발용 오버레이 레이어로 구현한다.

- 요소 outline 표시
- 패널명 라벨 부착
- hide/show용 임시 CSS 주입
- translate/scale 등 preview 전용 transform 적용

이 오버레이는 아래 원칙을 따른다.

- 실제 `styles.css`를 수정하지 않는다.
- 실제 DOM을 영구 변경하지 않는다.
- localStorage에 실제 운영용 키를 쓰지 않는다.
- 모든 변경은 monitor 서버 상태와 메모 파일에서만 관리한다.

## 7. 벗겨보기 모드

벗겨보기 모드는 현재 보이는 레이어를 상위부터 하나씩 숨기며, 화면이 어떤 순서로 쌓여 있는지 확인하는 기능이다.

제공할 버튼:

- `다음 레이어 숨김`
- `이전 레이어 복구`
- `전체 복구`
- `현재 숨김 상태 저장`

### 7.1 레이어 순서 계산

레이어 순서는 아래 정보를 종합해 계산한다.

- `position` 값
- `z-index`
- 화면 내 실제 bounding box
- visibility/display 상태
- DOM 순서
- 미리 정의한 overlay 우선순위

권장 우선순위:

1. modal/backdrop
2. fixed/sticky element
3. 명시적 높은 `z-index` 패널
4. 일반 dashboard panel
5. background/decorative layer

### 7.2 동작 원리

- 현재 viewport에서 visible한 후보만 대상으로 한다.
- 가장 위에 있는 후보 1개를 hidden 집합에 추가한다.
- hidden 집합은 preview 전용 스타일에서만 반영한다.
- 복구는 히스토리 스택에서 직전 숨김 대상만 되돌린다.

### 7.3 저장 방식

사용자가 “현재 숨김 상태 저장”을 누르면 `layout-control-state.json`에 다음 정보를 기록한다.

- page URL
- viewport preset
- hiddenPanels
- layerOrder snapshot
- saved mode = `peel`
- timestamp

## 8. 쌓아보기 모드

쌓아보기 모드는 주요 패널을 일단 숨긴 뒤 하나씩 다시 표시하며, 모바일 UI를 조립하듯 구조를 확인하는 기능이다.

제공할 버튼:

- `다음 패널 표시`
- `이전 패널 제거`
- `전체 표시`
- `현재 조립 상태 저장`

### 8.1 시작 상태

- 주요 패널 후보를 모두 수집한다.
- 기본 제외 대상은 `html`, `body`, 전체 앱 루트, 스크립트용 hidden stash처럼 조립 대상이 아닌 요소다.
- 현재 페이지 기준 핵심 패널만 assembly list에 넣는다.

### 8.2 표시 순서

기본 순서는 다음 3가지를 합쳐 결정한다.

- DOM 순서
- panel-map에 저장된 선호 순서
- 수동 지정 layerOrder

초기 구현에서는 DOM 순서를 기본으로 쓰고, 이후 `layout-control-state.json`의 `layerOrder`가 있으면 우선 적용한다.

### 8.3 저장 방식

“현재 조립 상태 저장” 시 다음을 기록한다.

- visiblePanels
- hiddenPanels
- layerOrder
- saved mode = `assemble`
- viewport preset
- timestamp

## 9. 메모 기능

메모 기능은 태블릿에서 preview 특정 위치를 터치하거나 클릭해 개발 지시를 남기는 용도다.

### 9.1 메모 작성 흐름

1. 사용자가 preview에서 지점을 터치한다.
2. 해당 좌표 기준 가장 가까운 panel 후보를 탐색한다.
3. 메모 입력 시트 또는 팝오버를 연다.
4. note type, note text, panelId, viewport 정보를 저장한다.
5. 메모는 삭제하지 않고 `resolved=true`로만 처리한다.

### 9.2 메모 타입

- `remove`
- `replace`
- `move`
- `resize`
- `hide`
- `add`
- `needs-check`
- `other`

UI 표시 문구는 한국어로 노출해도 되고, 저장 값은 영문 slug로 고정하는 편이 안전하다.

### 9.3 메모 저장 원칙

- 메모는 append-only 기본 정책을 따른다.
- 기존 메모를 지우지 않는다.
- 완료는 `resolved=true`, `resolvedAt`, `resolvedBy` 같은 메타데이터로 처리한다.
- preview 좌표는 viewport 기준 상대좌표와 절대 픽셀을 같이 저장할 수 있다.

### 9.4 실제 코드 반영과의 관계

메모는 곧바로 코드 수정으로 이어지지 않는다.

- 메모 작성
- 임시 preview 상태 저장
- 수정 지시서 생성
- 사람 검토
- 별도 Codex 구현 작업

이 순서를 강제해야 한다.

## 10. 저장 JSON 구조

세 파일 모두 monitor 서버가 파일 시스템에 저장하며, 브라우저 localStorage를 기준 데이터로 쓰지 않는다.

공통 원칙:

- 파일 응답은 `no-store`
- write 시 temp file + atomic rename 사용
- 배열 항목은 append, 객체는 keyed merge
- 이미 존재하는 항목을 함부로 삭제하지 않음

### 10.1 `tools/work-monitor/panel-notes.json`

권장 구조:

```json
{
  "version": 1,
  "notes": [
    {
      "id": "note-20260519-001",
      "createdAt": "2026-05-19T13:40:12.000Z",
      "viewportWidth": 390,
      "viewportHeight": 844,
      "pageUrl": "http://127.0.0.1:5500/",
      "x": 184,
      "y": 312,
      "panelId": "panel-schedule",
      "noteType": "hide",
      "noteText": "이 패널 모바일에서 숨김",
      "resolved": false
    }
  ]
}
```

추가 권장 필드:

- `resolvedAt`
- `resolvedBy`
- `viewportPreset`
- `pagePath`
- `anchorSelector`

### 10.2 `tools/work-monitor/layout-control-state.json`

권장 구조:

```json
{
  "version": 1,
  "states": {
    "http://127.0.0.1:5500/::390x844": {
      "viewportPreset": "390x844",
      "hiddenPanels": ["panel-equipment"],
      "visiblePanels": ["panel-main-match", "panel-schedule"],
      "movedPanels": {
        "panel-schedule": { "x": 0, "y": -20, "unit": "px" }
      },
      "resizedPanels": {
        "panel-main-match": { "width": "100%", "height": "420px", "scale": 1 }
      },
      "layerOrder": ["sidebar", "topbar", "panel-main-match", "panel-schedule"],
      "lastUpdatedAt": "2026-05-19T13:44:00.000Z"
    }
  },
  "history": []
}
```

merge 규칙:

- `hiddenPanels`, `visiblePanels`: unique merge
- `movedPanels`, `resizedPanels`: panelId 기준 upsert
- `layerOrder`: 최신 저장분 우선
- `history`: 저장 버튼 누를 때마다 append

### 10.3 `tools/work-monitor/panel-map.json`

권장 구조:

```json
{
  "version": 1,
  "panels": [
    {
      "panelId": "panel-main-match",
      "selector": "#panel-main-match",
      "label": "타임라인",
      "page": "/",
      "firstDetectedAt": "2026-05-19T13:30:00.000Z",
      "confidence": 0.98,
      "notes": ["main dashboard hero panel"]
    }
  ]
}
```

confidence 기준 예시:

- `1.0`: 고유 `id`와 명확한 title이 함께 있는 패널
- `0.8`: `data-role`, `data-section-shell`로 안정 식별 가능
- `0.5`: class 조합과 DOM 위치로만 추정

## 11. 안전장치

대시보드는 아래 항목을 경고 카드로 표시해야 한다.

- `AGENTS.md` 삭제 또는 누락
- `app.js` 대량 변경
- `styles.css` 대량 변경
- `legacy-schedule/app.js` 대량 변경
- Supabase 관련 파일 변경
- 저장/삭제 함수 관련 변경
- `.env` 또는 Vercel 설정 변경
- 운영 URL과 `origin/main` 불일치 가능성
- `git status`가 clean이 아닌 상태
- `node --check` 실패

### 11.1 위험 감지 기준

1차 구현 기준 권장 규칙:

- watch list 파일이 modified/deleted면 경고
- watch list 파일의 diff line 수가 일정 기준 초과면 고위험
- `supabase`, `storage`, `delete`, `remove`, `save`, `upload`, `vercel`, `.env` 관련 파일 경로가 바뀌면 경고
- 현재 브랜치가 `main`이 아니거나 `origin/main`과 diverged면 상태 표시

예시 watch list:

- `AGENTS.md`
- `app.js`
- `styles.css`
- `legacy-schedule/app.js`
- `legacy-schedule/bridge.js`
- `supabase-client.js`
- `supabase/**`
- `vercel.json`
- `.env`
- `.env.local`

### 11.2 node check 대상

- `node --check app.js`
- `node --check legacy-schedule/app.js`
- `node --check legacy-schedule/bridge.js` 존재 시

### 11.3 캐시/복원 안전장치

- monitor 서버 API는 모두 `no-store`
- 모니터 상태는 preview 사이트 localStorage에 쓰지 않음
- mock/seed 데이터는 기본 비활성
- resolved note는 숨길 수는 있어도 삭제하지 않음
- panel map 재탐지 시 예전 엔트리를 즉시 재생성하지 말고 merge with confidence로 처리

## 12. 구현 파일 계획

설계 기준 권장 파일 구조는 다음과 같다.

```text
docs/
  work-monitor-control-design.md

scripts/
  check-project-root.ps1
  start-work-monitor.ps1

tools/
  work-monitor/
    README.md
    server.js
    config.js
    preview-bridge.js
    state-store.js
    git-status.js
    risk-detector.js
    panel-detector.js
    report-generator.js
    public/
      index.html
      dashboard.js
      dashboard.css
    panel-notes.json
    layout-control-state.json
    panel-map.json
```

### 12.1 파일 책임

- `server.js`: Node HTTP 서버 엔트리
- `config.js`: 포트, 경로, 내부 IP, target URL 설정
- `preview-bridge.js`: preview 페이지에 주입되는 개발용 제어 스크립트
- `state-store.js`: JSON append/merge/atomic write
- `git-status.js`: `git status`, `git diff --stat`, `HEAD`, `origin/main`
- `risk-detector.js`: 위험 파일과 diff 기반 경고 계산
- `panel-detector.js`: DOM panel 후보 수집 규칙
- `report-generator.js`: 메모와 layout state를 수정 지시서로 내보내기
- `public/index.html`: 대시보드 프레임
- `public/dashboard.js`: iframe, controls, memo UI
- `public/dashboard.css`: tablet-friendly dashboard 스타일

### 12.2 최소 의존성 원칙

가능하면 1차 구현은 Node 내장 모듈만 사용한다.

- `http`
- `fs`
- `path`
- `os`
- `url`
- `child_process`

이유:

- 루트 프로젝트 의존성 오염 최소화
- 운영 코드와 분리
- 빠른 로컬 실행

### 12.3 실제 사이트 파일 수정 여부

원칙적으로 monitor 구현은 기존 `app.js`, `styles.css`, `legacy-schedule/app.js` 무수정이 목표다.

단, 동일 출처/preview 안정성 때문에 아주 작은 주입 훅이 필요하더라도 다음 조건을 모두 만족하기 전에는 넣지 않는다.

- 대시보드 프록시 방식만으로 해결 불가할 것
- 운영 동작 영향이 0에 가까울 것
- 기본값 disabled일 것
- 별도 구현 승인 후 진행할 것

## 13. 실행 명령

향후 구현 시 표준 실행 명령은 다음 하나로 통일한다.

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\start-work-monitor.ps1
```

이 스크립트는 다음을 수행해야 한다.

1. 프로젝트 루트 확인
2. PC 내부 IP 확인
3. work-monitor 서버 실행
4. PC 브라우저에서 `http://127.0.0.1:8787` 오픈
5. 터미널에 태블릿 접속 주소 출력

예시 출력:

```text
Work site:     http://127.0.0.1:5500/
Tablet work:   http://192.168.0.15:5500/
Monitor site:  http://127.0.0.1:8787/
Tablet monitor http://192.168.0.15:8787/
```

## 14. 단계별 구현 순서

### 1단계: 읽기 전용 모니터

범위:

- `git status`
- modified files
- `HEAD`, `origin/main`
- `node --check`
- local link / tablet link / production link 표시

완료 기준:

- 파일 쓰기 없이 대시보드만 열림
- 위험 변경 목록이 하단에 표시됨

### 2단계: iframe preview

범위:

- 작업용 주소 연결
- preview proxy 또는 wrapper 경로 도입
- viewport preset 버튼

지원 preset:

- `360 x 780`
- `390 x 844`
- `430 x 932`
- `768 x 900`
- `984 x 1092`
- `1024+ PC`

완료 기준:

- 태블릿에서 preset 전환 가능
- 현재 주소와 viewport 표시

### 3단계: 패널 outline

범위:

- panel 후보 자동 수집
- outline 표시
- 패널명 라벨 표시
- `panel-map.json` 초기 생성/merge

완료 기준:

- 주요 패널 후보가 목록에 보임
- preview에서 outline on/off 가능

### 4단계: hide/show 컨트롤

범위:

- preview 전용 숨김/표시
- actual CSS/JS 무수정
- hiddenPanels 저장

완료 기준:

- 패널 하나씩 토글 가능
- 새로고침 후 state 복원 가능

### 5단계: 벗겨보기/쌓아보기 모드

범위:

- 레이어 순서 계산
- peel mode
- assemble mode
- 상태 저장

완료 기준:

- `다음 레이어 숨김`, `이전 레이어 복구`, `전체 복구`
- `다음 패널 표시`, `이전 패널 제거`, `전체 표시`

### 6단계: 태블릿 메모

범위:

- 터치 좌표 메모
- note type 입력
- `panel-notes.json` append
- resolved 처리

완료 기준:

- 메모 생성/해결 가능
- 삭제 없이 이력 유지

### 7단계: Codex 반영용 리포트

범위:

- 현재 메모 기반 수정 지시서 생성
- layout state + note summary export
- 실제 코드 반영 전 검토 문안 생성

완료 기준:

- 사람이 읽을 수 있는 지시서 생성
- 자동 코드 수정은 하지 않음

## 15. 절대 하면 안 되는 것

- 운영 데이터 삭제 금지
- Supabase 저장/삭제 로직 수정 금지
- 실제 `app.js` 기능 리팩터링 금지
- 실제 `styles.css`를 컨트롤러 중심으로 대규모 변경 금지
- 패널 숨김 테스트를 실제 운영 코드 삭제로 처리 금지
- 태블릿에서 누른 명령이 즉시 실제 코드 삭제로 이어지게 만들기 금지
- 새 배포 금지
- Vercel production 배포 금지
- preview 상태를 운영 사이트 localStorage/cookie로 저장 금지
- mock/seed 복원으로 삭제된 데이터가 되살아나게 만들기 금지

## 16. 다음 구현 프롬프트 초안

다음 단계 구현 요청은 아래처럼 분리하는 것이 안전하다.

```text
이번에는 설계 문서를 기준으로 1단계와 2단계만 구현한다.

목표:
- scripts/start-work-monitor.ps1 추가
- tools/work-monitor/server.js 추가
- tools/work-monitor/public/index.html 추가
- tools/work-monitor/public/dashboard.js 추가
- tools/work-monitor/public/dashboard.css 추가
- tools/work-monitor/config.js 추가
- tools/work-monitor/git-status.js 추가
- tools/work-monitor/risk-detector.js 추가

범위:
- 읽기 전용 모니터
- git status / modified files / HEAD / origin/main 표시
- node --check 결과 표시
- 작업용 주소 / 태블릿 주소 / production 주소 표시
- iframe preview 연결
- viewport preset 연결

주의:
- app.js, styles.css, legacy-schedule/app.js는 수정하지 않는다.
- Supabase 로직, 저장/삭제 함수는 수정하지 않는다.
- panel hide/show, memo 저장은 아직 구현하지 않는다.
- work-monitor는 no-store 응답을 사용한다.
- 모니터 iframe은 raw 5500 주소가 아니라 8787 preview 래퍼 구조를 사용한다.

검증:
- start-work-monitor.ps1 실행 성공
- 127.0.0.1:8787 접속 성공
- 태블릿용 내부 IP 주소 출력
- git status와 node --check 결과 표시 확인
- 기존 운영 사이트 동작 파일이 수정되지 않았는지 git diff로 확인
```
