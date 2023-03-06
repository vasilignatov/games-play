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

  const navigationChangeHandler = (path) => {
    setPage(path);
  }

  const router = (path) => {
    const result = path.split('/');
    
    const rootPath = result[1];
    const argument = result[2];

    console.log(argument);

    const routes = {
      'home': <Home />,
      'games': <Catalog navigationChangeHandler={navigationChangeHandler} />,
      'create': <Create />,
      'login': <Login />,
      'register': <Register />,
      'details': <Details id={argument}/>
    }

    return routes[rootPath];
  }




  return (
    <div id="box">

      <Header navigationChangeHandler={navigationChangeHandler} />

      <main id="main-content">
        {router(page) || <ErrorPage>Page Not Found!</ErrorPage>}
      </main>

    </div>
  );
}

export default App;
