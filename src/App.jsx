import "./App.css";
import "./assets/css/style.css";
import About from "./components/about";
import Experts from "./components/experts";
import Hero from "./components/hero";
import Service from "./components/service";
import Slideshow from "./components/slideshow";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Slideshow />
      <Service /> 
      <Experts/>
    </>
  );
}

export default App;
