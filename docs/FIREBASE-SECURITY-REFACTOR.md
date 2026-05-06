# Firebase Security Refactor - Complete Documentation

## What Happened

You accidentally committed a Firebase Admin SDK service account JSON file to GitHub:
```
src/assets/company-website-f3fdc-firebase-adminsdk-fbsvc-00168a7d5c.json
```

This file contains:
- **Private signing key** - allows anyone to impersonate your Firebase service account
- **Service account email** - identifies the account
- **Project ID** - identifies your Firebase project
- **Full admin access** - anyone with this file can read/write all your Firestore data

GitHub's security system detected this and blocked the push to protect you.

---

## Firebase Client SDK vs Firebase Admin SDK

### Firebase Client SDK (Safe to expose)
- **Location**: Frontend / Browser bundle
- **Current file**: `src/lib/firebase.ts`
- **What it contains**: Public API keys and configuration
- **What it can do**: 
  - User authentication (sign up, login)
  - Read/write data **based on security rules** (limited access)
  - Use Storage, Messaging, Analytics
- **Security**: Limited by Firestore security rules - users can only access what you allow
- **Example**: Users can only modify their own documents
- **Currently in your project**: ✅ **SAFE - all your client SDK code is secure**

### Firebase Admin SDK (Never expose)
- **Location**: Backend server ONLY
- **What it contains**: Private service account credentials
- **What it can do**: 
  - Bypass all Firestore security rules
  - Full admin access to database, users, auth
  - Generate custom tokens
  - Delete data, modify settings
- **Security**: Requires environment variables (never committed)
- **Risk if exposed**: Complete compromise of your Firebase project
- **Now in your project**: ✅ **REFACTORED - safely stored in environment variables**

---

## Changes Made

### 1. **Refactored Firebase Admin Initialization**
**File**: `backend/src/config/firebase.js`

**What changed:**
- ✅ Removed file-based credential loading (`FIREBASE_SERVICE_ACCOUNT_PATH`)
- ✅ Now ONLY accepts environment variables
- ✅ Proper singleton pattern (prevents duplicate initialization)
- ✅ Server-side only (no client bundle exposure)
- ✅ Validation of required environment variables at startup
- ✅ Better error handling

**Before (Vulnerable)**:
```javascript
// Could load from file path - dangerous!
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
const serviceAccount = JSON.parse(fs.readFileSync(absolutePath, "utf-8"));
```

**After (Secure)**:
```javascript
// Only from environment variables
const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY;
// Validates all are set before initializing
```

### 2. **Backend App Setup**
**File**: `backend/src/app.js`

**What changed:**
- ✅ Import Firebase config first (ensures initialization on startup)
- ✅ Server fails if credentials are missing
- ✅ Firebase Admin is ready before routes load

### 3. **Updated .gitignore**
**File**: `.gitignore`

**What changed:**
- ✅ Added explicit rules for Firebase service account files
- ✅ Pattern: `*-firebase-adminsdk-*.json`
- ✅ Also excludes `.env.local` files (already had `.env` but now explicit)
- ✅ Excludes `.key`, `.pem`, `.p12` files
- ✅ Excludes `secrets/` directory

### 4. **Environment Configuration**
**Files**: `backend/.env.example`, `backend/.env.local.template`

**What changed:**
- ✅ Removed `FIREBASE_SERVICE_ACCOUNT_PATH` (no longer used)
- ✅ Added clear documentation
- ✅ Template shows exactly how to extract values from JSON
- ✅ Added helpful comments about security

---

## How to Complete the Setup

### Step 1: Create .env.local with your credentials

Copy the template:
```bash
cp backend/.env.local.template backend/.env.local
```

Edit `backend/.env.local` and add your Firebase service account credentials:

```env
PORT=4000

CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_key
API_SECRET=your_cloudinary_secret

# Get these from your Firebase service account JSON file
FIREBASE_PROJECT_ID=company-website-f3fdc
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@company-website-f3fdc.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSj...PASTE_YOUR_FULL_KEY_HERE...-----END PRIVATE KEY-----\n
FIREBASE_DATABASE_URL=https://company-website-f3fdc-default-rtdb.firebaseio.com
```

### Step 2: How to extract values from your service account JSON

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: "company-website-f3fdc"
3. Go to **Project Settings** → **Service Accounts** tab
4. Click "Generate new private key" (or use existing)
5. A JSON file downloads - open it and copy:
   - `project_id` → `FIREBASE_PROJECT_ID`
   - `client_email` → `FIREBASE_CLIENT_EMAIL`
   - `private_key` → `FIREBASE_PRIVATE_KEY` (keep the literal `\n` characters)
   - Database URL stays the same

### Step 3: Verify your setup

```bash
# Terminal in project root

# Start backend
npm run api:dev

# If you see this, Firebase initialized successfully:
# ✅ Content Management API running on port 4000
```

If you see an error like:
```
Error: FIREBASE_PROJECT_ID environment variable is required but not set
```

This means `.env.local` isn't being read. Check:
- File is named `backend/.env.local` (not `.env` or other name)
- File is in the `backend/` folder
- Values are not empty

---

## How Content Service Works (No changes needed)

Your existing backend code **automatically works** with this setup:

```javascript
// backend/src/services/contentService.js
import { firestoreDb, firestoreTimestamp } from "../config/firebase.js";

// Firebase is already initialized and ready to use
const heroRef = firestoreDb.collection(CONTENT_COLLECTION).doc(HERO_DOC_ID);
const snapshot = await heroRef.get(); // ✅ Works as before
```

