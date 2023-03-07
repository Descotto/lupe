import React, {useState} from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const API_KEY = process.env.REACT_APP_API_KEY;



function Contact() {
    console.log(REACT_APP_SERVER_URL);
    const [redirect, setRedirect] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
          axios.post(`https://api.mailslurp.com/createInbox?apiKey=${API_KEY}`)
          .then((res) => {
            let { inbox } = res.data.id;
            let name = document.querySelector('#name').value;
            let email = document.querySelector('#email').value;
            let message = document.querySelector('#msg').value;
            let data = {
                senderId: inbox.id,
                to: "azlyrix@gmail.com",
                subject: email,
                body: message,
            }
            axios.post(`https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`, data
            )
            .then(response => {
                console.log(response, "went through");
            }).catch(err => {
                console.log(err, "ERROR");
            });
          }).catch(err => {
            console.log(err, "ERROR");
          });
      }

    // function sendEmail(inbox, email, message){
    //      axios({
    //         method: "POST",
    //         url: `https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`,
            
    //         data: {
    //           senderId: inbox,
    //           to: "azlyrix@gmail.com",
    //           subject: email,
    //           body: message,
    //         },
    //       });
    // }

//    async function saveContact(e) {
//     let inbox = 'test';
//         e.preventDefault();
//         createInbox(inbox);
//         let name = document.querySelector('#name').value;
//         let email = document.querySelector('#email').value;
//         let message = document.querySelector('#msg').value;
//         console.log("INBOX ===> ", inbox);
//         sendEmail(name, email, message);
        
//     }

    return (
        <div>
            <h1>Contact</h1>
                <form onSubmit={sendEmail}>
                    <input type='text' id="name" name="name" placeholder="Full Name" /> <br />
                    <input type='text' id="email" name="email" placeholder="Email" /> <br />
                    <textarea placeholder="Message" id="msg" name="msg" className="mess" rows="5" /> <br />
                    <button type="submit">Submit</button>

                </form>
           
        </div>
    )
}

export default Contact;