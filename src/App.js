import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import {GlobalProvider} from '.context/GlobalProvider'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{maxWidth:"30rem", margin: "4rem auto"}}>
      <GlobalProvider>  
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/edit/:id" component={EditUser}/>
            <Route path="/add" component={AddUser}/>
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
