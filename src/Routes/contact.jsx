// import Home from "../Components/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import ContactSection from "../Components/Contact/contactSection/contactSection"
import Map from "../Components/Map/map";
import Footer from '../Components/Footer/Footer'


// import { MdPlace } from "react-icons/md";

function contact() {
  return (
    <>
      <Navbar />
      {/* <h1>Contact</h1> */}
      <ContactSection />
      <Map />
      <Footer />
    </>
  );
}

export default contact;
