export default function metricReducers (state=[], action)
{
 
    switch(action.type)
    {
        case 'LOAD_METRICS':              
            return action.metrics;
        default :
            return state;
    }
}





