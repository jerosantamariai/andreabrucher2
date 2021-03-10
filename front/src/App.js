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
      <div className="row no-gutters g-0">
        <div className="col-md-2">
          <Navbar />
        </div>
        <div className="col-md-10">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default injectContext(App);
