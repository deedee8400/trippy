import Hero from "../component/Hero";
import Navbar from"../component/Navbar";
import AboutImg from "../assets/jewel-g397ed81ed_1280.jpg";
import Footer from "../component/Footer";
import Recommendations from "../component/Recommendations";


function Recommendation(){
    return(
        <>
            <Navbar/>
            <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="Recommendation"
            btnClass="hide"
            />
            <Recommendations/>
            <Footer/>
        </>
    );
}

export default Recommendation;