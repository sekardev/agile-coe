export default function pageContentReducers (state=[], action)
{
 
    switch(action.type)
    {
        case 'LOAD_CONTENTS':              
            return action.data;
            case 'ADD_CONTENT':              
            return action.data;
        default :
            return state;
    }
}





