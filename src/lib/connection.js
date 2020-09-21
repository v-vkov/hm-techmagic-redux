import firebase from 'firebase/app';
import 'firebase/database';
import CONFIG from '../config/index';

const firebaseConfig = {
    apiKey: CONFIG.API_KEY,
    authDomain: CONFIG.AUTH_DOMAIN,
    databaseURL: CONFIG.DATABASE_URL,
    projectId: CONFIG.PROJECT_ID,
    storageBucket: CONFIG.STORAGE_BUCKET,
    appId: CONFIG.APP_ID
  };

  firebase.initializeApp(firebaseConfig)
  
  const db = firebase.database();
  

export default db;