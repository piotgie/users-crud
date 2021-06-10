import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div style={{ maxWidth: '30rem', margin: '4rem auto' }}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
            <AddUser />
            <EditUser />
          </Switch>
        </Router>
      </div>
    </GlobalProvider>


  );
}

export default App;
