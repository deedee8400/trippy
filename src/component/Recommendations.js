import "./RecommendationStyle.css";
import RecommendationData from "./RecommendationData";
import Recommendation1 from "../assets/local-food-singapore-dishes-on-a-table-900x643.png";
import Recommendation2 from "../assets/PARKROYAL-COLLECTION-Pickering-Singapore.jpg";
import Recommendation3 from "../assets/sentosa.jpg";
import Recommendation4 from "../assets/festive.jpg";
import Recommendation5 from "../assets/zouk.jpg"
import Recommendation6 from "../assets/cruise2.jpg";
import Recommendation7 from "../assets/shutterstockRF_608252534.avif";
import Recommendation8 from "../assets/shopping and explor.jpg";
import Recommendation9 from "../assets/souvenir1.jpg";

function Recommendations() {
    return(
        <div className="recommendation">
            <h1>Our Recommendation</h1>
            <p> You can discover unique 
                destination based on your own preferences. </p>
                <div className="recommendationcard">
                    <RecommendationData
                    image={Recommendation1}
                    heading="Local Foods and Dishes"
                    text="From iconic dishes to traditional snacks, deserts and drinks here ultimate map to Singapore authentic's local food"
                    link1="https://sethlui.com/best-halal-restaurants-singapore/"
                    link2="https://sethlui.com/top-hawker-2022/?category="
                    link3="https://thehoneycombers.com/singapore/best-singapore-local-desserts-traditional-sweets/"
                    name1="Halal Foods"
                    name2="Best Hawkers"
                    name3="Best Desserts"
                    />

                    <RecommendationData
                    image={Recommendation2}
                    heading="Hotel and Accomodation"
                    text="Whether you're traveling for business or plaesure, we are here to assist you in crafting remarkable stay. "
                    link1="https://boutiquehotel.me/singapore/simple/?gclid=CjwKCAjwg-GjBhBnEiwAMUvNW329loWQl_BWXu5enb1la-xfvXp6lhcJsENWTRAcdKSstpbU3OGHThoCFoIQAvD_BwE"
                    link2="https://www.kayak.sg/Singapore-Hotels.20828.hotel.ksp"
                    link3="https://thehoneycombers.com/singapore/book-chalets-in-singapore/"
                    name1="Luxury "
                    name2="Budget "
                    name3="Challets and Resort"
                    />

                    <RecommendationData
                    image={Recommendation3}
                    heading="Play Ground and Theme Park"
                    text="Vacation with all family members and your beloved kids?, visiting an indoor playground and theme park are definitely at the very top of every kid’s mind. Here some place recommended to visit "
                    link1="https://www.sunnycitykids.com/blog/outdoor-playgrounds"
                    link2="https://tourscanner.com/blog/theme-parks-in-singapore/"
                    link3="https://www.sassymamasg.com/play-indoor-playgrounds-babies-toddlers-kids-activities/"
                    name1="Outdoor playground"
                    name2="Theme Parks"
                    name3="Indoor"
                    />
                    
                </div>
                <div className="recommendationcard">
                    <RecommendationData
                    image={Recommendation4}
                    heading="Sport and Festival Season"
                    text="Singapore's religious and ethnic diversity is reflected in the sheer number and variety of festivals and celebrations held during the year."
                    link1="https://www.holidify.com/pages/festivals-in-singapore-223.html"
                    link2="https://ahboy.com/singapore-events/category/singapore-sporting-events/"
                    link3=""
                    name1="Festival Season"
                    name2="Sport Event"
                    name3="Others"
                    />

                    <RecommendationData
                    image={Recommendation5}
                    heading="Entertainment and Night life"
                    text="With over 17 million tourists a year, Singapore is also one of the most visited cities in the world , and the sector is constantly expanding. Singapore thus boasts a unique nightlife and cultural scene . The emphasis is now firmly placed on stylish rooftop bars, buzzing nightclubs and trendy cocktail bars."
                    link1="https://www.timeout.com/singapore/nightlife/best-night-clubs-in-singapore"
                    link2="https://traveltriangle.com/blog/nightlife-in-singapore/"
                    link3="https://www.thebestsingapore.com/best-entertainment/the-best-ktvs-karaoke-in-singapore/"
                    name1="Night Clubs"
                    name2="Attractions"
                    name3="KTVs/Karaoke"
                    />

                    <RecommendationData
                    image={Recommendation6}
                    heading="Cruise and Fun Sea Holidays"
                    text="When you visit Singapore, you can combine your land holiday with a cruise on the high seas to nowhere or a cruise to nearby Malaysia with stops at Penang and the capital Kuala Lumpur."
                    link1="https://thehoneycombers.com/singapore/cruises-in-singapore/"
                    link2="https://rivercruise.com.sg/"
                    link3="https://singaporecruise.com.sg/ferry-partners/"
                    name1="Cruises"
                    name2="Singapore River Cruise"
                    name3="Ferry"
                    />
                    
                </div>
                <div className="recommendationcard">
                    <RecommendationData
                    image={Recommendation7}
                    heading="Nature and Wildlife"
                    text="Nature lovers and outdoor enthusiasts, escape from the city and explore Singapore’s green spaces for some tranquillity.

                    There’s a park or garden to explore no matter where you are in the country, so we’ve made things easy by sectioning this guide into the four main areas for you to get your fix of fresh air and lush greenery and some places for see the wildlife in this country. "
                    link1="https://www.gardensbythebay.com.sg/"
                    link2="https://www.nparks.gov.sg/sbg"
                    link3="https://thesmartlocal.com/read/macritchie-reservoir-things-to-do/"
                    name1="Garden By The Bay"
                    name2="Botanical Garden"
                    name3="Parks"
                    />

                    <RecommendationData
                    image={Recommendation8}
                    heading="Shopping and Exploration"
                    text="Wondering when is the great Singapore sale ? Great Singapore Sale is a month-long event held every year in the months of June and July. Many malls and locals stores participate in it and you can shop around the whole of Singapore to get the best deals."
                    link1="https://thehoneycombers.com/singapore/survival-guide-to-orchard-road-singapore/"
                    link2="https://www.thebestsingapore.com/best-place/imm-outlet-mall/"
                    link3="https://www.marinabaysands.com/shopping.html"
                    name1="Orchard Road"
                    name2="IMM"
                    name3="Marina Bay Sands"
                    />

                    <RecommendationData
                    image={Recommendation9}
                    heading="Craft and Souvenir"
                    text="Need a special souvenir to sum up your time in Singapore or gift to a loved one back home? We've got a list of unique and cool Singapore mementos sure to fit the bill. But where to buy Singapore souvenirs that aren’t your usual tourist tat? We’ve put our thinking caps on to bring you the best Singapore souvenirs to gaze on fondly from far-off shores and evoke fond memories."
                    link1="https://www.thebestsingapore.com/best-place/budget-shopping-at-bugis-street/"
                    link2="https://www.thebestsingapore.com/best-place/chinatown/"
                    link3="https://www.thebestsingapore.com/travel-singapore/the-best-places-to-buy-budget-souvenirs-in-singapore/"
                    name1="Bugis street"
                    name2="Chinatown"
                    name3="Mustafa centre"
                    />
                </div>
                
        </div>
    );
}

export default Recommendations;