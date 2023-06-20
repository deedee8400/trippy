import { useState } from "react";
import "./FooterStyles.css";


const Footer =() =>{
    const [footerText, setFooterText] = useState(false)
  
   
    const showText = (state) =>{
        return {
            height: state ? '2rem': '0rem',
            opacity: state ? 1 : 0
        }
    }
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Trippy.Sg</h1>
                    <p>Choose Your Favourite Destination.</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>

                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>

                    <a href="/">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>

                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    {/* <button style={{background: 'transparent', border: 'none', color: "#fff"}} onClick={(e)=> {
                        setFooterText(!footerText)
                        console.log(footerText)
                        }}>Changelog</button>
                    <div className="hide-me" style={{transition:'all 0.5s ease-in' , ...showText(footerText)}}>This is a text</div> */}
                    <a href="/"> Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Version</a>
                </div>

                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>

                <div>
                    <h4>Help</h4>
                    {/* <a href="./Contact">Support</a>
                    <a href="./Contact">Trouble shooting</a> */}
                    <a href="/contact">Contact Us</a>
                    <p>
                    Hotline: 123456789
                    <p>Clover by the Park </p>
                    <p>2 Bishan Street 25,</p>
                    Singapore 573973
                    </p>
                </div>

                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
            <div>
                <iframe className="googlemaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.695623338836!2d103.843182314754!3d1.3592599990086442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da171f47ed160b%3A0x99cd8723d61a4a61!2sClover%20by%20the%20Park!5e0!3m2!1sen!2ssg!4v1680948150720!5m2!1sen!2ssg" 
                width="1250" height="350"
                style={{border:"0"}} 
                allowfullscreen=""
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
                <div className="copyright">Copyright© Deedee 2023. Alright Reserved</div>
        </div>

    );
}

export default Footer;