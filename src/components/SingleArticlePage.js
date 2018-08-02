
import React from 'react'
import {Link} from 'react-router'
import lean from "../assests/LeanUX.png";
import view from "../assests/View.png";
import logo from "../assests/Logo.png";
import LeanUX_02 from "../assests/LeanUX_02.png";
import LeanUX_03 from "../assests/LeanUX_03.png";
import {connect} from 'react-redux';
import {loadArticleById, loadArticle } from '../action/articleActions'
import ReactHtmlParser from 'react-html-parser';

class SingleArticlePage extends React.Component
{    
    render(){
        var singlearticle = {};
        var articles = [];
        if(this.props.singleArticle)
        { 
            articles = this.props.articles;
            singlearticle = this.props.singleArticle;

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
            <div>22nd July 2018</div>
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
        <div className="col-md-6 ">  
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
                <div className="row otherArticletitle">                
                  <span>Other Articles </span>
                 </div>
                 {articles.map((article,i)=>{
                     return(
                    <div className="row otheraritclerow" key={i}>
                    <div className="col-md-12">
                        <Link to={{ pathname: '/article/'+article.Id}} > 
                        <span className="artTitle">{article.Title}</span> <br/>
                        <span className="artAuthor">{article.Author}</span>
                        </Link>
                     </div>
                     </div> )      
                 })}
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
