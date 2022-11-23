import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyAk1FebJmFNX0sAZnCon7Jay1dXXK7A9WM',
  authDomain: 'fir-test-f1a2c.firebaseapp.com',
  projectId: 'fir-test-f1a2c',
  storageBucket: 'fir-test-f1a2c.appspot.com',
  messagingSenderId: '375170650040',
  appId: '1:375170650040:web:a4825168a21bae2b6d494d',
  measurementId: 'G-HVB21VYR0Y',
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
