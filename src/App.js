import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

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
          <Route path='/games' exact component={Catalog} />
          <Route path='/create' component={Create} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/games/:id' component={Details} />
          <Route path='/custom'>
            <h2>Custom Page</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </Route>

          <Route path='/logout' render={(props) => {
            console.log('Logged out!!!');
            console.log(props);

            return <Redirect to='/' />
          }} />
        </Switch>

      </main>

    </div>
  );
}

export default App;
