import React from 'react';
import LandingPage from './pages/LandingPage';
import MenuPage from './pages/MenuPage';
import NotFound from './pages/NotFound';
import PricePage from './pages/PricePage';
import RandomPage from './pages/RandomPage';
import AboutPage from './pages/AboutPage';
import FeedbackPage from './pages/FeedbackPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/price" component={PricePage} />
          <Route exact path="/random" component={RandomPage} />
          <Route exact path="/feedback/:name" component={FeedbackPage} />
          <Route component={NotFound} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
