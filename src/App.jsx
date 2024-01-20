import "./App.css";
import BasicNavbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BasicNavbar />
      <main className="main">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
