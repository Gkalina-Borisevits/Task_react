import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import CityPage from './components/cityPage/CityPage';
// import Counter from './components/counter/Counter';
// import Sandwich from './components/sandwich/Sandwich';
// import BtnTest from './components/btnTest/BtnTest';
// import DogCard from './components/dogCard/DogCard';
// import CatCard from './components/catCard/CatCard';
// import RandomActivity from './components/randomActivity/RandomActivity';
// import Header from './components/header/Header';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  //<React.StrictMode>
  <BrowserRouter>
    <App />
    
  </BrowserRouter>
  //</React.StrictMode>
);

reportWebVitals();
