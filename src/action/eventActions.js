import axios from 'axios';
import actions from './common.js'

export function getEventAction(events)
{  
    return {
        type : 'LOAD_EVENT',
        events
    }
}

export function deleteArticle(event)
{
    
    return {
        type : 'DELETE_EVENT',
        event
    }
}
export function loadEvents()
{
    
    return dispatch=>{
        axios.get(actions.eventActionAPI).then(
            resp=>{               
                dispatch(getEventAction((resp.data)))
            }
        ).catch(err=>{
            console.log(err)
        })
    }
}


export function deleteEventAPI(event)
{    
    return dispath =>{
            axios.get(actions.eventActionAPI + "/delete/" + event.Id).then(()=>
             dispath(deleteArticle(event)) 
            ).catch(err=>{
                console.log(err)
            })
   }
   
}
