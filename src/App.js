import { useState } from 'react';

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

  const [page, setPage] = useState('/home');

  const routes = {
    '/home': <Home />,
    '/games': <Catalog />,
    '/create': <Create />,
    '/login': <Login />,
    '/register': <Register />,
    '/details': <Details />
  }

  const navigationChangeHandler = (path) => {
    setPage(path);
  }

  return (
    <div id="box">

      <Header navigationChangeHandler={navigationChangeHandler} />

      <main id="main-content">
        {routes[page] || <ErrorPage>Page Not Found!</ErrorPage>}
      </main>  

    </div>
  );
}

export default App;
