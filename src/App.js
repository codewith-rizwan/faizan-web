import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Navbar/Navbar";
import Card from "./Pages/SuccessStory/Card";

import Classes from "./Pages/Classes/Classes";
import Blog from "./Pages/Blog/Blog";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/classes" Component={Classes} />
        <Route path="/blog" Component={Blog} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Card />
    </>
  );
}

export default App;
