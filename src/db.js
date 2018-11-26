import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  projectId: 'counts-84e16'
})

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true
})

export default db
