export default function eventReducers (state=[], action)
{
 
    switch(action.type)
    {
        case 'LOAD_EVENT':              
            return action.events;
        default :
            return state;
    }
}





