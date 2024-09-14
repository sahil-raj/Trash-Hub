import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Aim from "./components/Aim";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import AboutUs from "./components/Aboutus";
import QRCard from "./components/QRCard";

function App() {
  return (
    <>
      <Navbar />
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
