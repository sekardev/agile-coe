import React from 'react'
import {connect} from 'react-redux'
import '../assests/css/article.css'
import '../assests/css/blog.css'
import view from "../assests/View.png";
import {Link} from 'react-router'
import moment from 'moment'

class ArticleListContainer extends React.Component
{    
    
    render()
    {        
        window.scrollTo(0, 0)    
        return (
            <div>
            
            
            <div class="container-fluid articlecontainer">
            
            
            
            <div class="row">
            {this.props.articles.map((article,i)=>{
                 const custDate = article.CreatedDate.slice(6, 10)+'-'+ article.CreatedDate.slice(3, 5) +'-'+ article.CreatedDate.slice(0,2);
                 const momentNow = moment(custDate).format('MMM DD, YYYY');        
                return(
                    
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6 item blogcards" >
                    <Link  to={{ pathname: '/article/'+article.Id}}> 
                    <div class="thumbnailblog">
                    <div class="thumbnail imagewrapper">  
                    <a class="">      
                    <img class="imgbloghover" src={article.Image}
                    alt="First" /> </a>       </div>
                    
                    <article class="title-author-box">
                    <h2 class="pintabheadingblog">
                    {article.Title}</h2>            <section>
                    <span class="author"> By {article.Author} </span>
                    </section>
                    
                    </article>
                    <section class="comviewsblog">
                    <span class="spanDate">{momentNow}</span> 
                    <span class="borderright"></span>
                    <span class="viewsblog">
                    <span class="hidden-xs"><i class="icon-Blog-View-icon"></i></span>
                    <span class="visible-xs-inline-block">
                    <img src={view} alt="Card" /></span> 251.4K</span>
                    
                    </section>
                    
                    </div> </Link>
                    </div> 
                )
                
            })
        }
        
        
        </div>
        </div>
        
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