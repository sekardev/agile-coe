export default function articleReducers (state=[], action)
{
 
    switch(action.type)
    {
        case 'LOAD_VISIONS':              
            return action.visions
        case 'ADD_VISION':        
        if(action.vision.Id > 0)      
        {
          state = state.filter( vision => vision.Id !== action.vision.Id );
        }                      
        return [...state,action.vision];
        case 'DELETE_VISION':    
            return state.filter(item=> item.Id !== action.vision.Id)
        default :
            return state;
    
    }
}





