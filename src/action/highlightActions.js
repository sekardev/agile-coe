import axios from 'axios'
import actions from './common.js'

export function getHighlights(highlights)
{  
    
    return {
        type : 'LOAD_HIGHLIGHT',
        highlights
    }
}

export function addHighlight(highlight)
{  
    
    return {
        type : 'ADD_HIGHLIGHT',
        highlight
    }
}

export function deleteHighlight(highlight)
{  
    
    return {
        type : 'DELETE_HIGHLIGHT',
        highlight
    }
}


export function loadHighlights()
{    
    return dispath =>{
            axios.get(actions.highlightActionAPI).then(
                resp=>{                                      
                    dispath(getHighlights(resp.data))
                }
            ).catch(err=>{
                console.log(err)
            })
    }
}
export function addHighlightAPI(highlight)
{    
    return dispath =>{        
            axios.post(actions.highlightActionAPI,highlight).then(
                (resp)=> {
                    highlight.Id = resp.data.Id
                    highlight.Order = resp.data.Order                    
                    dispath(addHighlight(highlight))}).catch(err=>{
                console.log(err)
            })
    }
}
export function deleteHighlightAPI(highlight)
{    
    return dispath =>{
            axios.get(actions.highlightActionAPI + "/delete/" + highlight.Id).then(()=>
             dispath(deleteHighlight(highlight)) 
            ).catch(err=>{
                console.log(err)
            })
   }    
}