import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Issuer from "./components/Issuer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App w-full h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/issuer" element={<Issuer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
