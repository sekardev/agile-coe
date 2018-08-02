import React from 'react'
import {connect} from 'react-redux'
import '../assests/css/article.css'
import {Link} from 'react-router'
import { loadArticle } from '../action/articleActions';

class ArticleListContainer extends React.Component
{    
        constructor(props)
        {            
         super(props); 
        }
        render()
        {        
            window.scrollTo(0, 0)    
            return (
                <div>
                <div className="container articlecontainer">
                
                <div className="row">
                {this.props.articles.map((article,i)=>{
                      return (             
                      <div className="h-25 col-md-6 col-lg-6" key={i}>
                       <Link  to={{ pathname: '/article/'+article.Id}}> 
                      <div className="card cardDiv" >
                <div className="row"> 
                  <div className="col-md-4">
                  <img className="card-img-top" src={article.Image} alt="Card image"  />
                  </div>
                  <div className="col-md-7">
                  <div className="card-body">
                    <p className="card-text">            
                    Published {article.CreatedDate} by {article.Author}</p>
                    <h4 className="card-title">{article.Title}</h4>
                    
                    <p className=""> {article.ShortDesc}   
                    </p>

                  </div>
                  </div>
                  </div>
                  </div> 
                  </Link>
                  <br/> </div> 
                    )
                  })}
                </div>
                </div>
                <br/>
                    </div>
            )
        }
}

const mapStateToProps = (state)=>
{   
    return {
        articles : state.articles
    }
}


export default connect(mapStateToProps)(ArticleListContainer);