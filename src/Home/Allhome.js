import About from "./About";
import Books from "./Books";
import Contact from "./Contact";
import Footer from "../Footer";
import Library from "./Library";
import Navbar from "../Navbar";
import Slider from "./Slider";

function Allhome() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <About/>
      <Library/>
      <Books/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Allhome;
