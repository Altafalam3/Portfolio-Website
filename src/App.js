import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import MouseParticles from "react-mouse-particles";

function App() {
  return (
    <>
      <MouseParticles
        g={2.4}
        cull="MuiSvgIcon-root,MuiButton-root"
        num={2}
        radius={8}
        life={0.8}
        v={1.2}
        color="random"
        alpha={0.16}
        level={6}
      />

      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
