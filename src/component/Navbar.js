import { Component } from "react";
import "./NavbarStyle.css";
import {menuItems} from "./menuItems";
import {Link} from "react-router-dom";


class Navbar extends Component{
    state = {clicked: false};
    handleClick= () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="fa-solid fa-person-walking-luggage" >Trippy. Sg</h1>

                <button className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} >
                    </i>
                </button>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>

                    {menuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>{item.title}</Link>
                    </li>
                    );
                    })}
                    {/* <button>Sign Up</button> */}
                </ul>   
            </nav>
        )
    }
}

export default Navbar;