import axios from 'axios'
import actions from './common.js'

export function getMenus(menus)
{  
    return {
        type : 'LOAD_MENUS',
        menus
    }
}


export function loadMenus()
{
    
    return dispath =>{
            axios.get(actions.menuActionAPI).then(
                resp=>{                  
                    
                    dispath(getMenus(resp.data))
                }
            ).catch(err=>{
                console.log(err)
            })
    }
}