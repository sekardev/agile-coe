import axios from 'axios';
import actions from './common.js'

export function getTableAction(tables)
{  
    return {
        type : 'LOAD_TABLES',
        tables
    }
}

export function loadTables()
{
    
    return dispatch=>{
        axios.get(actions.tableActionAPI).then(
            resp=>{               
                dispatch(getTableAction((resp.data)))
            }
        ).catch(err=>{
            console.log(err)
        })
    }
}