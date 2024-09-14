import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Aim from "./components/Aim";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import AboutUs from "./components/Aboutus";
import QRCard from "./components/QRCard";
import Products from "./components/Products";
import ProductList from "./components/ProductList";
import OverlayForm from "./components/OverlayForm";
import Batches from "./components/Batches";
import QROverlay from "./components/QROverlay";
function App() {
  return (
    <>
   
      <Navbar />
      <Batches/>
      <Products></Products>
      <Batches/>
      <Home />
      <AboutUs />
      <Aim></Aim>
      <ContactUs></ContactUs>
     
      <Footer />
    </>
  );
}

export default App;
