import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import Navigation from "./Components/Navigation/Navigation";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
// import HashLoader from "react-spinners/HashLoader";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import Review from "./Components/Review/Review";
import secretFunction from "./secret";
import Loading from "./Components/Loading/Loading";
import Test from "./Components/Test/Test";
import PageNotFound from "./Components/PageNotFound";
const Home = React.lazy(() => import("./Components/Home/Home"));
const Footer = React.lazy(() => import("./Components/Footer/Footer"));
const Contact = React.lazy(() => import("./Components/Contact/Contact"));
const AllProjects = React.lazy(() =>
  import("./Components/Projects/AllProjects/AllProjects")
);
const AboutMore = React.lazy(() =>
  import("./Components/About/AboutMore/AboutMore")
);
const Blogs = React.lazy(() => import("./Components/Blogs/Blogs"));

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
      <Suspense
        fallback={
          <div style={{ height: "100vh" }} className="bg-dark w-full"></div>
        }
      >
        {loading ? (
          <Loading loading={loading}></Loading>
        ) : (
          <BrowserRouter>
            <Navigation></Navigation>
            <ScrollToTop width="20" height="20" smooth color="white" />
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route path="/about" element={<AboutMore></AboutMore>}></Route>
              <Route path="/contact" element={<Contact></Contact>}></Route>
              <Route path="/blogs" element={<Blogs></Blogs>}></Route>
              <Route path="/test" element={<Test></Test>}></Route>
              <Route
                path="/projects"
                element={<AllProjects></AllProjects>}
              ></Route>
              <Route path="/review" element={<Review></Review>}></Route>
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
        )}
      </Suspense>
    </div>
  );
}

export default App;
