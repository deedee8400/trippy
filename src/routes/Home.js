import Destination from "../component/Destination";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from"../component/Navbar";
import Trip from "../component/Trip";

function Home(){
    return(
        <>
        <Navbar/>
            <Hero
            cName="hero"
            heroImg="https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80"
            title="Singapore Tourism Website"
            text="Start explore Singapore from here"
            buttonText="Travel plan"
            url="/service"
            btnClass="show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    );
}

export default Home;