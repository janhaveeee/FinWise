// backend/firebaseConfig.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); // 👈 use admin.firestore(), not getFirestore()

module.exports = { admin, db }; // ✅ export both


