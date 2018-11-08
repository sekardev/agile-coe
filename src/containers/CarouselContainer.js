import React from 'react'
import {connect} from 'react-redux'
import CarouselPage from '../components/CarouselPage';
import PropTypes  from 'prop-types'

class CarouselContainer extends React.Component
{    
     
        render()
        {       
              return (
            <CarouselPage carouseldatas={this.props.carousels} />                    
            )
        }
}

const mapStateToProps = (state)=>
{   
    return {
        carousels : state.carousels
    }
}


CarouselContainer.propTypes = {
    carousels: PropTypes.any.isRequired
}


export default connect(mapStateToProps)(CarouselContainer);