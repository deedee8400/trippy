import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/lau pasat.jpg";
import Trip2 from "../assets/orchard.jpg";
import Trip3 from "../assets/schoolholiday.webp";
// import Content from './TripData';

function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p> You can discover unique 
                destination based on your own preferences. </p>
                <div className="tripcard">
                    <TripData
                    image={Trip1}
                    heading=" Local Foods Trip"
                    text="Singapore is a country that takes great pride in what it does and what it has to offer.
                    From heritage buildings and architectural gems to fashionable local labels and amazing things to do, there’s plenty to love. 
                    But our finest offering is, of course, our food – in all its multicultural glory. We already have the lowdown on the best laksa, nasi lemak and prata – not to mention countless cuisines, including Mexican and Italian.
                    Now, we’re turning our attention to local food in Singapore. Here’s your culinary road map to the world’s food capital (in our eyes, at least)."
                    />

                    <TripData
                    image={Trip2}
                    heading="Branded Sale Trip"
                    text="On a budget? Shop affordable sports gear, discounted designer bags and more at these hotspots.
                    What if we told you that you have access to year-round steals and deals? And nope, we’re not just talking about The Great Singapore Sale. 
                    For times when you’re ditching your favourite mall, multi-label store or secondhand shop for a bargain shopping experience, 
                    you head to the city’s best-kept secret: Outlet malls. 
                    With deep discounts on luxury labels, high-street brands, sportswear and furnishings, these destinations offer stellar bargains galore. 
                    "
                    />

                    <TripData
                    image={Trip3}
                    heading="School Holiday Trip"
                    text="Looking for ideas on what to do this school holidays? 
                    If you’re currently looking at an empty cal for the school holidays and worrying about how you’re going to entertain the kids, then don’t fret. We’ve got you (and the kids) covered with everything to do for the school holiday in Singapore. We’ve found loads of things to keep the kids busy, whether that’s at home or out and about. From exhibits to our favourite park or green space. So take a look, and get filling up your Singapore school hols itinerary with these fun-filled activities for the whole family. Happy holidays! "
                    />
                    
                </div>
        </div>
    );
}

export default Trip;