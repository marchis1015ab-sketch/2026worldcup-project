# 2026-05-21 Deployment And Storage Incident

## Short Answer

GitHub did not lose the 05:11 work. The 05:11 commit exists on `origin/main`, but the public Vercel production URL was later overwritten by another production deployment made at 05:23 from a stale or non-GitHub-matched local state.

## Evidence

- Latest GitHub commit on `origin/main`: `149aaaaff3e51ac4bed7329538f035b0ab636505`
- Commit title: `Add desktop timeline date memos`
- Commit time: `2026-05-21 05:11:45 +0900`
- Changed files in that commit: `app.js`, `styles.css`
- The commit contains the desktop date memo implementation, including `dateMemo`, `openTimelineDateMemoModal`, and the visible text `날짜 메모`.

Vercel deployment history showed this order:

| Time (KST) | Deployment | Finding |
| --- | --- | --- |
| 05:11:59 | `2026worldcup-project-6t3ves0t8...` | Production deployment with the `git-main` alias. This matches the normal GitHub/main deployment pattern. |
| 05:23:57 | `2026worldcup-project-mjaa6xauh...` | Later production deployment with the public production aliases, but without the `git-main` alias. This strongly indicates a manual CLI production deploy, not the expected GitHub main deployment. |
| 07:02:12 | `2026worldcup-project-pjkl1r5ym...` | Company PC redeploy after pulling exact `origin/main`. This restored the public production URL. |

Before the 07:02 redeploy, the public production `app.js` did not contain the 05:11 date memo code. After the redeploy:

- `https://2026worldcup-project.vercel.app/app.js?verify=final-audit-149aaaa`
- Length: `700519`
- `dateMemo`: present
- `openTimelineDateMemoModal`: present

The current public production URL is:

https://2026worldcup-project.vercel.app/

## Root Cause

The most likely root cause is not that GitHub failed to save. GitHub saved the 05:11 commit correctly.

The public Vercel alias was later pointed at a different production deployment created at 05:23. Because that deployment did not have the `git-main` alias and was created after the correct 05:11 deployment, it appears to have been a manual Vercel CLI deploy from a stale local folder or stale local checkout.

That explains the confusing symptom:

1. GitHub had the latest 05:11 commit.
2. Vercel briefly had or could have had the correct 05:11 deployment.
3. A later 05:23 production deploy overwrote the public URL.
4. The company PC opened the public production URL and saw old code.

## What Was Fixed

On the company PC:

1. The local repository was aligned with `origin/main`.
2. `HEAD` and `origin/main` were confirmed as the same SHA: `149aaaaff3e51ac4bed7329538f035b0ab636505`.
3. Production was redeployed from that exact commit.
4. The public URL was verified by checking the deployed `app.js` and `styles.css` directly.

## Sidebar Menu Work

The sidebar/menu-button work is present in Git history and is included in the current latest commit chain.

Relevant commits:

- `4162dcd Align sidebar stadium panel and Korean team names`
- `95060c5 Restore selected desktop sidebar and stadium layout fixes`

Current production `styles.css` contains the desktop sidebar rule:

```css
body:has(#view-dashboard.is-active:not([hidden])) .sidebar .side-nav
```

It also contains the comment:

```css
Let the desktop side menu sit directly under the logo
```

So the sidebar work was not lost from GitHub. If the visual still does not match what was seen at home, the likely causes are:

1. The home browser had local-only state or cached assets.
2. The home Codex modified a different folder before the final commit.
3. The remembered design came from an older renewal branch, not current `main`.

## Supabase And Missing Saved Information

The storage issue is separate from the Vercel deploy issue.

Supabase is reachable. Latest observed shared state writes include:

- `worldcup-guide-personal-timeline-shared-v1`: `2026-05-20T22:17:22.065+00:00`
- `worldcup-guide-personal-timeline-details-v1`: `2026-05-20T22:17:21.653+00:00`
- `worldcup-guide-news-programming-v1`: `2026-05-20T22:14:19.511+00:00`
- `worldcup-guide-timeline-assignments-v2`: `2026-05-20T22:03:08.422+00:00`

But the new main screen has local-only storage keys:

- `wc26_new_suit_timeline_blocks_v1`
- `wc26_new_suit_ops_memo_pad_v1`

Those are written directly to browser `localStorage` in `app.js`. They are not currently synchronized to Supabase. That means entries typed into those new-screen areas on the home PC can be visible at home, survive a page refresh at home, and still not appear on the company PC.

This is not a Vercel failure. It is a storage-design gap: those particular data areas are local browser data, not shared server data.

## Prevention

A deployment guard was added:

```powershell
.\scripts\predeploy-guard.ps1
```

It blocks production deployment unless:

- the current folder is an approved project root,
- the branch is `main`,
- `HEAD` equals `origin/main`,
- the working tree is clean,
- JavaScript syntax checks pass.

The production deploy rule is now:

```powershell
cd "C:\Users\Jnote\Desktop\2026worldcup-project"
powershell -ExecutionPolicy Bypass -File .\scripts\predeploy-guard.ps1
npx vercel deploy --prod
```

For storage prevention:

1. Treat GitHub/Vercel code deployment and Supabase/browser data storage as separate systems.
2. Do not assume localStorage data is shared between PCs.
3. Any feature that must appear on home and company PCs must use Supabase or `shared_state`.
4. The new main timeline/date memo and operation memo features need a follow-up sync implementation if they are intended to be shared data.
