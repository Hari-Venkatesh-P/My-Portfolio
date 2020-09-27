import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/landingpage';
import Contact from './components/contacts';
import Projects from './components/projects';
import Resume from './components/resume';
import './App.css';
function App() {
  return (
    <div>
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={LandingPage} />
        <Route path="/resume" component={Resume} />
        <Route path="/contacts" component={Contact} />
        <Route path="/projects" component={Projects} />
    </Switch>
</div>
  );
}

export default App;
