import { useState } from 'react'

import Header from './components/Header.js';
import Home from './components/Home.js';
import Catalog from './components/Catalog.js';
import Create from './components/Create.js';
import Details from './components/Details.js';
import Edit from './components/Edit.js';
import Login from './components/Login.js';
import Register from './components/Register.js';

function App() {

  const [page, setPage] = useState('/home');

  const routes = {
    '/home': <Home />,
    '/games': <Catalog />,
    '/create': <Create />,
  }

  const navigationChangeHandler = (path) => {
    setPage(path);
  }

  return (
    <div id="box">

      <Header navigationChangeHandler={navigationChangeHandler} />

      <main id="main-content">
        {routes[page] || <h2>No Page Found!</h2>}
      </main>

    </div>
  );
}

export default App;
