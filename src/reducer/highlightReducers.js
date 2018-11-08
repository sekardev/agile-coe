export default function highlightReducers (state=[], action)
{
 
    switch(action.type)
    {
        case 'LOAD_HIGHLIGHT':        
        return  action.highlights; 
          
        case 'ADD_HIGHLIGHT':
        if(action.highlight.Id > 0)      
        {
          state = state.filter( highlight => highlight.Id !== action.highlight.Id );
        }        
        return [...state,action.highlight]; 
        
        case 'DELETE_HIGHLIGHT':
        return state.filter(item=> item.Id !== action.highlight.Id);
        default :
            return state;
    }
}





