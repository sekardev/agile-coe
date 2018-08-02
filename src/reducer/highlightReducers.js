export default function highlightReducers (state=[], action)
{
 
    switch(action.type)
    {
        case 'LOAD_HIGHLIGHT':              
            return action.highlights;
        default :
            return state;
    }
}





