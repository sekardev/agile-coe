import React from 'react'

const AgileCertificationPage = ()=>{
    return(
        <div>
            
        <div className="container article">
        <br/>
        <div className="row">
        <div className="col-md-6">
        <div className="text-left" >
        <h5>Latest Articles </h5>
         </div>
        </div>
        <div className="col-md-6">
        <div className="text-right" >
        <button type="button" className="btn btn-link articleButton">Show All Articles</button>
        
        </div>
        </div>       

        </div>
        <div className="row">
        <div className="col-md-6">
        <div className="card cardDiv" >
  <div className="row"> 
  	<div className="col-md-6">
    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(13).jpg" alt="Card image" />
    </div>
    <div className="col-md-6">
    <div className="card-body">
      <h4 className="card-title">John Doe</h4>
      <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      
    </div>
    </div>
    </div>
    </div> 
        </div>
        <div className="col-md-6">
        <div className="card cardDiv" >
  <div className="row"> 
  	<div className="col-md-6">
    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(14).jpg" alt="Card image" />
    </div>
    <div className="col-md-6">
    <div className="card-body">
      <h4 className="card-title">John Doe</h4>
      <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      
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
