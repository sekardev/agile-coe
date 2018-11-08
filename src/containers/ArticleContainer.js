import React from 'react'
import {connect} from 'react-redux'
import ArticlePage from '../components/ArticlePage';

import PropTypes  from 'prop-types'

class ArticleContainer extends React.Component
{    
        render()
        {      

            window.scrollTo(0, 0)
           
            return (
                
                <ArticlePage articlesdata={this.props.articles} />
            )
        }
}

const mapStateToProps = (state)=>
{   
    return {
        articles : state.articles
    }
}


// ArticleContainer.propTypes = {
//     articles: PropTypes.any.isRequired
// }


export default connect(mapStateToProps)(ArticleContainer);