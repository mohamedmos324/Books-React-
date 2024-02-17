import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Allabout from "./Aboutus/Allabout";
import Allourbooks from "./Ourbooks/Allourbooks";
import Alllibrary from "./Library/Alllibrary";
import Contactus from "./Contactus/Contactus";
import Allcontact from "./Contactus/Allcontact";
const router = createBrowserRouter([
  {
    path: "/",
    element:  <App/> ,
  
  },
  {
    path: "aboutus",
    element: <Allabout/>,
  },
  {
    path: "ourbooks",
    element: <Allourbooks/>,
  },
  {
    path: "library",
    element: <Alllibrary/>,
  },
  {
    path: "contact_us",
    element: <Allcontact/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);




























// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(  <App />);
 



