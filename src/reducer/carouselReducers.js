export default function carouselReducers (state=[], action)
{
 
    switch(action.type)
    {
        case 'LOAD_CAROUSEL':              
            return action.carousels;
        case 'DELETE_CAROUSEL':
            return state.filter((data, i) => i !== action.id);
        default :
            return state;
    }
}





