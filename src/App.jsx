import React from "react";

import Header from "./component/Header";
import WhyChoose from "./component/WhyChoose";
import Projects from "./component/Projects";
import SecondProPage from "./component/SecondProPage";
import ContactForm from "./component/ContactForm";
import LocationPage from "./component/LocationPage";
import Footer from "./component/Footer";




const App = () => {
  return (
    <div>
      <Header />
      <WhyChoose />
      <Projects />
      <SecondProPage/>
      <ContactForm/>
      <LocationPage/>
      <Footer/>
      
      
    </div>
  );
};

export default App;
