import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import touristSpots from '../data/touristSpots.json'
import { useEffect, useState } from "react";



const Destination =() =>{
    const [touristData, setTouristData] = useState()
    useEffect(()=>{
        let check = true
        if (check) {
            setTouristData(touristSpots)
        }

        check = false
    },[])
    return(
        <div className="destination">
            <h1> Popular Destination</h1>
            <p>You can find here, what you really need</p>
        
        {touristData ? touristData['spots'].map((v,i)=>{
            return <DestinationData className={i % 2 === 0 ? "first-des" : "first-des-reverse"} Direction="How To Get There?" heading={v.heading} text={v.description} Address={v.address} busDirection={v.bus} mrtDirection={v.mrt} Maps={v.maps} img1={v.img1} img2={v.img2}/>
        }): "loading..."}
        </div>

    );
};

export default Destination;