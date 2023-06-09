import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import AboutUs from "./components/aboutus";
import FourERealEsate from "./routes/FourERealEsate";
import ContactUs from "./routes/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rrethnesh" element={<AboutUs />} />
        <Route path="/kontakti" element={<ContactUs />} />
        <Route path="/4realestate" element={<FourERealEsate />} />
      </Routes>
    </div>
  );
}

export default App;
