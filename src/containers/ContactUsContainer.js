import React from 'react'
import {connect} from 'react-redux'
import ContactUs from '../components/ContactUs';
import PropTypes from 'prop-types'
import TeamComponent from '../components/Team'


class ContactUsContainer extends React.Component
{    
        render()
        {   
            window.scrollTo(0, 0)         
            return (
                // <ContactUs teams={this.props.teams} />
                <TeamComponent teams={this.props.teams} />
            )
        }
}

const mapStateToProps = (state)=>
{   
    return {
        teams : state.agileTeams
    }
}
ContactUsContainer.propTypes ={
    teams : PropTypes.array.isRequired
}

export default connect(mapStateToProps)(ContactUsContainer);