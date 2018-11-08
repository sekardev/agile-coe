import axios from 'axios'
import actions from './common.js'

export function getVision(visions)
{  
    return {
        type : 'LOAD_VISIONS',
        visions
    }
}

export function deleteVision(vision)
{  
    return {
        type : 'DELETE_VISION',
        vision
    }
}
export function addVision(vision)
{  
    
    return {
        type : 'ADD_VISION',
        vision
    }
}

export function addVisionAPI(vision)
{    
    return dispath =>{
            axios.post(actions.visionActionAPI,vision).then((resp)=> {             
             vision.Id = resp.data.Id
             vision.Order = resp.data.Order
             vision.Author = resp.data.Author
             vision.AssociateId = resp.data.AssociateId
             dispath(addVision(vision));             
            }).catch(err=>{
                console.log(err)
            })
    }
}


export function loadVision()
{    
    return dispath =>{
            axios.get(actions.visionActionAPI).then(
                resp=>{                                      
                    dispath(getVision(resp.data))
                }
            ).catch(err=>{
                console.log(err)
            })
    }
}


export function deleteVisionAPI(vision)
{    
    return dispath =>{
            axios.get(actions.visionActionAPI + "/delete/" + vision.Id).then(()=>
             dispath(deleteVision(vision)) 
            ).catch(err=>{
                console.log(err)
            })
   }
   
}