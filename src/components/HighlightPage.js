import React from 'react'
import '../assests/css/vision.css'
import ReactHtmlParser from 'react-html-parser';

const HighlightPage = ({highlights})=>
{
    
        return (
            <div className="containerDiv">
                <div className="card">
               <div className="cardTitle">
            Success Stories
          </div>
          <div id="divHighCar" className="carousel slide" data-ride="carousel">
            
 
  <div className="carousel-inner">
      {highlights.map((highlight,i)=>{
            return(
                highlight.Order === 1 ?
              <div className="carousel-item active" key={i}>  
              <div className="row no-gutters highlightdesc">            
              <div className="col-auto">
              <img src={highlight.Image} alt={highlight.Title} 
                className="rounded circle highlightimg" />  
                 </div>
                <div className="col">
                <div className="card-block px-2 highlightdesc text-left">     
                {ReactHtmlParser(highlight.Description)}
                </div></div></div></div> : 
              <div className="carousel-item " key={i}>
              <div className="row no-gutters highlightdesc">
              <div className="col-auto"><img src={highlight.Image} alt={highlight.Name} 
                className="rounded circle" />    </div>
                <div className="col">
                <div className="card-block px-2 highlightdesc  text-left">
                {ReactHtmlParser(highlight.Description)}                                    
                </div></div></div></div> 
              
          )
        })}  
  </div>

  <ol className="carousel-indicators carousel-indicators-numbers">
  {highlights.map((highlight,i)=>{
            return(
              highlight.Order === 1 ? 
                    <li data-target="#divHighCar" data-slide-to= "0" className="active" key={i}></li>
                    :
                    <li data-target="#divHighCar" data-slide-to={highlight.Order - 1} key={i}></li>
            )})
    }
  </ol>
  </div>
  </div>
   </div>
        )
    }

export default HighlightPage;