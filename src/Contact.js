import React, {useState} from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Contact() {
    console.log(REACT_APP_SERVER_URL);
    const [redirect, setRedirect] = useState(false);

    function saveContact(e) {
        e.preventDefault();
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let message = document.querySelector('#msg').value;
        const data =  {name, email, message };
        console.log('newContact =>>>>>', data);
        axios.post(`${REACT_APP_SERVER_URL}/contact/`, data)
        .then(response => {
            console.log('===> new contact', response);
            // setRedirect(true);

        }).catch(err => {
            console.log('===> error', err);
        });

    }

    return (
        <div>
            <h1>Contact</h1>
                <form>
                    <input type='text' id="name" name="name" placeholder="Full Name" /> <br />
                    <input type='text' id="email" name="email" placeholder="Email" /> <br />
                    <textarea placeholder="Message" id="msg" name="msg" className="mess" rows="5" /> <br />
                    <button onClick={saveContact}>Submit</button>

                </form>
           
        </div>
    )
}

export default Contact;