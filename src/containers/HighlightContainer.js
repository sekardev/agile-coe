import React from 'react'
import {connect} from 'react-redux'
import HighlightPage from '../components/HighlightPage';
import '../assests/css/article.css'


class HighlightContainer extends React.Component
{    
    
        render()
        {    
            window.scrollTo(0, 0)        
            return (
                <HighlightPage highlights={this.props.highlights} />
            )
        }
}


const mapStateToProps = (state)=>
{   
    return {
        highlights : state.highlights
    }
}


export default connect(mapStateToProps)(HighlightContainer);