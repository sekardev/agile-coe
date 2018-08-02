import React from 'react'
import '../assests/css/event.css'

const EventsPage = ({events})=>{

    
        return (
          <div className="eventsDiv" id="divStyle" >
     
        <div className="cardEvent" >
          <div className="cardTitle">
          Programs & Events         
          </div>
          {events.map((event,i)=>{
            return(
            <div className="container" key={i}> 
            <div className="row">
            <span className="subTitle"> 20 Aug - 25 Aug 2018 | TCO, Chennai </span>
           <h6>{event.Title}</h6>
              {event.Description}
            </div>
       
          <hr/>
          </div>
            )
          })
          }        
    </div>
  </div>
        )
    }

export default EventsPage;