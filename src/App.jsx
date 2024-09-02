import Navbar from "./components/navbar"
import LandingPage from "./components/landingPage"
import Marque from "./components/marque"
import About from "./components/About"
import Eyes from "./components/eyes"
import Featured from "./components/Featured"
import Cards from "./components/Cards"
import Start from "./components/Start"
import Footer from "./components/Footer"
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-full bg-stone-900  ">
    <Navbar/>
    <LandingPage/>
    <Marque/>
    <About/>
    <Eyes/>
    <Featured/>
    <Cards/>
    <Start/>
    <Footer/>
    
    </div>
  )
}

export default App
