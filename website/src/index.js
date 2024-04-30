import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Error from './routes/Error';
import Weather from './routes/Weather'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './routes/Main';
import reportWebVitals from './reportWebVitals';
import Notfound from './routes/Notfound';
const router = createBrowserRouter([
{
  path:"/",
  element:<App/>,
  errorElement:<Error/>
},
{
  path:"search/:lat/:lon/:name",
  element:<Weather/>
},{
path:"/NOTFOUND",
element:<Notfound/>
}

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
