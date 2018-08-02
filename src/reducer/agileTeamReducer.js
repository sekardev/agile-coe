export default function AgileTeamreducer (state=[],action){
    switch(action.type)
    {
        case 'LOAD_AGILETEAM':
            return action.agileTeams;
        default:
            return state;
    
    }
}