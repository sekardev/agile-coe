export default function articleReducers (state=[], action)
{
 
    switch(action.type)
    {
        case 'LOAD_ARTICLE':  
        return action.articles;
        case 'ADD_ARTICLE':        
        if(action.article.Id > 0)      
        {
          state = state.filter( article => article.Id !== action.article.Id );
        }        
        return [...state,action.article];
        
        case 'DELETE_ARTICLE':
            return state.filter(item=> item.Id !== action.article.Id)
        case 'FETCH_ARTICLE':
            return action.article;
        default :
            return state;
    }
}





