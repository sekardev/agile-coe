import initalState from '../store/initalState';

export default function merchantReducer(state = initalState.merchants, action)
{
    
    switch (action.type)
    {
        case 'ADD_MERCHANT':
            return [...state, Object.assign({},action.merchant)];
        default :        
            return state;
    }
}