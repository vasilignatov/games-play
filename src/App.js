import React from 'react';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header.js';
import Home from './components/Home.js';
import Catalog from './components/Catalog.js';
import Create from './components/Create.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Details from './components/Details.js';
import Edit from './components/Edit.js';
import ErrorPage from './components/404.js';

function App() {
  return (
    <div id="box">

      <Header />

      <main id="main-content">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/games' component={Catalog} />
          <Route path='/create' component={Create} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>

      </main>

    </div>
  );
}

export default App;
