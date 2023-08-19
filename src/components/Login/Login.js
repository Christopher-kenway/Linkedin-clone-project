import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const dispatch = useDispatch();

  const loginToApp = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(userAuth => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL,
        }))
      })
      .catch(error => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    };

    auth.createUserWithEmailAndPassword(email, password)
      .then(userAuth => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: profilePic,
          }))
        })
      }).catch(error => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png"
        alt="linkin logo"
      />

      <form>
        <h2>Sign in</h2>
        <h3>Click on join now after filling the form</h3>
        <input 
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Full name (required if registering)"
        />
         <input
          type="text"
          value={profilePic}
          onChange={e => setProfilePic(e.target.value)}
          placeholder="Profile picture URL (optional)"
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
       <span className='login__forgot'> <a className="login__forgotpassword" href='#'>Forgot Password?</a> </span>
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <p>
       New to Linkedin? {" "}
        <span className="login__register" onClick={register}>Join now</span>
      </p>
    </div>
  );
}

export default Login