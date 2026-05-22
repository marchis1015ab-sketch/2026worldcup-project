# Safe Work Start

## Operating rule

- Use exactly one approved working folder on this PC.
- For this PC, the approved folder is `C:\Users\march\OneDrive\Desktop\2026worldcup-project`.
- Do not work from copied folders such as `wc26-new-suit`, `New project`, or other duplicate roots.
- Do not copy files from another folder and overwrite the operating project.

## Start command

Run this command before every operating change:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\start-safe-work.ps1
```

If the script fails, do not start work.

## What the script checks

- approved working folder
- `.git` directory
- project marker files such as `package.json`, `index.html`, `app.js`, and `styles.css`
- approved `origin` repository
- current branch is `main`
- clean `git status --short`
- latest `origin/main` fetched and matched

## Dirty worktree policy

- Do not start from a dirty worktree.
- Untracked files also block work start.
- `backups/`, `screenshots/`, and `playwright-*.png` should be reported as cleanup-needed items, not auto-deleted.
- Do not auto-run `stash`, `reset --hard`, or `git clean -fd`.

## End of work

After finishing work:

1. review changes
2. commit
3. push
4. confirm Vercel Production Ready
5. confirm the deployed commit SHA
6. confirm `git status` is clean again

When asking someone else to verify production, use a cache-bust query:

```text
https://2026worldcup-project.vercel.app/?v=safe-start-YYYYMMDD-HHMM
```
