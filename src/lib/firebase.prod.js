import Firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'



// import { seedDatabase } from '../seed';

// Dit is de code voor de Firebase connectie
const config = {
  apiKey: 'AIzaSyAsNy3ev4jhz0H3YtK0Iy1l8fn78NRRoFY',
  authDomain: 'netflix-5a233.firebaseapp.com',
  projectId: 'netflix-5a233',
  storageBucket: 'netflix-5a233.appspot.com',
  messagingSenderId: '1023941143062',
  appId: '1:1023941143062:web:bdd88360cfec1a5d3f6337',
}

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase }
