import firebase from 'firebase'

const config = {
   authDomain: 'localhost:8080',
   databaseURL: 'https://startupslam2016.firebaseio.com/'
}

firebase.initializeApp(config)
export const ref = firebase.database().ref()
