import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cart from './Cart';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Container from './components/Container';
import Header from './components/Header';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvZC7fxAoDpBdaGKKcWWxRXdGDeo3V0pI",
  authDomain: "cart-app-c746d.firebaseapp.com",
  databaseURL: "https://cart-app-c746d-default-rtdb.firebaseio.com",
  projectId: "cart-app-c746d",
  storageBucket: "cart-app-c746d.appspot.com",
  messagingSenderId: "987312839196",
  appId: "1:987312839196:web:1654c55aac407f2a1f1dd9",
  measurementId: "G-10Q8QBRNKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <Container classList={['container-fluid', 'bg-primary']}>
        <Header />
      </Container>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
