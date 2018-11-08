import React from 'react'
import '../assests/css/vision.css'
import ReactHtmlParser from 'react-html-parser';

const VisionPage = ({visions})=>
{
    if({visions})
    {
        return (
            <div className="containerDiv">
                <div className="card">
               <div className="cardTitle">
          Leader Vision 
          </div>
          <div id="divVisionCar" className="carousel slide" data-ride="carousel">
            

  <div className="carousel-inner">
      {visions.map((vision,i)=>{
            return(
                vision.Order === 1 ?
              <div className="carousel-item active" key={i}>  
              <div className="row no-gutters">            
              <div className="col-auto"><img src={vision.Avatar} alt={vision.Name} 
                className="rounded-circle circle" />   </div>
                <div className="col">
                <div className="card-block px-2 text-left carddescription">               
                <div className="card-block px-2">
                    <h5 className="card-title">{vision.Name}</h5>
                    <span className="">{vision.AgileRole}</span>                                      
                </div>
                </div>
            </div>

             </div>
             <div className="row cardtestimonial">
                 <div className="col text-left">           
                   Dear All, {ReactHtmlParser(vision.Testimonial)}                
                    </div>
              </div>
              </div> : 
              <div className="carousel-item " key={i}>
              <div className="row no-gutters">
              <div className="col-auto"><img src={vision.Avatar} alt={vision.Name} 
                className="rounded-circle circle" />    </div>
                <div className="col">
                <div className="card-block px-2 text-left carddescription">               
                <div className="card-block px-2">
                <h5 className="card-title">{vision.Name}</h5>
                <span className="">{vision.AgileRole}</span>                                         
                </div>
                </div>
            </div>
               </div> 
               <div className="row cardtestimonial">
            <div className="col text-left">           
            Dear All,{ReactHtmlParser(vision.Testimonial)}                     
            </div>
              </div>
                
              </div> 
              
          )
        })}  
  </div>
  <ol className="carousel-indicators carousel-indicators-numbers">
  {visions.map((vision,i)=>{
            return(
                    vision.Order === 1 ? 
                    <li data-target="#divVisionCar" data-slide-to= "0" className="active" key={i}></li>
                    :
                    <li data-target="#divVisionCar" data-slide-to={vision.Order - 1} key={i}></li>
            )})
    }
  </ol>
  </div>
  </div>
   </div>
        )
    }
    else 
    return(
        <div className="containerDiv">
           
        No Visions 
        </div>
    )
        
    }

export default VisionPage;