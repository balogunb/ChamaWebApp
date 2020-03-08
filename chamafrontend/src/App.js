import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './routes/SignIn.js'
import SignUp from './routes/SignUp.js'
function App() {
  return (
    <div>
        <SignIn />
        <SignUp />
    </div>
  );
}

export default App;
