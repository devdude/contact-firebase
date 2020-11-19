const functions = require('firebase-functions');

exports.create = functions.https.onRequest(async (req, res) => {
  // Grab the name parameter.
  const name = req.query.name;
  // Push the new message into Cloud Firestore using the Firebase Admin SDK.
  // const writeResult = await admin.firestore().collection('messages').add({name: name});
  // Send back a message that we've succesfully written the message
  res.json({user: `User with name ${name} added.`});
});

exports.list = functions.https.onRequest(async (req, res) => {
  // Get all the users from Cloud Firestore using the Firebase Admin SDK.
  // const users = await admin.firestore().collection('messages').get({game: -1});
  // Send back a message that we've succesfully written the message
  // res.json({users: users});
  res.send('List of users here');
});