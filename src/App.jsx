import NavBar from "./components/navbar/navBar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Testimonials from "./components/testimonials/Testimonials";  
import Contact from "./components/contact/Contact";
import "./app.scss";


function App() {
  return (
    <div className="app">
      < NavBar />
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Experience/>
        <Testimonials/>
        <Contact/>
      </div>
    
      

  </div>
  );
}

export default App;
