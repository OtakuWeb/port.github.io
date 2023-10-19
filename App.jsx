import Navbar from "./sections/navBar/navbar";
import Header from "./sections/header/header";
import About from "./sections/About/about";
import Experience from "./sections/experience/experience";
import Services from "./sections/services/services";
import Portfolio from "./sections/portfolio/portfolio";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";
import Floating from "./sections/floating-nav/floatingNav";

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <Floating/>
    </main>
   
  )
}

export default App
