const functions = require('firebase-functions');

exports.info = functions.https.onRequest(async (req, res) => {
  // Grab the name parameter.
  const gameId = req.query.gameId;
  // Push the new message into Cloud Firestore using the Firebase Admin SDK.
  // const game = await admin.firestore().collection('messages').get({gameId: gameID});
  // Send back a message that we've succesfully written the message
  res.json({game: `Game ID ${gameId} details:`});
});

exports.list = functions.https.onRequest(async (req, res) => {
  // Get all the users from Cloud Firestore using the Firebase Admin SDK.
  // const games = await admin.firestore().collection('messages').get({game: -1});
  // Send back a message that we've succesfully written the message
  // res.json({games: games});
  res.send('List of games here');
});