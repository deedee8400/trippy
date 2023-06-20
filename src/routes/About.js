import Hero from "../component/Hero";
import Navbar from"../component/Navbar";
import AboutImg from "../assets/raffles.jpg"
import Footer from "../component/Footer";
import AboutUS from"../component/AboutUs";

function About(){
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="About Us"
            btnClass="hide"
            />
            <AboutUS/>
            <Footer/>
        </>
    );
}

export default About;