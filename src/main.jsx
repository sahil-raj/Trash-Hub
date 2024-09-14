import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/About-Us";
import Aim from "./components/Aim";
import ContactUs from "./components/ContactUs";
import ProductList from "./components/ProductList";
import App from "./App";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Analytics from "./components/Analytics";
import Batches from "./components/Batches";

const rootElement = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Aim",
    element: <Aim />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/ProductList",
    element: <ProductList />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/Analytics",
    element: <Analytics />,
  },
  {
    path: "/Batches/:productId",
    element: <Batches />,
  },
]);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
