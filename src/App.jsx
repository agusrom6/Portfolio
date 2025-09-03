import "./App.css";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#4a0040] to-[#000000]">
      <main>
        <Home />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
