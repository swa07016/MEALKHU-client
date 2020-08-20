import React from 'react';
import LandingPage from './pages/LandingPage';
import MenuPage from './pages/MenuPage';
import NotFound from './pages/NotFound';
import PricePage from './pages/PricePage';
import RandomPage from './pages/RandomPage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/menu" component={MenuPage}/>
          <Route exact path="/price" component={PricePage}/>
          <Route exact path="/random" component={RandomPage}/>
          <Route component={NotFound} />
        </Switch>
      </>
    </Router>
  );
}

export default App;