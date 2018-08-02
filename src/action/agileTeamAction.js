import axios from 'axios';
import actions from './common.js'

export function getAgileTeam(agileTeams)
{  
    return {
        type : 'LOAD_AGILETEAM',
        agileTeams
    }
}

export function loadAgileTeams()
{
    
    return dispatch=>{
        axios.get(actions.agileTeamAction).then(
            resp=>{               
                dispatch(getAgileTeam((resp.data)))
            }
        ).catch(err=>{
            console.log(err)
        })
    }
}