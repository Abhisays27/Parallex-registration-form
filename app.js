const firebaseConfig = {
  apiKey: "AIzaSyCAl7M4B963aAylTBrC94iRJyjbUHj5Rfc",
  authDomain: "spec-registration.firebaseapp.com",
  databaseURL: "https://spec-registration-default-rtdb.firebaseio.com",
  projectId: "spec-registration",
  storageBucket: "spec-registration.appspot.com",
  messagingSenderId: "17453991846",
  appId: "1:17453991846:web:c9d2a665baf4a314afb167",
  measurementId: "G-N3L03BNRG1"
};



      
      firebase.initializeApp(firebaseConfig);

// Connect to the Firebase database
const db = firebase.firestore();

// Function to handle form submission
function registerUser(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gender').value;

  // Add user data to Firebase
  db.collection('users').add({
    name: name,
    email: email,
    gender: gender
  })
  .then((docRef) => {
    console.log('User added with ID: ', docRef.id);
    // Reset form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('gender').value = '';
  })
  .catch((error) => {
    console.error('Error adding user: ', error);
  });
}

// Add event listener to form submit button
document.querySelector('form').addEventListener('submit', registerUser);

