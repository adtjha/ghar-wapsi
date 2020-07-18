const functions = require('firebase-functions');

 // Create and Deploy Your First Cloud Functions
 // https://firebase.google.com/docs/functions/write-firebase-functions

 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

exports.yeah = functions.https.onRequest((request, response) => {
    response.send("Hell Yeah !");
});


exports.AddEntry = functions.https.onRequest((req, res) => {
    var id = req.body.id;
    if(onVerify(id)){
        res.send('Add entry to Database, source has been verified, also run few other Functions.');
    } else {
        res.send('Invalid');
    }
});

onVerify(id){
    return true;
}