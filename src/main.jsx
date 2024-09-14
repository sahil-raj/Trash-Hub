import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/Aboutus";
import Aim from "./components/Aim";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const rootElement = document.getElementById("root");

const router = createBrowserRouter([{
  path: "/",
  element: <Home />
},
{
  path: "/Aim",
  element: <Aim />
},
{
  path: "/ContactUs",
  element: <ContactUs />
},
{
  path: "/AboutUs",
  element: <AboutUs />
},
{
  path: "/signin",
  element: <SignIn />
},
{
  path: "/signup",
  element: <SignUp />
}]);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Navbar />
    <RouterProvider router={router} />
    <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
