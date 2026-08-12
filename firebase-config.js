// ============================================================
// Configuração do Firebase — usada por login.html e cardapio.html
//
// Cole aqui as chaves do SEU projeto (uma única vez):
// Firebase Console → Configurações do projeto → Geral →
// Seus apps → SDK setup and configuration
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAR0j2Jcdz683B5u_HgY3KVJO67GYJntU4",
  authDomain: "cardapio-546ad.firebaseapp.com",
  databaseURL: "https://cardapio-546ad-default-rtdb.firebaseio.com",
  projectId: "cardapio-546ad",
  storageBucket: "cardapio-546ad.firebasestorage.app",
  messagingSenderId: "382078085106",
  appId: "1:382078085106:web:8d90e776976c53d662ad6b",
  measurementId: "G-G08BR3EFXG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
