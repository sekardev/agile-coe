export default function tableReducers (state=[], action)
{
 
    switch(action.type)
    {
        case 'LOAD_TABLES':              
            return action.tables;
        default :
            return state;
    }
}





