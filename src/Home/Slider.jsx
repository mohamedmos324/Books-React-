import React from 'react'

function Slider() {
    return (
        <div>
            <section className="slider_section" >
            <div id="myCarousel" className="carousel slide banner-main" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="first-slide" src="images/banner.jpg" alt="First slide" />
                        <div className="container">
                            <div className="carousel-caption relative">
                                <h1 >The Best Libraries That<br /> Every Book Lover Must<br /> Visit!</h1>
                            <p>adipiscing elit, sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua. Ut enim ad minim<br/> veniam, quis nostrud exercitation </p>
                            <div className="button_section"> <a className="main_bt" href="#">Read More</a>  </div>
                            <ul className="locat_icon">
                                <li> <a href="#"><img src="icon/facebook.png" /></a></li>
                                <li> <a href="#"><img src="icon/Twitter.png" /></a></li>
                                <li> <a href="#"><img src="icon/linkedin.png" /></a></li>
                                <li> <a href="#"><img src="icon/instagram.png" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="second-slide" src="images/banner.jpg" alt="Second slide" />
                    <div className="container">
                        <div className="carousel-caption relative">
                            <h1>The Best Libraries That<br /> Every Book Lover Must<br /> Visit!</h1>
                            <p>adipiscing elit, sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua. Ut enim ad minim<br/> veniam, quis nostrud exercitation </p>
                            <div className="button_section"> <a className="main_bt" href="#">Read More</a>  </div>
                            <ul className="locat_icon">
                                <li> <a href="#"><img src="icon/facebook.png" /></a></li>
                                <li> <a href="#"><img src="icon/Twitter.png" /></a></li>
                                <li> <a href="#"><img src="icon/linkedin.png" /></a></li>
                                <li> <a href="#"><img src="icon/instagram.png" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="third-slide" src="images/banner.jpg" alt="Third slide" />
                    <div className="container">
                        <div className="carousel-caption relative">
                            <h1>The Best Libraries That<br /> Every Book Lover Must<br /> Visit!</h1>
                            <p>adipiscing elit, sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua. Ut enim ad minim<br/> veniam, quis nostrud exercitation </p>
                            <div className="button_section"> <a className="main_bt" href="#">Read More</a>  </div>
                            <ul className="locat_icon">
                                <li> <a href="#"><img src="icon/facebook.png" /></a></li>
                                <li> <a href="#"><img src="icon/Twitter.png" /></a></li>
                                <li> <a href="#"><img src="icon/linkedin.png" /></a></li>
                                <li> <a href="#"><img src="icon/instagram.png" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
      </section >
    </div >
  )
}

export default Slider;

