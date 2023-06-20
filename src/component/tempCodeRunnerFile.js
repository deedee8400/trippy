import { useState } from "react";
import "./BookFormStyles.css";
import axios from 'axios';

function BookForm(){
    const [ values, setValues] = useState ({
        Full_Name: '',
        Email: '',
        Phone_Number: '',
        Date_of_book: '',
        How_Many_Person: '',
        // Message:''

    })

    const handleChange= (event) => {
        setValues({...values, [event. target.name]:[event.target.value]})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/BookForm', values)
        .then ( res=> console.log ('register Successfully!'))
        .catch ( err=> console.log (err));
    }
    return(
        <div className="form-container">
            <h1 className="booknow">Book Now!</h1>
            <p>Please pay by cashless during the day trip to our staff and please prepare for fix amount</p>
            <form onSubmit={handleSubmit}>
                <input placeholder="Full Name" name ='Full-Name' required className='form-control rounded-o' onChange={handleChange}/>
                <input placeholder="Email" name='Email' required className='form-control rounded-o' onChange={handleChange}/>
                <input placeholder="Phone Number" name='Phone_Number' required className='form-control rounded-o' onChange={handleChange}/>
                <input placeholder="Date of book" name='Date_of_book' required className='form-control rounded-o' onChange={handleChange}/>
                <input placeholder="How Many Person" name='How_Many_Person' required className='form-control rounded-o' onChange={handleChange}/>
                {/* <textarea placeholder="Message" rows="4"></textarea > */}
                <button className="bookFormSub">Submit</button>
            </form>
        </div>
    );
}

export default BookForm;