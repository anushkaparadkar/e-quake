import firebase from 'firebase'
import 'firebase/database'

// firebase init goes here
const config = {
  apiKey: 'AIzaSyDcKfwtlG1UdRLKrVXFbvlShXjuC9BrRkY',
  authDomain: 'petfeeder-iot.firebaseapp.com',
  databaseURL: 'https://petfeeder-iot.firebaseio.com',
  projectId: 'petfeeder-iot',
  storageBucket: 'petfeeder-iot.appspot.com',
  messagingSenderId: '979939535483'
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.database()

export { db }
