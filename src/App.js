import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter,Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import AboutMore from './Components/About/AboutMore/AboutMore';
import AllProjects from './Components/Projects/AllProjects/AllProjects';
import Blogs from './Components/Blogs/Blogs';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation></Navigation>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<AboutMore></AboutMore>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/blogs" element={<Blogs></Blogs>}></Route>
            <Route path="/projects" element={<AllProjects></AllProjects>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
