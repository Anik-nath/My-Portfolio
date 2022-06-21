import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation/Navigation";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import AboutMore from "./Components/About/AboutMore/AboutMore";
import AllProjects from "./Components/Projects/AllProjects/AllProjects";
import Blogs from "./Components/Blogs/Blogs";
// import HashLoader from "react-spinners/HashLoader";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import Review from "./Components/Review/Review";
import secretFunction from "./secret";
import Loading from "./Components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  secretFunction();
  return (
    <div className="App">
      {loading ? (
        <Loading loading={loading}></Loading>
      ) : (
        <BrowserRouter>
          <Navigation></Navigation>
          <ScrollToTop width="20" height="20" smooth color="gray" />
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<AboutMore></AboutMore>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/blogs" element={<Blogs></Blogs>}></Route>
            <Route path="/projects" element={<AllProjects></AllProjects>}></Route>
            <Route path="/review" element={<Review></Review>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
