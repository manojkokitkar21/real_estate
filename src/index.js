// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import SignInPage from './signInpage';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <SignInPage/>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();






// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import SignInPage from './signInpage';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//      <Routes>
//         <Route exact path="/" component={SignInPage} />
//         <Route path="/signUp" component={App} />
//         <Route path="/signIn" component={SignInPage} />
//       </Routes>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignInPage from './signInpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<SignInPage />} />
        <Route path="/signUp" element={<App />} />
        <Route path="/signIn" element={<SignInPage />} />

      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

