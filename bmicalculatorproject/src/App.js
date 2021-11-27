import React from "react";
import {BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Bmi from './pages/Bmi';
import Header from './components/Header';
import About from'./pages/About';
import Calculations from'./pages/Calculations';

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path='/' component = {Bmi} exact />
      <Route path='/about' component = {About} />
      <Route path='/calculations' component = {Calculations} />
    </Switch>
    </>
  );
}

export default App;
