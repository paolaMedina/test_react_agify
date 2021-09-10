import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { NavbarApp } from '../components/ui/NavbarApp';
import { About } from '../components/about/About';
import { Search } from '../components/search/Search';

export default function AppRouter() {
  return (
    <Router>
      <div>
        <NavbarApp />

        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    </Router>
  );
}
