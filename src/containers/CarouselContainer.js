import React from 'react'
import {connect} from 'react-redux'
import CarouselPage from '../components/CarouselPage';


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


export default connect(mapStateToProps)(CarouselContainer);