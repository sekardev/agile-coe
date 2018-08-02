import axios from 'axios';
import actions from './common.js'

export function getEventAction(events)
{  
    return {
        type : 'LOAD_EVENT',
        events
    }
}

export function loadEvents()
{
    
    return dispatch=>{
        axios.get(actions.eventAction).then(
            resp=>{               
                dispatch(getEventAction((resp.data)))
            }
        ).catch(err=>{
            console.log(err)
        })
    }
}