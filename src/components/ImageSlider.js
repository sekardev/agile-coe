import React from 'react'
import '../assests/css/home.css'
import Slider from "react-slick";

//class ImageSlider extends React.Component
const ImageSlider=({AgileTeamMembers})=>
{
  
  let members = AgileTeamMembers.length>1?AgileTeamMembers:[];
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      
        return (
            <div>

  <Slider {...settings}> 
  {members.map( (team,i) =>
    <div className="col-lg-3 col-md-3 col-sm-2 mb-lg-0 mb-5" key={i}>
      <div className="avatar mx-auto">
        <img src={team.Avatar}
         className="rounded-circle z-depth-1  Img-style" alt="Sample avatar" />
      </div>
      <h6 className="font-weight-bold mt-4 mb-3">{team.Name}</h6>
    </div>
  )}
  </Slider>
     </div>
        )
    }

export default ImageSlider;