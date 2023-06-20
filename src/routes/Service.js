import Hero from "../component/Hero";
import Navbar from"../component/Navbar";
import AboutImg from "../assets/gardenbythebay.JPG"
import Footer from "../component/Footer";
import Services from "../component/Services";


function Service(){
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="Our Services"
            btnClass="hide"
            />
            <Services/>
            <Footer/>
        </>
    );
}

export default Service;