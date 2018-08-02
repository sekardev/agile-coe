import React from 'react'

const AgileCertificationPage = ()=>{
    return(
        <div>
            
        <div className="container article">
        <br/>
        <div className="row">
        <div class="col-md-6">
        <div className="text-left" >
        <h5>Latest Articles </h5>
         </div>
        </div>
        <div class="col-md-6">
        <div className="text-right" >
        <button type="button" className="btn btn-link articleButton">Show All Articles</button>
        
        </div>
        </div>       

        </div>
        <div className="row">
        <div class="col-md-6">
        <div class="card cardDiv" >
  <div class="row"> 
  	<div class="col-md-6">
    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(13).jpg" alt="Card image" />
    </div>
    <div class="col-md-6">
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      
    </div>
    </div>
    </div>
    </div> 
        </div>
        <div class="col-md-6">
        <div class="card cardDiv" >
  <div class="row"> 
  	<div class="col-md-6">
    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(14).jpg" alt="Card image" />
    </div>
    <div class="col-md-6">
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      
    </div>
    </div>
    </div>
    </div> 
        </div>

        </div>
        </div>
        <br/>
            </div>
    )
}

export default AgileCertificationPage;
