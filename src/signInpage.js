
// import './signInpage.css';

// function SignInPage() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <div className="whiteBox">
//         <h1 className="logoText">Logo</h1>
//         <p className="subText">Enter your credentials to access your account</p>
//         <input type="text" placeholder="User ID" className="inputField" />
//         <input type="password" placeholder="Password" className="inputField2" />
        
//         <button className="signInButton">Sign In</button>
//         <a className="signIn" href="/signIn">Sign Up</a>
//       </div>
//       <p className="signInn">Don't have an account?<a  href="/signIn"> Sign Up</a></p>
//       </header>
//     </div>
//   );
// }

// export default SignInPage;



// import './signInpage.css';
// import { Link } from 'react-router-dom';

// function SignInPage() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="whiteBox">
//           <h1 className="logoText">Logo</h1>
//           <p className="subText">Enter your credentials to access your account</p>
//           <input type="text" placeholder="User ID" className="inputField" />
//           <input type="password" placeholder="Password" className="inputField2" />
//           <button className="signInButton">Sign In</button>
//           <Link className="signIn" to="/signUp">Sign Up</Link>
//         </div>
//         <p className="signInn">
//           Don't have an account?
//           <Link to="/signUp"> Sign Up</Link>
//         </p>
//       </header>
//     </div>
//   );
// }

// export default SignInPage;

// import './signInpage.css';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import homeSvg from './Image/home.svg'

// function SignInPage() {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: '',
//   });

//   const handleSignIn = async () => {
//     try {
//       const response = await axios.post('http://localhost:8002/signin', credentials);
//       // Handle the response
//       console.log(response.data);
//     } catch (error) {
//       // Handle error
//       console.error(error);
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="whiteBox">
//           {/* <h1 className="logoText">Logo</h1> */}
//           <img  src={homeSvg} alt="Logo" className="logoImage2" /> 
//           <p className="subText">Enter your credentials to access your account</p>
//           <input
//             type="text"
//             placeholder="User ID"
//             className="inputField"
//             value={credentials.email}
//             onChange={(e) =>
//               setCredentials((prevCredentials) => ({
//                 ...prevCredentials,
//                 email: e.target.value,
//               }))
//             }
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="inputField2"
//             value={credentials.password}
//             onChange={(e) =>
//               setCredentials((prevCredentials) => ({
//                 ...prevCredentials,
//                 password: e.target.value,
//               }))
//             }
//           />
//           <button className="signInButton" onClick={handleSignIn}>
//             Sign In
//           </button>
//           <Link className="signIn" to="/signUp">
//             Sign Up
//           </Link>
//         </div>
//         <p className="signInn">
//           Don't have an account?
//           <Link to="/signUp"> Sign Up</Link>
//         </p>
//       </header>
//     </div>
//   );
// }

// export default SignInPage;



// import './signInpage.css';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import homeSvg from './Image/home.svg';

// function SignInPage() {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: '',
//   });

//   const handleSignIn = async () => {
//     try {
//       const response = await fetch('http://localhost:8002/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });
//       console.log(response)
//       if (response.status===200) {
//         const data = await response.json();
//         // Handle the response data
//         console.log(data);
//       } else {
//         throw new Error('Sign in failed');
//       }
//     } catch (error) {
//       // Handle network or other errors
//       console.error(error);
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="whiteBox">
//           <img src={homeSvg} alt="Logo" className="logoImage2" />
//           <p className="subText">Enter your credentials to access your account</p>
//           <input
//             type="text"
//             placeholder="User ID"
//             className="inputField"
//             value={credentials.email}
//             onChange={(e) =>
//               setCredentials((prevCredentials) => ({
//                 ...prevCredentials,
//                 email: e.target.value,
//               }))
//             }
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="inputField2"
//             value={credentials.password}
//             onChange={(e) =>
//               setCredentials((prevCredentials) => ({
//                 ...prevCredentials,
//                 password: e.target.value,
//               }))
//             }
//           />
//           <button className="signInButton" onClick={handleSignIn}>
//             Sign In
//           </button>
//           <Link className="signIn" to="/signUp">
//             Sign Up
//           </Link>
//         </div>
//         <p className="signInn">
//           Don't have an account?
//           <Link to="/signUp"> Sign Up</Link>
//         </p>
//       </header>
//     </div>
//   );
// }

// export default SignInPage;


import './signInpage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignInPage() {
  const [email, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Create the payload object with user credentials
    const payload = {
      email: email,
      password: password
    };

    // Make an HTTP POST request to save user data to the database
    fetch('http://localhost:8002/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the API
      console.log('Response from server:', data);
      // Do any necessary actions after saving the data
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle the error
    });

    setUserId('');
    setPassword('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="whiteBox">
          <h1 className="logoText">Logo</h1>
          <p className="subText">Enter your credentials to access your account</p>
          <input
            type="text"
            placeholder="User ID"
            className="inputField"
            value={email}
            onChange={event => setUserId(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="inputField2"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <button className="signInButton" onClick={handleSignIn}>Sign In</button>
          <Link className="signIn" to="/signUp">Sign Up</Link>
        </div>
        <p className="signInn">
          Don't have an account?
          <Link to="/signUp"> Sign Up</Link>
        </p>
      </header>
    </div>
  );
}

export default SignInPage;


