import React from 'react'
import {connect} from 'react-redux'
import VisionPage from '../components/VisionPage';
import '../assests/css/article.css'
import { loadVision } from '../action/visionActions';

class VisionContainer extends React.Component
{    
      
        render()
        {      
            window.scrollTo(0, 0)      
            return (
                <VisionPage visions = {this.props.visions} />
            )
        }
}

const mapStateToProps = (state)=>
{   
    return {
        visions : state.visions
    }
}


export default connect(mapStateToProps)(VisionContainer);