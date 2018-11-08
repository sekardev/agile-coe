export default function eventReducers (state=[], action)
{
 
    switch(action.type)
    {
        case 'LOAD_EVENT':      
        return action.events;     
        case 'DELETE_EVENT':
            return state.filter(item=> item.Id !== action.event.Id)
        default :
            return state;
    }
}





