// app.js

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Function to check if the user is logged in
auth.onAuthStateChanged((user) => {
    const accountSection = document.getElementById("account-section");

    if (user) {
        // User is logged in, show the account name
        accountSection.innerHTML = `<p>Welcome, ${user.email}</p>`;
    } else {
        // User is not logged in, show the login button
        accountSection.innerHTML = `<button class="login-btn" onclick="location.href='https://woodpeckerotic-games.github.io/club-squares/login'">Login</button>`;
    }
});
