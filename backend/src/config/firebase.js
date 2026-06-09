import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config({ path: "backend/.env" });

// Singleton pattern to ensure Firebase Admin is initialized only once
let firebaseAdminApp = null;

const initializeFirebaseAdmin = () => {
  // Return existing app if already initialized
  if (admin.apps.length > 0) {
    return admin.app();
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;

  // Validate required environment variables
  if (!projectId) {
    throw new Error(
      "FIREBASE_PROJECT_ID environment variable is required but not set"
    );
  }
  if (!clientEmail) {
    throw new Error(
      "FIREBASE_CLIENT_EMAIL environment variable is required but not set"
    );
  }
  if (!privateKey) {
    throw new Error(
      "FIREBASE_PRIVATE_KEY environment variable is required but not set"
    );
  }

  // Replace escaped newlines with actual newlines
  const formattedPrivateKey = privateKey.replace(/\\n/g, "\n");

  try {
    firebaseAdminApp = admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey: formattedPrivateKey,
      }),
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
