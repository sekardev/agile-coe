export default function menuReducers (state=[], action)
{
 
    switch(action.type)
    {
        case 'LOAD_MENUS':    
        return  action.menus;
        default :
            return state;
    }
}





