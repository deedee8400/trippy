import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                    <h4>{this.props.Direction}</h4>
                    <p>{this.props.Address}</p>
                    <p className="bus">Bus : {this.props.busDirection.map(v => {
                        console.log(v)
                        return (
                        <>
                        <a  href={`https://www.transitlink.com.sg/eservice/eguide/service_route.php?service=${v}`} target="blank">{v},</a>
                        </>
                        )
                    })}</p>
                    <p>{this.props.mrtDirection}</p>
                    <p className="maps">Maps:<a href={this.props.Maps} target="blank" > Click Here </a></p>
                    
                </div>
                <div className="image">
                    <img alt="marina bay sands" src={this.props.img1}/>
                    <img alt="marina bay sands" src={this.props.img2}/>
                </div>
            </div>
        );
    }
}

export default DestinationData;