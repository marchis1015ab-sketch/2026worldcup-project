# Deployment Rules

배포 전 필수 확인:

1. 현재 경로가 `C:\Users\Jnote\Desktop\2026worldcup-project`인지 확인한다.
2. `scripts/check-project-root.ps1`를 먼저 실행한다.
3. `git status`를 확인한다.
4. 의도하지 않은 파일 변경이 있으면 배포하지 않는다.
5. AGENTS.md, backups, 실험 파일은 커밋에 포함하지 않는다.
6. `node --check app.js`를 통과해야 한다.
7. `legacy-schedule/app.js`가 있으면 `node --check legacy-schedule/app.js`를 통과해야 한다.
8. `legacy-schedule/bridge.js`가 있으면 `node --check legacy-schedule/bridge.js`를 통과해야 한다.
9. Live Server에서 장비 / 개인장비 / 조별리그 A조 / MAP / 방송편성 / 월드컵뉴스 / 3위순위를 확인한다.
10. Vercel Production 주소 `https://2026worldcup-project.vercel.app/`가 유지되는지 확인한다.
11. 새 Vercel 프로젝트를 만들지 않는다.
12. Production 확인 전 추가 수정하지 않는다.
