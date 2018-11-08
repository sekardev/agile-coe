export default function carouselReducers (state=[], action)
{
 
    switch(action.type)
    {
        case 'LOAD_CAROUSEL':              
            return action.carousels;
        case 'ADD_CAROUSEL': 
        if(action.carousel.Id > 0)      
        {
          state = state.filter( carousel => carousel.Id !== action.carousel.Id );
        }                             
        return [...state,action.carousel];
        case 'DELETE_CAROUSEL':    
            return state.filter(item=> item.Id !== action.carousel.Id)
        default :
            return state;
    }
}





