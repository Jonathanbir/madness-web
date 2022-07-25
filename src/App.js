import { Routes, Route } from "react-router-dom";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { motion } from "framer-motion";

import "./App.styles.scss";
const App = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const animateFrom = { x: -100 };
  const animateTo = { x: 0 };
  return (
    <>
      {open && (
        <motion.div
          initial={animateFrom}
          animate={animateTo}
          transition={{ duration: 0.3 }}
        >
          <Navigation setOpen={setOpen} />
        </motion.div>
      )}
      {location.pathname === "/" ? (
        <div className="home-logo" onClick={() => setOpen(!open)} />
      ) : (
        <div className="logo" onClick={() => setOpen(!open)} />
      )}
      <Routes>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="login" element={<Authentication />} />
        <Route path="signup" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default App;
