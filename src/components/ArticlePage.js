
import React from 'react'
import {Link} from 'react-router'
import view from "../assests/View.png";

const ArticlePage = ({articlesdata})=>{
    return(
        <div>
        <div className="container article">
        <br/>
        <div className="row">
        <div className="col-md-6">
        <div className="articleTitle" >
        <span>Latest Articles </span>
         </div>
        </div>
        <div className="col-md-6">
        <div className="articleTitleRight" >        
        <Link className="articleButton btn btn-outline-dark btn-sm" to="/articles" >Show All </Link>    
        
        </div>
        </div>    
        </div>

        <div className="row">
        {articlesdata.filter((article)=> article.Id < 3).map((article,i)=>{
              return (  
                <div className="col-md-6 col-sm-6 cardRow" key={i}>    
                 <Link  to={{ pathname: '/article/'+article.Id}}> 
                 <div className="card cardDiv " >
              <div className="row">  
              <div className="col-md-5 col-sm-5">
               <img className="card-img-top" src={article.Image} alt="Card" />
               </div>
               <div className="col-md-7 col-sm-7">
                
                <div className="card-body">
                <p className="subTitleArticle">            
                Published {article.CreatedDate} by {article.Author}</p>
                <h4 className="card-title">{article.Title}</h4>
                <p > {article.ShortDesc}             
                </p>
                <div className="articleview">
                <img src={view} alt="Card" /> 108 Views 
                </div></div></div></div></div>
              </Link>
              </div>
            )
          })}
        </div>
        </div>
        <br/>
            </div>
    )
}

export default ArticlePage;
