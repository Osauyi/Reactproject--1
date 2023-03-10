import React from 'react';

// import {ReactComponent as XMark} from "./icons/xmark-solid.svg";
// import {} from "./components/Navbar.css"
import Navbar from './components/Navbar';
import SecondSection from './components/SecondSection';
import FirstSection from './components/FirstSection';
import ThirdSection from './components/ThirdSection';
import Footer from './components/Footer';


function App () {

  return (
    <div>
    <Navbar />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <Footer />
    </div>
  )
}


export default App