import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import AboutUs from "./components/aboutus";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rrethnesh" element={<AboutUs/>} />
      </Routes>
    </div>
  );
}

export default App;
