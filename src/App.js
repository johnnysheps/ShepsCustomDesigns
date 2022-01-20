import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';


const TShirtsPage = () => (
  <div>
    <h1>T-SHIRTS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/tshirts' component={TShirtsPage}/>
      </Switch>
    </div>
  );
}

export default App;
