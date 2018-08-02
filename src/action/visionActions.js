import axios from 'axios'
import actions from './common.js'

export function getVision(visions)
{  
    return {
        type : 'LOAD_VISIONS',
        visions
    }
}


export function loadVision()
{    
    return dispath =>{
            axios.get(actions.visionAction).then(
                resp=>{                                      
                    dispath(getVision(resp.data))
                }
            ).catch(err=>{
                console.log(err)
            })
    }
}