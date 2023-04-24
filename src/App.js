import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
