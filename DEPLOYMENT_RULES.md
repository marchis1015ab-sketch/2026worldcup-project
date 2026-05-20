# Deployment Rules

Production URL: https://2026worldcup-project.vercel.app/

Before any production deploy, run:

```powershell
cd "C:\Users\Jnote\Desktop\2026worldcup-project"
powershell -ExecutionPolicy Bypass -File .\scripts\predeploy-guard.ps1
```

Only deploy when the guard prints:

```text
OK: Safe to deploy this exact origin/main commit.
```

Then deploy:

```powershell
npx vercel deploy --prod
```

Hard rules:

1. Deploy only from `C:\Users\Jnote\Desktop\2026worldcup-project` or `C:\Users\march\OneDrive\Desktop\2026worldcup-project`.
2. Deploy only from branch `main`.
3. Deploy only when `HEAD` and `origin/main` are the same SHA.
4. Deploy only with a clean working tree.
5. Do not deploy from backup folders, old folders, or renamed experiments.
6. Do not run `vercel deploy --prod` from a folder that has not passed `scripts/predeploy-guard.ps1`.
7. If production looks old, verify `app.js` and `styles.css` from the production URL with a cache-busting query string before assuming GitHub lost work.

Reason for the guard:

On 2026-05-21, GitHub had the latest 05:11 commit, but a later manual production deployment at 05:23 appears to have overwritten the public Vercel alias from a stale local folder. The guard prevents that exact failure mode.
