import "./App.css";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Home from "./components/pages/Home";


function App() {
  return (
    <>
      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
