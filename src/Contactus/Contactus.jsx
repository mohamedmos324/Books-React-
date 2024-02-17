import React from 'react'

function Contactus() {
  return (
    <div>
       <div className="Contact">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage3 text-center">
                     <h2>Contact</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <form>
                     <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                           <input className="form-control" placeholder="Name" type="Name"/>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                           <input className="form-control" placeholder="Phone Number" type="Phone Number"/>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                           <input className="form-control" placeholder="Email" type="Email"/>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                           <textarea className="textarea" placeholder="Message">Message</textarea>
                        </div>
                     </div>
                  </form>
               </div>
               <button className="send-btn">Send</button>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Contactus
