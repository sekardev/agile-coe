import React from 'react'
import '../assests/css/contact.css'


const Contactus = ({teams})=>{

if(teams !== 'undefined' && teams.length > 0)
{
  
return(
    
    <div>
<div className="flex-container">
      
      <div className="item1">
        
        <div className="head" >
          <img className="rounded-circle Img"  src={teams[0].Avatar} alt="" />
          <h4>{teams[0].Name} <br/>
            <small>{teams[0].AgileRole}</small>
          </h4>
         
        </div>
        
      </div>
      
      <div className="item2">
     
        <div className="col-lg-6 col-sm-6 text-center mb-4">
          <img className="rounded-circle Img" src={teams[1].Avatar} alt="" />
          <h5>{teams[1].Name} <br/>
            <small>{teams[1].AgileRole}</small>
          </h5>
          
        </div>
        <div className="col-lg-6 col-sm-6 text-center mb-4">
          <img className="rounded-circle Img" src={teams[2].Avatar} alt=""/>
          <h5>{teams[2].Name} <br/>
            <small>{teams[2].AgileRole}</small>
          </h5>
       
        </div>
       
        </div>
        <div className="item3">
        {teams.filter((t)=> (t.SafeAgile === 1 )).map((team,i)=>{
        return(  
        <div className="col-md-2 col-sm-2 text-center team" >
          <img className="rounded-circle Img" src={team.Avatar} alt=""/>
          <h6>{team.Name} <br/>
            <small className="safe">{team.SafeAgile === 1 ? "Safe Agile" : "Scrum Master" }</small>
          </h6>
        </div>)
        })}
      </div>  
      <div className="item3">
      {teams.filter((t)=> (t.ScrumMaster===1 )).map((team,i)=>{
        return(  
        <div className="col-md-2 col-sm-2 text-center team" >
          <img className="rounded-circle Img" src={team.Avatar} alt=""/>
          <h6>{team.Name} <br/>
            <small className="agile">{team.SafeAgile === 1 ? "Safe Agile" : "Scrum Master" }</small>
          </h6>
        </div>)
        })}
     
       </div> 

    </div></div>


)
}
else 
{
  return(<div>No Record </div>)
}

}

export default Contactus;