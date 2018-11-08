
import React from 'react'
import {Link} from 'react-router'
import view from "../assests/View.png";
import LeanUX_02 from "../assests/LeanUX_02.png";
import LeanUX_03 from "../assests/LeanUX_03.png";
import {connect} from 'react-redux';
import {loadArticleById, loadArticle } from '../action/articleActions'
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment'

class SingleArticlePage extends React.Component
{    
    render(){
        var singlearticle = {};
        var articles = [];
        if(this.props.singleArticle)
        { 
           
            articles = this.props.articles;
            singlearticle = this.props.singleArticle;
            const custDate = singlearticle.CreatedDate.slice(6, 10)+'-'+ singlearticle.CreatedDate.slice(3, 5) +'-'+ singlearticle.CreatedDate.slice(0,2);
            const momentNow = moment(custDate).format('MMM DD, YYYY');         
    return(
        
        <div>             
        <div className="container-fluid singlearticlemain" >

        <div className="row">
        <div className="col-md-9">

        <div className=" col-md-12 row">            
            
            <div className="col-sm-12">
            {/* <span className="articleTitle"> </span> */}
                <div className="col-sm-12 thumbnail text-left">
                    <img alt="" className="img-responsive singleArticleImage" src= {singlearticle.Image}
                     />

                    <div className="caption">
                        <h4>{singlearticle.Title}</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="row " >
            <div className="col-md-8 singlearticleheader">        
            <img alt="" className="rounded-circle circle" src={singlearticle.Avatar} / >   
            <div className="singlearticleauthor"> 
            <div>{singlearticle.Author}</div>
            <div>{momentNow}</div>
            </div>        
            </div>
            <div className="col-md-4 singlearticleview">
            <div className="">
                    <img src={view} alt="Card" /> 108 Views 
                    </div>   
            </div>    
        </div>
        <div className="row singlearticletitle">
        <div className="col-md-12 h4">  
        {singlearticle.ShortDesc}
        </div>
            </div>
            <div className="row singlearticlebody1">
        <div className="col-md-12 ">  
        {ReactHtmlParser(singlearticle.Description)}
        
        </div>
            </div>

            <div className=" row singlearticlebody2">
        <div className="col-md-6 "   >  
        <img alt="" 
            className="" src={LeanUX_02} / >

        </div>
        <div className="col-md-6 ">  
        <img alt="" 
            className=" " src={LeanUX_03} / >
        </div>
            </div>

        </div>
        <div className="col-md-3">
                <section className="otherArticles">                
                  <section class="arthead">Other Articles </section> 
                  <section>                 
                 {articles.map((article,i)=>{
                     return(
                    <section className="otheraritclerow" key={i}>
                    
                        <Link to={{ pathname: '/article/'+article.Id}} > 
                        <span className="arTitle">{article.Title}</span> <br/>
                        <span className="arAuthor">{article.Author}</span>
                        </Link>
                     
                     </section> )      
                 })}
                 </section>
                 </section>
            </div>
        </div>    

       
          </div>
            </div>
    )
    }
        else 
        {
          return(<div> No Article Found !!!</div>)
        }
    }
    
}



export default SingleArticlePage;
