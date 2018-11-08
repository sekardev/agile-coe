import React from 'react'
import '../assests/css/contact.css'


const TeamComponent = ({teams})=>{

if(teams !== 'undefined' && teams.length > 0)
{
  
return(
    
    <div>
<div className="flex-container">
    <div className="item1">        
        <div className="title text-center" >          
          <h4>Know you Agile Champions<br/>
            <small className="safe">Build a platform to share Agile Knowledge, experience and facilitate Agile </small>
          </h4>
        </div>
      </div>
      <div className="item2">        
        <section className="leftT">
        <section className="headT">
        <div className="col-lg-6 col-sm-6 text-center mb-4">
          <section className="headT1"> 
            <section>
            <div className="name">{teams[1].Name}
            </div>
            <img className="rounded-circle Img" src={teams[1].Avatar} alt="" />
            <div className="name">
              OFFSHORE <br/>
            <span className="safe">
              {teams[1].AgileRole}
              </span>
            </div>
                <section className="Hrdivider">
              </section>    
            </section>   
           
           </section>
           
        </div>
        <div class="divider">
        </div>
        <div className="col-lg-6 col-sm-6 text-center mb-4">
        <section className="headT1"> 
          <section>
          <div className="name">{teams[2].Name}
          </div>
          <img className="rounded-circle Img" src={teams[2].Avatar} alt="" />
          <div className="name">
            OFFSHORE <br/>
          <span className="safe">
            {teams[2].AgileRole}
            </span>
          </div>
         
          </section>   
          
         </section>
         
      </div>
        </section>
        </section>
        <section className="rightT">

        <section className="agile">
        {teams.filter((t)=> (t.SafeAgile === 1 )).map((team,i)=>{
        return(  
        <div className="col-md-4 col-sm-4 text-center safeAgile" >
          <img className="rounded-circle Img" src={team.Avatar} alt=""/>
          <section className="teamDetails" >
          <span className="name">{team.Name} <br/>
            <small className="safe">{team.SafeAgile === 1 ? "Safe Agile" : "Scrum Master" }</small>
          </span>
           </section> 
        </div>)
        })}
         </section>
         <section> 
         <div className="name">
         Reach out to Agile 
          <span className="safe">
          Training and Transformation Team
            </span>
          </div>
         
         </section>
    <section className="scrum"> 
    
      {teams.filter((t)=> (t.ScrumMaster === 1 )).map((team,i)=>{
        return(  
        <div className="col-md-4 col-sm-4 text-center safeAgile" >
          <img className="rounded-circle Img" src={team.Avatar} alt=""/>
          <section className="teamDetails" >
          <span className="name" >{team.Name} <br/>
            <small className="safe">{team.ScrumMaster === 1 ? "Safe Agile" : "Scrum Master" }</small>
          </span>          
           </section> 
           
        </div>)
        })}
        </section>

        </section>
      </div>

    </div>
    
    </div>


)
}
else 
{
  return(<div>No Record </div>)
}

}

export default TeamComponent;