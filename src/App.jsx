import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
