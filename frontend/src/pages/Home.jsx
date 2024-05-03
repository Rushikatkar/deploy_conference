import React from "react";
import Intro from "./Intro";
import About from "./About";
import { Speaker, Agenda, CallToAction, Venue } from "./Speaker";
// import Contact from "./Contact";
import {Footer, Contact} from "./Footer";
import Header from "./Header";

function Home (){

    return (
        <div>
            
          <Header />
        <Intro />

      <About />
      <Speaker />
   <Agenda/>
   <Venue/>
   <CallToAction/>

      <Contact />
      <Footer />  
      </div>
    
    )
};

export default Home;