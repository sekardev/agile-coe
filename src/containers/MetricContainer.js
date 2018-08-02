import React from 'react'
import {connect} from 'react-redux'
import MetricsPage from '../components/MetricsPage';



class MetricContainer extends React.Component
{    
        render()
        {   
            window.scrollTo(0, 0)         
            return (
                <MetricsPage metrics={this.props.metrics} />
            )
        }
}

const mapStateToProps = (state)=>
{   
    return {
        metrics : state.metrics
    }
}


export default connect(mapStateToProps)(MetricContainer);