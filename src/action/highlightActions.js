import axios from 'axios'
import actions from './common.js'

export function getHighlights(highlights)
{  
    
    return {
        type : 'LOAD_HIGHLIGHT',
        highlights
    }
}


export function loadHighlights()
{    
    return dispath =>{
            axios.get(actions.highlightAction).then(
                resp=>{                                      
                    dispath(getHighlights(resp.data))
                }
            ).catch(err=>{
                console.log(err)
            })
    }
}
export function addHighlights(highlight)
{    
    return dispath =>{
            axios.post(actions.addHighlightAction,highlight).then(()=> dispath(loadHighlights())  ).catch(err=>{
                console.log(err)
            })
    }
}
