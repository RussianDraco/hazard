import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sponsor from "./components/Sponsor";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../src/pages/Home"
import Login from "./pages/Login";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element = {<><Hero/><Sponsor/><About/><Testimonials/></>} />
          <Route path="/login" element = {<Login/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;