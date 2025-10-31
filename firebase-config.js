// Firebase configuration
// Replace these values with your Firebase project credentials
// Get them from Firebase Console > Project Settings > General > Your apps
//
// SECURITY NOTE: These credentials are meant to be public (client-side).
// Firebase API keys are NOT secrets - they're restricted by domain/hostname.
// Real security is enforced by:
// 1. Firestore Security Rules (data access control)
// 2. Firebase Authentication (user identity)
// 3. Domain restrictions in Google Cloud Console
// To add extra protection, enable Firebase App Check in the console.

const firebaseConfig = {
  apiKey: "AIzaSyBB3ZtqZMN_MK_wJ-7OnGtpNDn3iMtNyE8",
  authDomain: "ol33flasher.firebaseapp.com",
  projectId: "ol33flasher",
  storageBucket: "ol33flasher.firebasestorage.app",
  messagingSenderId: "43427630139",
  appId: "1:43427630139:web:2c3ffa92868a174102201e",
  measurementId: "G-5Q31J58JC7"
};

// Initialize Firebase (modular SDK)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Authentication
export const auth = getAuth(app);

// Initialize Analytics (async, only in browser)
export async function initAnalytics() {
  if (typeof window === 'undefined') return null;
  try {
    const { getAnalytics } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js');
    return getAnalytics(app);
  } catch (error) {
    console.warn('Analytics initialization failed:', error);
    return null;
  }
}

export default app;
