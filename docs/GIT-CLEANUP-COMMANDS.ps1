# Firebase Secret Removal - Git Commands for Windows PowerShell
# Copy each command and run one at a time

# Make sure you're in the project root:
# cd C:\Apeiros\frontend-repos\lume-growth-engine

# ============================================================================
# STEP 1: Remove JSON file from git tracking
# ============================================================================
Write-Host "Removing secret file from git..." -ForegroundColor Green
git rm --cached src/assets/company-website-f3fdc-firebase-adminsdk-fbsvc-00168a7d5c.json

# ============================================================================
# STEP 2: Verify the change
# ============================================================================
Write-Host "`nVerifying changes..." -ForegroundColor Green
git status

# Should show:
# Changes to be committed:
#   deleted:    src/assets/company-website-f3fdc-firebase-adminsdk-fbsvc-00168a7d5c.json

# ============================================================================
# STEP 3: Commit the removal
# ============================================================================
Write-Host "`nCommitting the removal..." -ForegroundColor Green
git commit -m "security: remove Firebase service account JSON from git tracking"

# ============================================================================
# STEP 4: Verify commit
# ============================================================================
Write-Host "`nVerifying commit..." -ForegroundColor Green
git log --oneline -1

# ============================================================================
# STEP 5: Final status check
# ============================================================================
Write-Host "`nFinal status..." -ForegroundColor Green
git status

# Should show:
# On branch your-branch-name
# nothing to commit, working tree clean
# 
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#         src/assets/company-website-f3fdc-firebase-adminsdk-fbsvc-00168a7d5c.json

# ============================================================================
# STEP 6: Push to GitHub
# ============================================================================
Write-Host "`nReady to push! Run one of these:" -ForegroundColor Yellow
Write-Host "
# If this is a feature branch (recommended):
git push

# If you already pushed and need to force (CAREFUL - feature branches only):
git push --force-with-lease origin your-branch-name
" -ForegroundColor Cyan

# ============================================================================
# OPTIONAL: Verify no credentials leak
# ============================================================================
Write-Host "`nVerifying no private keys in git history..." -ForegroundColor Green
git log --all --source --full-history -- src/assets/company-website-f3fdc-firebase-adminsdk-fbsvc-00168a7d5c.json

# If this shows commits, the file IS in history
# Contact GitHub if this was already pushed to main
