import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCvQbPPjUncLsArv75zPmUGpcPx-3Ncm2g",
  authDomain: "company-website-f3fdc.firebaseapp.com",
  projectId: "company-website-f3fdc",
  databaseURL: "https://company-website-f3fdc-default-rtdb.firebaseio.com/",
  storageBucket: "company-website-f3fdc.firebasestorage.app",
  messagingSenderId: "969258085441",
  appId: "1:969258085441:web:61e093026bd8a35f07eac0",
  measurementId: "G-RKJKBTPBW2",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);

// Analytics is browser-only and optional on unsupported environments.
if (typeof window !== "undefined") {
  void isSupported().then((supported) => {
    if (supported) {
      getAnalytics(firebaseApp);
    }
  });
}
