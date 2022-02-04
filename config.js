import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCLQeI6HPl9NL6XRgp8PHUXQzw3t-SH5KM",
  authDomain: "voting-app-f62c8.firebaseapp.com",
  databaseURL: "https://voting-app-f62c8-default-rtdb.firebaseio.com",
  projectId: "voting-app-f62c8",
  storageBucket: "voting-app-f62c8.appspot.com",
  messagingSenderId: "551314382571",
  appId: "1:551314382571:web:ab6d971fdd9fe23a4128ae",
  measurementId: "G-NF267TQE8N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
