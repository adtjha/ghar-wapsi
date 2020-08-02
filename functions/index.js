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
    if(onVerifyPayment()){
        res.send("<h1>add the user and his details, to the userList, add the user's UID to waitingList, run the allotGroups() function</h1>");
    } else {
        res.send('Invalid');
    }
});

const onVerifyPayment = () => {
    console.log("Steps before adding,");
    console.log("- verify if the user's transaction id is already present in the paymentRecieved, if yes proceed, else return error");
    console.log("- remove the user's transaction id from paymentRecieved, and add to paymentVerified,");
    console.log("- generate UID for this user and attach it to the user's details.");
    return true;
}




/**

Rules to Follow :
  - First add the user to the respective list,
  - Then remove the user from the any other respective list.
  
Functions Does :
----------------

  addEntry(){

    Steps before adding, 
      - verify if the user's transaction id is already present in the paymentRecieved, if yes proceed, else return error
      - remove the user's transaction id from paymentRecieved, and add to paymentVerified,
      - generate UID for this user and attach it to the user's details.

    Steps to add the User,
      - add the user and his details, to the userList,
      - add the user's UID to waitingList,

    if length of waitingList > 21, run the allotGroups() function, else return,

  }

  allotGroups(){

    Check the waitingList count, if more than 20 users are present proceed, else return,

    Steps to Allot Group,
      - extract the first 20 users and create a group out of those 20 users,
      - remove the above 20 users from waiting list,
      - add the group to the groupsAlloted database,

    if length of waitingList > 21, run this function again, else return,

  }


Functions Returns :
-------------------

 waitingListData() {
    returns data containing waiting number, total waiting list to the user.
 }
 
 userDetails() {
    returns details of the user and booking made by the user.
 }
 
 userGroupDetails() {
    returns details of the group, the user is alloted to.
 }
 
 
Database :
-----------
  userDetails : [ Details of Users stored, which can be fetched at any given point.],
  ----------------------------------------------------------------------------------
    example:
    [
      {
        '_userUID_': {
          name: '',
          age: '',
          phone_no.: '',
          email_id: '',
          aadhar_id: '',
          with: ['_userUID_','...','...'],
          transaction_id: '',
          transaction_amt: '',
          group_UID: ''
        }
      },
      {...},
      {...}
    ]
  
  

  waitListedVerified : 
    [ users that are currently waitlisted, each new user after being verified is stored in this list. After being alloted a group, the user is removed from this list ],
    -----------------------------------
      example: 
      [
        '_userUID_','...','...'
      ] 
  
  groupsAlloted : 
    [ list of groups, to which users have been alloted. Each group object contains users id, that have been alloted to the group. ]
    -----------------------------------
    example:
    [
      '_groupUID_':{
        group_members: ['_userUID_','...','...'],
        group_journey: {
          from: '',
          to: ''
        }
      }
    ]
                  
  paymentRecieved : 
    [ list of all the transaction ID's, that we have recieved, and their particular source is yet to be verified. Once verified, it is removed from this list, and added to the 'paymentRecievedVerified' list with the user details. ]
    ----------------------------------
    example:
    [
      {
        transaction_id: '',
        transaction_amt: '',
        paid_for: ''
      }
    ]
                    
  paymentVerified : 
    [ list of verified payment sources. Each object contains the details of the transaction and the user responsible for doing that particular transaction. ]
    -----------------------------------
    example:
    [
      {
        '_userUID_': '_transactionID_'
        
      }
    ]
  
**/