import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config({ path: "backend/.env" });

// Singleton pattern to ensure Firebase Admin is initialized only once
let firebaseAdminApp = null;

/**
 * Builds the service-account credential. Preferred path: a full service-account
 * JSON file (FIREBASE_SERVICE_ACCOUNT_PATH). Falls back to the individual
 * FIREBASE_* env vars if no file path is provided.
 */
const buildCredential = () => {
  const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;

  if (serviceAccountPath) {
    // Path is resolved relative to where `npm run api:dev` is launched (repo root).
    const absolutePath = resolve(process.cwd(), serviceAccountPath);
    let serviceAccount;
    try {
      serviceAccount = JSON.parse(readFileSync(absolutePath, "utf8"));
    } catch (error) {
      throw new Error(
        `Could not read Firebase service account file at "${absolutePath}": ${error.message}`
      );
    }
    return admin.credential.cert(serviceAccount);
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!projectId) {
    throw new Error("FIREBASE_PROJECT_ID environment variable is required but not set");
  }
  if (!clientEmail) {
    throw new Error("FIREBASE_CLIENT_EMAIL environment variable is required but not set");
  }
  if (!privateKey) {
    throw new Error("FIREBASE_PRIVATE_KEY environment variable is required but not set");
  }

  return admin.credential.cert({
    projectId,
    clientEmail,
    // Replace escaped newlines with actual newlines
    privateKey: privateKey.replace(/\\n/g, "\n"),
  });
};

const initializeFirebaseAdmin = () => {
  // Return existing app if already initialized
  if (admin.apps.length > 0) {
    return admin.app();
  }

  try {
    firebaseAdminApp = admin.initializeApp({
      credential: buildCredential(),
      databaseURL: process.env.FIREBASE_DATABASE_URL,
    });
  } catch (error) {
    // If already initialized (e.g., in tests), get existing instance
    if (error.code === "app/duplicate-app") {
      firebaseAdminApp = admin.app();
    } else {
      throw error;
    }
  }

  return firebaseAdminApp;
};

// Initialize Firebase Admin when this module is loaded
initializeFirebaseAdmin();

// Export Firestore database and utilities
export const getFirestoreDb = () => {
  if (!admin.apps.length) {
    throw new Error("Firebase Admin has not been initialized. Call initializeFirebaseAdmin() first.");
  }
  return admin.firestore();
};

export const firestoreDb = admin.firestore();
export const firestoreTimestamp = admin.firestore.FieldValue.serverTimestamp;

// Export for explicit initialization if needed
export const getFirebaseAdmin = () => admin;
export const initFirebase = initializeFirebaseAdmin;
