import React from 'react'
import '../assests/css/event.css'
import moment from 'moment'

const EventsPage = ({events})=>{

 // str.slice(0, 2) +str.slice(3, 5) + 
  // ;
  
        return (
          <div className="eventsDiv" id="divStyle" >
     
        <div className="cardEvent" >
          <div className="cardTitle">
          Programs & Events         
          </div>
          
          {events.map((event,i)=>{ 
            moment.locale('en');  
            const custDate = event.StartDate.slice(6, 10)+'-'+ event.StartDate.slice(3, 5) +'-'+ event.StartDate.slice(0,2);
            const momentNow = moment(custDate).format('DD MMM YYYY');          
            return(
            <div className="container eventCont" key={i}> 
            <div className="row">
            <span className="subTitle"> {momentNow} | TCO, Chennai </span>
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