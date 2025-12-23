// Firebase client initialization for Trovo
// SDKs
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Config provided by user
const firebaseConfig = {
  apiKey: 'AIzaSyDQwYetArY9ymAhvvTMRlQNlRl66WMA5A0',
  authDomain: 'forensiq-bc370.firebaseapp.com',
  projectId: 'forensiq-bc370',
  storageBucket: 'forensiq-bc370.firebasestorage.app',
  messagingSenderId: '803165638717',
  appId: '1:803165638717:web:9a90a62b6379cb5c05da54',
  measurementId: 'G-XV91BQ5VC4',
}

// Initialize
export const app = initializeApp(firebaseConfig)

// Firestore
export const db = getFirestore(app)

// Analytics (loaded only in browser)
export let analytics: any | undefined
if (typeof window !== 'undefined') {
  import('firebase/analytics')
    .then(({ getAnalytics, isSupported }) =>
      isSupported().then((ok: boolean) => {
        if (ok) analytics = getAnalytics(app)
      })
    )
    .catch(() => {
      // ignore if analytics not available/supported
    })
}
