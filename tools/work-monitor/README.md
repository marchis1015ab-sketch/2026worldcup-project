# Work Monitor

이 폴더는 WC26 운영 사이트 코드를 직접 수정하지 않고, 별도 로컬 주소 `8787`에서 preview, 패널 제어, 메모, git/node-check 상태를 볼 수 있게 하는 개발 보조 도구다.

설계 기준 문서는 [docs/work-monitor-control-design.md](C:\Users\march\OneDrive\Desktop\2026worldcup-project\docs\work-monitor-control-design.md)에 있다.

## 1. 목적

- 작업용 주소와 모니터 주소 분리
- 작업용 사이트를 iframe preview로 관찰
- 패널 outline, hide/show, 벗겨보기, 쌓아보기, 임시 이동/scale 실험
- 태블릿에서 메모 작성
- git 상태, node --check, 위험 변경 감지 확인

이 도구는 개발 보조용이다. 여기서 한 조작은 실제 `app.js`, `index.html`, `styles.css`, `legacy-schedule/app.js`, Supabase 로직을 직접 바꾸지 않는다.

## 2. 실행 명령

프로젝트 루트에서 실행:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\start-work-monitor.ps1
```

## 3. PC 접속 주소

실행 후 브라우저에서 기본적으로 아래 주소가 열린다.

```text
http://127.0.0.1:8787/
```

## 4. 태블릿 접속 주소 확인법

실행 스크립트가 PC 내부 IP 목록을 터미널에 출력한다. 같은 네트워크의 태블릿에서 아래 형식으로 접속하면 된다.

```text
http://PC내부IP:8787/
```

예:

```text
http://192.168.0.15:8787/
```

## 5. Live Server 5500 선행 조건

preview iframe은 `http://127.0.0.1:5500/` 를 `/preview/` 경로로 proxy 한다. 따라서 work-monitor를 쓰기 전에 먼저 작업용 로컬 서버를 `5500`에서 켜 두어야 한다.

`5500`이 꺼져 있으면 대시보드와 iframe에 `작업용 주소 5500이 열려 있지 않음` 경고가 표시된다.

## 6. 패널 outline / hide / show 사용법

1. 대시보드 오른쪽 패널 목록에서 대상을 선택한다.
2. `Outline ON/OFF` 버튼으로 preview의 패널 경계를 토글한다.
3. `선택 패널 hide/show` 로 해당 패널만 숨기거나 다시 표시한다.
4. `전체 표시`, `전체 숨김` 으로 현재 preview 상태를 빠르게 확인한다.

숨김과 표시 상태는 preview DOM과 `layout-control-state.json`에만 반영된다. 운영 CSS 파일은 바뀌지 않는다.

## 7. 벗겨보기 / 쌓아보기 사용법

- `다음 패널 숨김`: 현재 레이어 순서 기준으로 맨 위 패널을 하나 숨긴다.
- `이전 패널 복구`: 방금 숨긴 패널을 하나 복구한다.
- `하나씩 쌓기 시작`: 주요 패널을 모두 숨기고 조립 모드로 전환한다.
- `다음 패널 표시`: 조립 모드에서 패널을 하나씩 다시 보이게 한다.

이 상태도 preview 전용이며 `layout-control-state.json`에만 저장된다.

## 8. 메모 사용법

1. `메모 모드 ON` 버튼을 켠다.
2. preview iframe 안에서 패널을 눌러 위치를 선택한다.
3. 오른쪽 메모 입력 영역에서 타입과 텍스트를 적고 저장한다.
4. 저장된 메모는 `panel-notes.json`에 누적 저장된다.
5. 메모 목록에서 완료 처리하거나 DELETE API로 보관 상태로 전환할 수 있다.

메모는 실제 코드 수정이 아니라 “수정 지시”를 남기는 용도다.

## 8.5 런타임 상태 파일

아래 3개 파일은 로컬 런타임 상태 파일이다.

- `panel-notes.json`
- `layout-control-state.json`
- `panel-map.json`

이 파일들은 git에 올리지 않는다.

- 최초 실행 시 파일이 없으면 sample 파일 또는 기본값으로 자동 생성된다.
- 메모와 패널 숨김 상태는 각 작업 PC 로컬에만 남는다.
- 커밋에는 `*.sample.json` 과 `.gitignore` 만 포함하면 된다.

## 9. 실제 운영 코드에는 바로 반영되지 않음

이 도구에서 하는 동작은 모두 개발용 preview 상태와 JSON 파일에만 반영된다.

- preview outline
- preview hide/show
- preview 이동/scale
- 메모 저장

위 동작은 실제 운영 코드 삭제나 저장 데이터 변경으로 바로 이어지지 않는다.

## 10. 문제 발생 시 끄는 법

- 서버를 foreground로 실행했다면 터미널에서 `Ctrl+C`
- 브라우저만 닫고 싶으면 탭 또는 창만 닫기
- 포트 `8787`이 이미 사용 중이면 다른 프로세스를 종료하거나 `WORK_MONITOR_PORT` 환경변수를 지정해서 다시 실행
