import React from 'react'

function Footer() {
  return (
    <div>
       <footer>
         <div className="footer">
            <div className="container">
               <div className="row pdn-top-30">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                     <div className="Follow">
                        <h3>Follow Us</h3>
                     </div>
                     <ul className="location_icon">
                        <li> <a href="#"><img src="icon/facebook.png"/></a></li>
                        <li> <a href="#"><img src="icon/Twitter.png"/></a></li>
                        <li> <a href="#"><img src="icon/linkedin.png"/></a></li>
                        <li> <a href="#"><img src="icon/instagram.png"/></a></li>
                     </ul>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                     <div className="Follow">
                        <h3>Newsletter</h3>
                     </div>
                     <input className="Newsletter" placeholder="Enter your email" type="Enter your email"/>
                     <button className="Subscribe">Subscribe</button>
                  </div>
               </div>
            </div>
         </div>
         <div className="copyright">
            <div className="container">
               <p>Copyright 2019 All Right Reserved By <a href="https://html.design/">Free html Templates</a></p>
            </div>
         </div>
      </footer>
    </div>
  )
}

export default Footer
