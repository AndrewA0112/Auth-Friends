import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Login from './components/Login';
import FriendList from './components/FriendList';
import Friend from './components/Friend';
import AddFriend from './components/AddFriend';
import UpdateFriend from './components/UpdateFriend';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/friends' component={FriendList} />
      <PrivateRoute exact path='/friends/:id' component={Friend} />
      <PrivateRoute exact path='/friends/add' component={AddFriend} />
      <PrivateRoute exact path='/friends/:id/update' component={UpdateFriend} />
    </div>
  );
}

export default App;
