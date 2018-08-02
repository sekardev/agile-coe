import React from 'react'
import {connect} from 'react-redux'
import EventsPage from '../components/EventsPage';



class EventContainer extends React.Component
{    
        render()
        {   
            window.scrollTo(0, 0)         
            return (
                <EventsPage events={this.props.events} />
            )
        }
}

const mapStateToProps = (state)=>
{   
    return {
        events : state.events
    }
}


export default connect(mapStateToProps)(EventContainer);