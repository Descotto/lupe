import React, {useState} from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { json } from "react-router-dom";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Contact() {
    console.log(REACT_APP_SERVER_URL);
    const [redirect, setRedirect] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        const data = {name, email, message};
        console.log("DATA ===>{}", data)
        const { body } = {"name": name, email: email, "message": message};
        axios.post(`${REACT_APP_SERVER_URL}/contact`, body)
        .then (response => {
            console.log('data sent ===>>', response)
        })
        .catch (err => {
            console.log('error', err);
        });
    }


    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">First Name</label>
                            <input type="text" name="name" value={name} onChange={handleName} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <input type="message" name="message" value={message} onChange={handleMessage} className="form-control"/>
                        </div>
                       
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
           
        </div>
    )
}

export default Contact;