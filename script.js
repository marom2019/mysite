// **הדבק כאן את ה‑config שלך מ‑Firebase**
const firebaseConfig = {
  apiKey: "API_KEY_HERE",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID_HERE"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signIn() {
  const email = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if(email === "" || password === "") {
    alert("נא למלא אימייל וסיסמה");
    return;
  }
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("נכנסת בהצלחה! \nשלום " + email);
    })
    .catch((error) => {
      alert("שגיאה: " + error.message);
    });
}

function register() {
  const email = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if(email === "" || password === "") {
    alert("נא למלא אימייל וסיסמה");
    return;
  }
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("נרשמת בהצלחה! \nשלום " + email);
    })
    .catch((error) => {
      alert("שגיאה: " + error.message);
    });
}
