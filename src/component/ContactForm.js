import "./ContactFormStyles.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

function ContactForm (){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z3t2x0j', 'template_e2hj6al', form.current, 'kUzGschrjwY3L_-Zb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return(
        <div className="contact-form-container">
            <h1>Contact Us!</h1>
            <p className="p1">Need more information? Fill in the form below with your enquiry or feedback and we will get back to you as soon as possible. Alternatively, you may call, send us an email or drop by our office. </p>
            <form ref={form} onSubmit={(e) => sendEmail(e)}>
                <input type="text" placeholder="Full Name" name='user_name' required />
                <input type= "email" placeholder="Email" name='user_email' required/>
                <input type= "text" placeholder="Subject" name='subject' required/>
                <textarea placeholder= "Message" rows="4" name="message"></textarea>
                <button type="submit">Send Message</button>
                {/* <p2>or</p2> */}
                <p2>Call us at</p2>
                <button>12345678</button>
            </form>
        </div>
    );
}

export default ContactForm