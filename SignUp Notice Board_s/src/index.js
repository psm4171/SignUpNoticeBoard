import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'; 
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"; // 부트스트랩 css import 

ReactDOM.render (

    <HashRouter>
      <Header/>
      <Body/>
      <Footer/> 
    </HashRouter>,
    document.querySelector("#container")
  
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
