import { useState } from "react";
import "./BookFormStyles.css";
import axios from 'axios';

function BookForm(){
    const [ values, setValues] = useState ({
        full_name: '',
        email: '',
        phone_number: '',
        date_of_book: '',
        how_many_person: '',
        which_tour_you_want_to_join:'',

    })

    const handleChange= (event) => {
        setValues({...values, [event.target.name]:[event.target.value]})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/booking_form', values)
        .then ( res=> console.log ('Register Successfully!'))
        .catch ( err=> console.log (err));
        event.target.reset()
    }

    return(
        <div className="book-form-container">
            <h1 className="booknow">Book Now!</h1>
            <p>Please pay by cashless during the day trip to our staff and please prepare for fix amount</p>
            <form onSubmit={handleSubmit}>
                <input placeholder="Full Name" name ='full_name' required onChange={handleChange}/>
                <input placeholder="Email" name='email' required onChange={handleChange}/>
                <input placeholder="Phone Number" name='phone_number' required onChange={handleChange}/>
                <input placeholder="Booking date (YY/MM/DD)" name='date_of_book' required onChange={handleChange}/>
                <input placeholder="How Many Person" name='how_many_person' required onChange={handleChange}/>
                <input placeholder="Which Tour you want to join?" name='which_tour_you_want_to_join' required onChange={handleChange}/>
                <button className="bookFormSub" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default BookForm;