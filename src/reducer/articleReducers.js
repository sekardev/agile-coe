export default function articleReducers (state=[], action)
{
 
    switch(action.type)
    {
        case 'LOAD_ARTICLE':              
            return action.articles;
        case 'FETCH_ARTICLE':
            return action.article;
        default :
            return state;
    }
}





