import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import FourERealEsate from "./routes/FourERealEsate";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/4realestate" element={<FourERealEsate />} />
      </Routes>
    </div>
  );
}

export default App;
