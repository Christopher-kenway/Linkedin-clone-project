import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from './store'; // Import your Redux store
import './App.css';
import Feed from './components/Body/Feed';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Sidebar from './components/Body/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Widgets from './components/Body/Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // use is logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    
      <div className="app">
        <Header /> 

        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        )}
      </div>
   
  );
}

export default App;
