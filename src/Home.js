import React from "react";
import "./App.css";
import lotus from "./img/lotus.jpeg"

function Home() {
    
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <img className="d-block w-100 active" src={lotus} alt="First slide" /> */}
            <div className="d-block w-100 active" alt="First slide" >
            <h1>Home</h1>

            <p>
           This is the home page
           </p>
        </div>
          </div>
          <div className="carousel-item">
            {/* <img className="d-block w-100 active" src={lotus} alt="First slide" /> */}
            <div className="d-block w-100 active" alt="Second slide" >
            <h1>About me</h1>

            <p>
            I am Guadalupe Silva and I help my clients put together the puzzle pieces of their life to connect to their true essence.  I am in love with life, and I truly believe that human beings are perfect, whole, and complete, sometimes we just need a little help to tap into our heart.

My life journey has truly empowered me with courage, resilience, wisdom, and I am ready to help my clients thrive and find significance in their lives. Holding space for you so you don’t have to remain in survival mode is my goal, knowing a more fulfilling and purposeful life awaits. Please schedule a complimentary 15-minute appointment.
            </p>
        </div>
          </div>
          <div className="carousel-item">
            {/* <img className="d-block w-100" src="..." alt="Second slide" /> */}
            <div className="d-block w-100" alt="Third slide">
            <h1>Contact</h1>
            <form >
                        <div className="form-group">
                            <label htmlFor="name">First Name</label>
                            <input type="text" name="name" value="name"  className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value="email"  className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <input type="message" name="message" value="message" className="form-control"/>
                        </div>
                       
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
           
        </div>
          </div>
          <div className="carousel-item">
            {/* <img className="d-block w-100" src="..." alt="Third slide" /> */}
            <div className="d-block w-100" alt="Fourth slide">
            <h1>Services</h1>

            <p>
                "What we offer... "
            </p>
        </div>

          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
}

export default Home;