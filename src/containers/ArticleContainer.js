import React from 'react'
import {connect} from 'react-redux'
import ArticlePage from '../components/ArticlePage';
import '../assests/css/article.css'


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


export default connect(mapStateToProps)(ArticleContainer);