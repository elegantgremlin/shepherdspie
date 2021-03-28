import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/routes/Home';
import NotFound from './components/errors/NotFound';
import Toolbar from './components/layout/Toolbar';
import LoginRoute from './components/routes/LoginRoute';
import Content from './components/layout/Content';

const App = () => (
  <Router>
    <Toolbar />
    <Content>
      <Switch>
        <Route exact path="/about" component={Home} />
        <Route exact path="/users" component={Home} />
        <Route exact path="/login" component={LoginRoute} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Content>
  </Router>
);

export default App;
