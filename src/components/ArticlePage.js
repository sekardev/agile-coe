
import React from 'react'
import {Link} from 'react-router'
import view from "../assests/View.png";
import '../assests/css/article.css' 
const ArticlePage = ({articlesdata})=>{
    return(               
        
        <div className = "flexcontainer"> 
        <section className="articleTitle">            
                Frameworks            
        </section>     

        <section className="frameworks">
        {articlesdata.slice(0,3).map((article,i)=>{
              return (  
                <Link    key={article.Id}  to={{ pathname: '/article/'+article.Id}}> 
                <div className="containerImg">
                <img src={article.Image} className="card-img-top" alt="Notebook" />
                <div className="content">                
                <p className="articlePar">
             
                {article.Title}</p>
                </div>
                </div>
                </Link>         
               )
        })}
         </section> 
        </div>
    )
}

export default ArticlePage;
