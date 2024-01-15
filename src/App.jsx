import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollWatcher from "./components/ScrollWatcher";

function App() {
  var docWidth = document.documentElement.offsetWidth;

  [].forEach.call(document.querySelectorAll("*"), function (el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });

  return (
    <>
      <Router>
        <ScrollWatcher/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
