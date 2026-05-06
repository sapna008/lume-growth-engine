#!/bin/bash
# Firebase Secret Removal - Exact Git Commands
# Copy and run these commands in order

# =============================================================================
# BEFORE YOU START
# =============================================================================
# 1. Make sure you completed backend/.env.local setup
# 2. Run from project root: c:/Apeiros/frontend-repos/lume-growth-engine
# 3. Run one command at a time, verify each succeeds
# =============================================================================

# Step 1: Remove the JSON file from git tracking
echo "Step 1: Removing secret file from git..."
git rm --cached src/assets/company-website-f3fdc-firebase-adminsdk-fbsvc-00168a7d5c.json

# Step 2: Verify what changed
echo ""
echo "Step 2: Verify changes (should show one file removed)..."
git status

# Step 3: Check git diff to confirm
echo ""
echo "Step 3: Checking diff..."
git diff --cached

# Step 4: Commit the removal
echo ""
echo "Step 4: Committing the removal..."
git commit -m "security: remove Firebase service account JSON from git tracking"

# Step 5: Verify commit
echo ""
echo "Step 5: Verify removal was committed..."
git log --oneline -1

# Step 6: Check final status
echo ""
echo "Step 6: Final status check..."
git status

# Step 7: Push changes
echo ""
echo "Step 7: Ready to push!"
echo "Run: git push"
echo ""
echo "If you get an error about unmatched objects:"
echo "  Run: git push --force-with-lease origin your-branch-name"

# =============================================================================
# OPTIONAL: Delete local JSON file backup (if you want)
# =============================================================================
# Uncomment if you want to delete the local copy:
# rm src/assets/company-website-f3fdc-firebase-adminsdk-fbsvc-00168a7d5c.json
# git add src/assets/
# git commit -m "Delete Firebase service account backup"

# =============================================================================
# VERIFICATION
# =============================================================================
echo ""
echo "========== VERIFICATION =========="
echo ""
echo "JSON file should now appear as untracked (NOT in staging area):"
git status --short | grep company-website-f3fdc
echo ""
echo "If nothing appears above, the file has been properly removed from git."
echo "It may still exist locally (untracked), which is fine for backup."
echo ""
echo "✅ Ready to push!"
