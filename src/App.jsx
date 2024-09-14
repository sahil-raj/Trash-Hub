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
function App() {
  return (
    <>
   
      <Navbar />
      <Products></Products>
      
      <Home />
      <AboutUs />
      <Aim></Aim>
      <ContactUs></ContactUs>
      <QRCard qrData="test" qrHeading="test QR" qrText="lorem ipsum" />
      <Footer />
    </>
  );
}

export default App;
