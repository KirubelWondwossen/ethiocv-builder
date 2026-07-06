import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import Payment from "./pages/Payment";
import Download from "./pages/Download";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/builder" element={<Builder />} />
      <Route path="/home" element={<Payment />} />
      <Route path="/download" element={<Download />} />
    </Routes>
  );
}

export default App;
