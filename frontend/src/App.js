import './App.css';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Project from './Components/Project';
import NavBar from './Components/NavBar';
import Connect from './Components/Connect';
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (<>
    <BrowserRouter>
    <NavBar></NavBar>
    <Banner></Banner>
    <Skills></Skills>
    <Project></Project>
    <Connect></Connect>
    </BrowserRouter>
    </>
  );
}

export default App;
