import "./ServicesStyles.css";
import ServicesData from "./ServicesData";
import LocalFood1 from"../assets/city tour.jpg";
import LocalFood2 from"../assets/changi airport.jpg";
import LocalFood3 from"../assets/changi-jewel.jpg";
import LocalFood4 from"../assets/culture.jpg";


const Services =()=>{
    return(
        <div className="services">
            <h1>Up coming event</h1>
            <p>Tell us what we can do for you</p>

        <ServicesData
        className="first-serv"
        heading="CITY SIGHTS TOUR"
        text="
        Discover how East meets West, nature and urban beauty intertwine, and the past meets present,
        with our guide to Singapore’s most iconic attractions."
        cost="Ticket: $15/person, free mineral water"
        date="Date: 31 Augt. 2023."
        time="Time: 10am - 5pm"
        vanue="Vanue: Marina Square, #01-23"
        pic1={LocalFood1}
        />

        <ServicesData
        className="first-serv-reverse"
        heading="CHANGI PRECINCT TOUR"
        text="On this free 2.5-hour Changi Precinct Tour, be immersed in the lives of Singaporeans
         through a visit to a uniquely designed residential town, and a quiet village just a stone's throw away from the airport.
         Forget the city! Uncover hidden gems at Changi Precinct."
         cost="Ticket: $50/person, lunch included"
         date="Date: Every Weekend."
         time="Time: 10am - 5pm"
         vanue="Vanue: Changi Airport, Terminal 1, #01-23"
        pic1={LocalFood2}
        />

        <ServicesData
        className="first-serv"
        heading="JEWEL WALKING TOUR"
        text="
        Discover a wondrous world where nature meets retail through this 2.5 hours walking tour showcasing Changi Airport's latest development, Jewel. 
        Immerse in a lush green sanctuary as you hike through the Shiseido Forest Valley, marvel at the HSBC Rain Vortex,
         and sample snacks from local heritage brands. Traverse through the Canopy Park and be drawn into the world of aviation in the Changi Experience Studio. 
        Get the all-in-one Jewel experience!"
        cost="Ticket: FREE (for short terms visitor)"
        date="Date: Everyday."
        time="Time: 10am - 5pm"
        vanue="Vanue: Changi Jewel Entrance, #01-23"
        pic1={LocalFood3}
        />

        <ServicesData
        className="first-serv-reverse"
        heading="HERITAGE TOUR"
        text="
        2.5-hour Heritage Tour takes you back in time to explore the history and culture of Singapore. 
        You will drive by the historic Civic District, rich with our colonial past, and enjoy a walk in the cultural precincts of Chinatown and Kampong Gelam.
        Stopovers at Chinatown and Kampong Gelam will give you some time to take photos against architectural gems, and even grab a local snack or a unique souvenir as a memento."
        cost="Ticket: $50, Ticket tour bus included"
        date="Date: Everyday."
        time="Time: 10am - 5pm"
        vanue="Vanue: Chinatown MRT Stn, EXIT C."
        pic1={LocalFood4}
        />
        </div>
    );
}

export default Services;