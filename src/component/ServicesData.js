import { Component } from "react";
import "./ServicesStyles.css";

class ServicesData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="serv-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                    <h4>{this.props.cost}</h4>
                    <h4>{this.props.date}</h4>
                    <h4>{this.props.time}</h4>
                    <h4>{this.props.vanue}</h4>
                    <button className="s-card-button"><a href="/bookform">BOOK NOW!</a></button>
                </div>
                <div className="ser-image">
                    <img alt="pix1" src={this.props.pic1}/>
                </div>
            </div>
        );
    }
}

export default ServicesData;