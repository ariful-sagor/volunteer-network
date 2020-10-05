import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Event from './Components/Event/Event';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Resister/Register';
import List from './Components/List/List';
import AddEvent from './Components/AddEvent/AddEvent';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ListTask from './Components/Resister/ListTask'
import Admins from './Components/Admin/Admins';

export const UserContext= createContext();
function App() {
  const [loggedInUser, setLoggedInUser]= useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
          <Route path="/home">
            <Header />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/admin">
            <Admins />
          </Route>
          <PrivateRoute path="/register/:taskId">
            <Register />
          </PrivateRoute>
          <Route path="/listTask">
            <ListTask />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addEvent">
            <AddEvent />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route exact path="/">
            <Header />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
