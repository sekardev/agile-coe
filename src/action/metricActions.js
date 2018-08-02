import axios from 'axios'
import actions from './common.js'

export function getMetric(metrics)
{  
    return {
        type : 'LOAD_METRICS',
        metrics
    }
}


export function loadMetrics()
{    
    return dispath =>{
            axios.get(actions.metricAction).then(
                resp=>{                                      
                    dispath(getMetric(resp.data))
                }
            ).catch(err=>{
                console.log(err)
            })
    }
}