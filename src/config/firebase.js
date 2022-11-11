import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAz5O5bruCIwfL3PRqQuFypOh9_-mzTWh4',
  authDomain: 'app-chat-ff9ed.firebaseapp.com',
  projectId: 'app-chat-ff9ed',
  storageBucket: 'app-chat-ff9ed.appspot.com',
  messagingSenderId: '399190376245',
  appId: '1:399190376245:web:1d86691dc3d219b122167c'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
