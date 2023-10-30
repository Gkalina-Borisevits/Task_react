import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import RandomActivity from './components/randomActivity/RandomActivity';
import CityPage from './components/cityPage/CityPage';
import Counter from './components/counter/Counter';
import Sandwich from './components/sandwich/Sandwich';
import CatCard from './components/catCard/CatCard';
import BtnTest from './components/btnTest/BtnTest';
import DogCard from './components/dogCard/DogCard';
import Layout from './layouts/Layout';
import Error from './components/error/Error';
import Parent from './components/parent/Parent';

const App = (): JSX.Element => (
  <Routes>

<Route path="/" element={<Layout/>}>
      <Route index element={<RandomActivity />} />
      <Route path="counter" element={<Counter />} />
      <Route path="cityPage" element={<CityPage />} />
      <Route path="sandwich" element={<Sandwich />} />
      <Route path="btnTest" element={<BtnTest />} />
      <Route path="catCard" element={<CatCard />} />
      <Route path="dogCard" element={<DogCard />} />
      <Route path="parent" element={<Parent/>} />
      {/* <Route path="form" element={<Form/>} /> */}
      <Route path="*" element={<Error/>} />

    </Route>
  </Routes>
);


export default App;
