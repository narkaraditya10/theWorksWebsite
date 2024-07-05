import "./App.css";
import "./assets/css/style.css";
import About from "./components/about";
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
    </>
  );
}

export default App;
