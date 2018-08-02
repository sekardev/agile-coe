import React from 'react'
import ReactHtmlParser from 'react-html-parser';

const CarouselPage = ({carouseldatas})=>{
    return(

        <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
        {carouseldatas.map((carous,i)=>{
          return(
            carous.Order === 1 ? 
            <li data-target="#demo" data-slide-to= "0" className="active" key={i}></li>
            :
            <li data-target="#demo" data-slide-to={carous.Order - 1} key={i}></li>
          )})            
        }    
        </ul>
  <div className="carousel-inner">
      {carouseldatas.map((carous,i)=>{
            return(
                carous.Order === 1 ?
              <div className="carousel-item active" key={i}>
                <div className="row no-gutters carouselDiv">            
                <div className="col">
                <div className="card-block px-2 ">                                    
                {ReactHtmlParser(carous.Description)}
                </div></div></div>
              
              </div> : 
              <div className="carousel-item " key={i}>
              {/* <img src={carous.Path} alt={carous.Name} /> */}
             
                <div className="row no-gutters carouselDiv">            
                <div className="col">
                <div className="card-block px-2 ">                    
                {ReactHtmlParser(carous.Description)}
                </div>
                </div>
                </div>
                
              </div> 


          )
        })}   
  </div>
  
  {/*
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
<span className="carousel-control-prev-icon"></span>
</a>
  */}
  
            <br/>
           
            </div>
    )
}

export default CarouselPage;
