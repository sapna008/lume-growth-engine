# Firebase Security Refactor - Quick Start Guide

## ⚠️ What Happened

Your Firebase Admin SDK service account JSON was committed:
```
src/assets/company-website-f3fdc-firebase-adminsdk-fbsvc-00168a7d5c.json
```

This file contains secrets that give full admin access to your Firebase project. GitHub blocked the push.

---

## ✅ What's Fixed

All code has been refactored to:
- ✅ Never commit secrets
- ✅ Load credentials from environment variables
- ✅ Use proper singleton pattern (no duplicate initialization)
- ✅ Keep Firebase Admin SDK server-side only
- ✅ Updated `.gitignore` to prevent future commits

---

## 🚀 Next Steps (3 Steps to Complete)

### Step 1: Set Up Your Environment Variables

```bash
# Copy the template
cp backend/.env.local.template backend/.env.local

# Edit backend/.env.local with your Firebase credentials
# Get values from Firebase Console > Project Settings > Service Accounts
```

**Edit `backend/.env.local` and fill in:**
```env
FIREBASE_PROJECT_ID=company-website-f3fdc
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@company-website-f3fdc.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYOUR_FULL_PRIVATE_KEY\n-----END PRIVATE KEY-----\n
FIREBASE_DATABASE_URL=https://company-website-f3fdc-default-rtdb.firebaseio.com
```

### Step 2: Remove Secret from Git Tracking

```bash
# Remove from git tracking (keeps local copy as backup)
git rm --cached src/assets/company-website-f3fdc-firebase-adminsdk-fbsvc-00168a7d5c.json

# If the file is already in your commit history, amend it:
git commit --amend --no-edit

# Verify the file won't be tracked going forward
git status

# You should see it listed as untracked (not in staging)
```

### Step 3: Push Your Changes

```bash
# If you haven't pushed yet (recommended):
git push

# If you already pushed and amended commit (use with caution - feature branch only):
git push --force-with-lease origin your-branch-name
```

---

## ✅ Verify Setup Works

```bash
# Start the backend
npm run api:dev

# Should output: Content Management API running on port 4000
# If you see an error about missing env variables, re-check Step 1
```

---

## 📝 Files Changed

| File | Change |
|------|--------|
| `backend/src/config/firebase.js` | ✅ Refactored to use env vars only |
| `backend/src/app.js` | ✅ Import Firebase config first |
| `backend/.env.example` | ✅ Updated with new structure |
| `backend/.env.local.template` | ✨ NEW - Template for your secrets |
| `.gitignore` | ✅ Added rules for Firebase JSON files |
| `docs/FIREBASE-SECURITY-REFACTOR.md` | ✨ NEW - Complete security documentation |

---

## 🔒 What This Means

**Before**: Service account credentials were in committed files (DANGEROUS)
**After**: Service account credentials in local `.env.local` (SAFE)

**Before**: Could accidentally commit secrets
**After**: `.gitignore` prevents Firebase JSON files from being tracked

**Before**: Unclear how to initialize Firebase Admin safely
**After**: Secure singleton pattern in clean config file

---

## ❌ Do NOT

- ❌ Don't commit `.env.local` file
- ❌ Don't put service account JSON in your repository
- ❌ Don't share `FIREBASE_PRIVATE_KEY` value in chat/messages
- ❌ Don't hardcode credentials in JavaScript files

---

## ✅ Do

- ✅ Use `.env.local` for local development
- ✅ Set environment variables on your server/hosting platform
- ✅ Keep `.env.local` in `.gitignore`
- ✅ Rotate your Firebase service account keys if you shared them publicly

---

## 📖 Detailed Documentation

For complete explanation of:
- Why this happened
- Firebase Client SDK vs Admin SDK differences
- Architecture overview
- Troubleshooting

See: [`docs/FIREBASE-SECURITY-REFACTOR.md`](./FIREBASE-SECURITY-REFACTOR.md)

---

## 🆘 Troubleshooting

**Error: "FIREBASE_PROJECT_ID environment variable is required"**
```bash
# Check your .env.local exists and has values
cat backend/.env.local

# Restart the dev server
npm run api:dev
```

**Can't find your service account credentials**
1. Go to Firebase Console: https://console.firebase.google.com
2. Select project: "company-website-f3fdc"
3. Go to ⚙️ Project Settings → Service Accounts
4. Click "Generate new private key" or download existing
5. Copy the JSON values to `backend/.env.local`

**Still having issues?**
See the Troubleshooting section in [`docs/FIREBASE-SECURITY-REFACTOR.md`](./FIREBASE-SECURITY-REFACTOR.md)

---

## 🎯 Deployment (When Ready)

For production deployment, set environment variables through your hosting platform:
- **Vercel**: Environment Variables in project settings
- **Heroku**: Config Vars in app settings
- **AWS**: Environment variables in Lambda / App Runner
- **Firebase Hosting**: Not recommended for Admin SDK (use Cloud Functions instead)

Never commit `.env.local` to any environment.

---

## Status Summary

| Item | Status |
|------|--------|
| Firebase Admin refactored | ✅ |
| Environment setup documented | ✅ |
| .gitignore updated | ✅ |
| No client-side Admin SDK | ✅ |
| Secrets from git | ⏳ Manual git commands below |

**Your turn**: Run the 3 steps above to complete the setup.
