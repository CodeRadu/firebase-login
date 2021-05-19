import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  
}
if(!firebaseConfig.apiKey)console.error('Api key not found. Please paste firebase config in plugins/firebase.js in the firebaseConfig constant')
let app=null
if(!firebase.apps.length){
  app=firebase.initializeApp(firebaseConfig)
}

export default firebase