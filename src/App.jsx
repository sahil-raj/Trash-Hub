import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Aim from "./components/Aim";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import AboutUs from "./components/Aboutus";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <AboutUs/>
      <Aim></Aim>
      <ContactUs></ContactUs>
      <Footer />
    </>
  );
}

export default App;
