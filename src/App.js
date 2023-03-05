import Header from './components/Header.js';
import Home from './components/Home.js';
import Catalog from './components/Catalog.js';
import Create from './components/Create.js';
import Details from './components/Details.js';
import Edit from './components/Edit.js';
import Login from './components/Login.js';
import Register from './components/Register.js';

function App() {

  const routes = {
    '/home': Home,
    '/games': Catalog,
    '/create': Create,
  }

  return (
    <div id="box">


      <Header />

      <main id="main-content">
        <Home />
      </main>

    </div>
  );
}

export default App;
