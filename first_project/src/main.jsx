import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure correct path to your CSS file
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavbarComponent } from './components/Navbar/header.jsx';
import Herosection from './components/hero/section.jsx';
import SecondSection from './components/section-top/second.jsx';
import ContentImg from "./assets/about.png";
import Cardmain from './components/cardmain/cardmain';
import Content from './components/Content/content';
import Aboutwrapper from './assets/aboutwrapper.png';
import Testomonial from './assets/testimonialswrapper.png';
import Mask from './assets/Mask.png';
import Faqimg from './assets/fqq.png';
import Contact from './components/contac/contact.jsx';
import Faq from './components/frequently/faq.jsx';
import Footer from './components/footer/footer';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <div id='herosection'>
            <NavbarComponent />
            <Herosection />
        </div>
        <div id='aboutsection'>
            <SecondSection backgroundImage={Aboutwrapper} title="ABOUT US" para="ULTIMATE EXPERIENCES WITH STORY, EMOTION AND PURPOSE" />
            <div style={{ backgroundColor: `black` }}>
                <Content img={ContentImg} firsthead='“ Our mission is to produce the highest quality work for every clients, on every project with full of energy we have ”' secondhead="Binjamin Kao" paracontent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est" />
            </div>
        </div>
        <div id='pricingsection'>
            <Cardmain />
        </div>

        <div id='servicesection'>
            <div style={{ height: "auto", backgroundColor: 'black' }} >
                <SecondSection backgroundImage={Testomonial} title="TESTOMONIALS" para="WHAT THEY SAY ABOUT US" />
                <Content img={Mask} secondhead="Greygorey Hayes CEO of PHOTION ID" paracontent="et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est" />
            </div>
        </div>
        <div style={{ height: "auto", backgroundColor: 'black' }} >
            <SecondSection backgroundImage={Faqimg} title="FAQS" para="COMMONLY ASKED QUESTIONS" />
            <Faq />
        </div>
        <Contact />
        <div id='contactsection'>
            <Footer />
        </div>
    </>
);
