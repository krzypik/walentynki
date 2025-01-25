import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// 🔥 Wpisz tu swoją konfigurację Firebase! 🔥
const firebaseConfig = {
  apiKey: "AIzaSyA97H5k2wuLQDGAvCfxoAixoyMSj64WMGk",
  authDomain: "walentynki-263a1.firebaseapp.com",
  projectId: "walentynki-263a1",
  storageBucket: "walentynki-263a1.firebasestorage.app",
  messagingSenderId: "645747898176",
  appId: "1:645747898176:web:5ab5526d47431c50ee2ca5"
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funkcja do zapisywania wyborów użytkownika
window.zapiszWybor = async (wybor) => {
  try {
    await addDoc(collection(db, "wybory"), {
      wybor: wybor,
      data: new Date()
    });
    console.log("Zapisano wybór:", wybor);
  } catch (e) {
    console.error("Błąd zapisu:", e);
  }
};
