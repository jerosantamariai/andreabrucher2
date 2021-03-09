import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import injectContext from './store/appContext';
import Home from './views/home';
import NotFound from './views/notfound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="col-md-9 offset-3">
        <div className="row">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default injectContext(App);
