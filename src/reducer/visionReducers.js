export default function articleReducers (state=[], action)
{
 
    switch(action.type)
    {
        case 'LOAD_VISIONS':              
            return action.visions;
        default :
            return state;
    }
}





