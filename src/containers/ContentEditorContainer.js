import React from 'react'
import {connect} from 'react-redux'
import ContentEditorPage from '../components/ContentEditorPage';
import '../assests/css/article.css'
import { loadHighlights } from '../action/highlightActions';

class ContentEditorContainer extends React.Component
{    
    
        render()
        {    
            window.scrollTo(0, 0)        
            return (
                <ContentEditorPage />
            )
        }

       
}


// const mapStateToProps = (state)=>
// {   
//     return {
//         highlights : state.highlights
//     }
// }


export default ContentEditorContainer;