import React from 'react';
import {connect} from 'react-redux';
import TeamPage from '../components/TeamPage';
import '../assests/css/team.css'

class TeamPageContainer extends React.Component{
    

    render(){
        window.scrollTo(0, 0)
        return(<div>
                <TeamPage teamdetails={this.props.agileTeams}/>
             </div>)
    }
}

function mapStateToProps(state)
{
    
    
    return {
        agileTeams : state.agileTeams
    }
}

export default connect(mapStateToProps)(TeamPageContainer);