import React from 'react'

function Library() {
  return (
    <div>
        <div className="Library">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="titlepage">
                     <h2>Our <strong className="black">Library </strong></h2>
                     <span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span> 
                  </div>
               </div>
            </div>
         </div>
         <div className="bg">
            <div className="container">
               <div className="row">
                  <div className="col-md-10 offset-md-1">
                     <div className="Library-box">
                        <figure><img src="images/Library-.jpg" alt="#"/></figure>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="read-more">
                     <a href="#">Read More</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Library
