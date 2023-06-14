
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <div className="white">
//         <h1 className="logoText">Logo</h1>
//         <p className="subText">Create New Account</p>
//         <input type="text" placeholder="User ID" className="inputField" />
//         <input type="password" placeholder="Password" className="inputField2" />
//         <input type="password" placeholder="Confirm Password" className="inputField3" />
//         <button className="signInButton">Sign Up</button>
//       </div>
//       <a className="signIn1" href="/signIn">Sign In</a>
//       </header>
//     </div>
//   );
// }

// export default App;




// import './App.css';
// import { Link } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="white">
//           <h1 className="logoText">Logo</h1>
//           <p className="subText">Create New Account</p>
//           <input type="text" placeholder="User ID" className="inputField" />
//           <input type="password" placeholder="Password" className="inputField2" />
//           <input type="password" placeholder="Confirm Password" className="inputField3" />
//           <button className="signInButton">Sign Up</button>
//         </div>
//         <Link className="signIn1" to="/signIn">Sign In</Link>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import './App.css';
import { Link, Routes,Route } from 'react-router-dom';
import SignInPage from './signInpage';
import homeSvg from './Image/home.svg'

function App() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [redirectToSignIn, setRedirectToSignIn] = useState(false);
  

  const handleSignUp = () => {
    // Create an object with the user data
    const userData = {
      email: email,
      password: password,
      confirmpassword: confirmpassword
    };

    // Send a POST request to the signup endpoint
    fetch('http://localhost:8002/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log(data); // You can perform actions based on the response
        if (data.message === 'success') {
          // Redirect to the sign-in page
          setRedirectToSignIn(true);
        }
        
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
       
      });
      setemail("");
      setPassword("");
      setConfirmpassword("");
  };
  
  if (redirectToSignIn) {
    return <SignInPage />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="white">
          {/* <h1 className="logoText">Logo</h1> */}
          <img  src={homeSvg} alt="Logo" className="logoImage" /> 
          <p className="subText">Create New Account</p>
          <input
            type="text"
            placeholder="User ID"
            className="inputField"
            value={email}
            onChange={e => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="inputField2"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="inputField3"
            value={confirmpassword}
            onChange={e => setConfirmpassword(e.target.value)}
          />
          <button className="signInButton" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
        <Link className="signIn1" to="/signIn">
          Sign In
        </Link>
        
      </header>
    </div>
  );
}

export default App;