---

## Removal from Git History

To safely remove the committed JSON file from your local branch:

### OPTION 1: Remove from current branch only (recommended for safety)
```bash
# Remove from git tracking but keep local file (for backup)
git rm --cached src/assets/company-website-f3fdc-firebase-adminsdk-fbsvc-00168a7d5c.json

# Commit this removal
git commit -m "Remove Firebase service account JSON from git tracking"

# (Optional) Delete the local file if you don't need it
# rm src/assets/company-website-f3fdc-firebase-adminsdk-fbsvc-00168a7d5c.json

# Now you can push safely
git push
```

### OPTION 2: Remove AND amend last commit (if you just committed it)
```bash
# Remove from git
git rm --cached src/assets/company-website-f3fdc-firebase-adminsdk-fbsvc-00168a7d5c.json

# Add to gitignore if not there already
echo "src/assets/*-firebase-adminsdk-*.json" >> .gitignore

# Amend the previous commit
git commit --amend --no-edit

# Force push (use with caution - only if not pushed yet or on feature branch)
git push --force-with-lease origin your-branch-name
```

### OPTION 3: Complete history removal (if already pushed to main)
```bash
# If pushed to main branch and this is serious, contact GitHub support
# They can perform history scrubbing
# After which, you'd need to:
git fetch
git reset --hard origin/main
```

---

## What's Still Secure

✅ **Frontend Firebase Setup** (`src/lib/firebase.ts`):
- Public API keys only
- No credentials exposed
- Safe to commit
- Limited by Firestore security rules

✅ **Authentication** (`src/context/AuthContext.jsx`):
- Uses client SDK
- Users can only authenticate
- Limited to their own data by security rules

---

## What's Now Secure

✅ **Backend Firebase Admin** (New):
- Credentials in `.env.local` only
- File is in `.gitignore`
- Singleton pattern prevents conflicts
- Environment validation at startup
- Server-side only

---

## Prevention (Going Forward)

1. **`.gitignore` is updated** - JSON files won't be tracked
2. **Commit messages** - Always check git status before committing
3. **Environment variables** - Secrets go in `.env.local`, never committed
4. **Code review** - Look for hardcoded credentials or file paths
5. **Pre-commit hooks** (Optional but recommended):

```bash
# Install husky if not already
npm install husky --save-dev
npx husky install

# Create a pre-commit hook
cat > .husky/pre-commit << 'EOF'
#!/bin/sh
# Prevent committing .env files
if git diff --cached --name-only | grep -E "\.env|\.json.*admin|secret" | grep -v ".env.example" | grep -v ".env.local.template"; then
  echo "❌ ERROR: Attempting to commit sensitive files!"
  echo "Check .gitignore and remove sensitive files from staging"
  exit 1
fi
EOF

chmod +x .husky/pre-commit
```

---

## Architecture Summary

### Frontend (Vite React + TypeScript)
```
src/
  lib/firebase.ts          ← Public client config (SAFE to commit)
  firebase.js              ← Auth client instance (SAFE)
  context/AuthContext.jsx  ← Client-side auth (SAFE)
  pages/admin/             ← Admin UI calling backend APIs
```

### Backend (Node.js Express)
```
backend/
  src/
    config/firebase.js          ← Admin SDK (SECRET - env vars only)
    app.js                       ← Imports firebase.js first
    services/contentService.js   ← Uses Firestore via Admin SDK
    routes/contentRoutes.js      ← API endpoints
  .env.local                      ← Your secrets (NEVER commit)
  .env.local.template             ← Template for setup
  .env.example                    ← Public configuration template
```

### Data Flow
```
Browser (Client SDK)
  ↓ (Limited by security rules)
Firebase
  ↓
Backend (Admin SDK)
  ↓ (Full admin access)
Firestore Database
```

---

## Testing

After setup, verify everything works:

```bash
# 1. Start backend
npm run api:dev

# 2. In another terminal, test the health endpoint
curl http://localhost:4000/api/health
# Should return: {"success": true, "message": "API is running"}

# 3. Test content endpoint (if you have data)
curl http://localhost:4000/api/content
# Should return your hero content from Firestore
```

---

## Troubleshooting

**Error: "FIREBASE_PROJECT_ID environment variable is required but not set"**
- ✅ Check `backend/.env.local` exists and has values
- ✅ Check you're running from project root: `npm run api:dev`
- ✅ Restart the dev server after changing `.env.local`

**Error: "Failed to parse private key"**
- ✅ Ensure `\n` characters are literal (from JSON file) not escaped
- ✅ Check for extra quotes around the private key value
- ✅ Example: `FIREBASE_PRIVATE_KEY=-----BEGIN...` (no quotes needed)

**Error: "Cannot read property 'firestore' of undefined"**
- ✅ Firebase config is imported but not initialized
- ✅ Verify `backend/src/app.js` imports `./config/firebase.js` first
- ✅ Check environment variables are set

**Frontend still works but backend doesn't respond**
- ✅ Make sure backend is running: `npm run api:dev` (in separate terminal)
- ✅ Check port 4000 is available
- ✅ Check CORS is configured (it is by default)

---

## Questions?

This setup follows Firebase best practices:
- [Firebase Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- [Express + Firebase](https://firebase.google.com/docs/hosting/express)

All your existing functionality remains unchanged - only the security has improved! 🔒
