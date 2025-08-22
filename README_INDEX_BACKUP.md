Why this file exists

If `src/index.html` ever gets accidentally deleted during editing, this repository contains a safe backup at `src/index.html.bak` and a restore script at `scripts\restore_index.ps1` which will recreate `src/index.html` from the backup.

How to restore

PowerShell (Windows):

    cd <project-root>\scripts
    .\restore_index.ps1

Notes

- This is a local safeguard for development only. If you want a permanent, reliable history, commit files to Git or configure an automated backup process.
- If you prefer, I can add a git pre-commit hook that prevents accidental deletion of tracked files.
