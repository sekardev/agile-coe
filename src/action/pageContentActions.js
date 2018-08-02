import axios from 'axios'

export function getContent(data)
{  
    return {
        type : 'LOAD_CONTENTS',
        data
    }
}


export function addContent(data)
{  
    return {
        type : 'ADD_CONTENT',
        data
    }
}
export function loadContents()
{
    
    return dispath =>{
            axios.get('http://INDINVTRY1011/AgileCOE/api/page').then(
                resp=>{            
                    dispath(getContent(resp.data))
                }
            ).catch(err=>{
                console.log(err)
            })
    }
}