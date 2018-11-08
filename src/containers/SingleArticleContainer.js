import React from 'react';
import {connect} from 'react-redux';
import SingleArticlePage from '../components/SingleArticlePage';
import '../assests/css/team.css'

class SingleArticleContainer extends React.Component{        
   
    render(){
        window.scrollTo(0, 0)
        return(<div>
                <SingleArticlePage singleArticle={this.props.article[0]} articles={this.props.articles}  />
             </div>)
    }
}

function mapStateToProps(state,props)
{   
    
    return {
        articles : state.articles,
        article : state.articles.filter((a)=>a.Id == props.params.id)
    }
}

export default connect(mapStateToProps)(SingleArticleContainer);