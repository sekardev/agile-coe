import axios from 'axios'
import actions from './common.js'

export function getArticles(articles)
{  
    return {
        type : 'LOAD_ARTICLE',
        articles
    }
}

export function addArticle(article)
{  
    
    return {
        type : 'ADD_ARTICLE',
        article
    }
}


export function deleteArticle(article)
{
    
    return {
        type : 'DELETE_ARTICLE',
        article
    }
}

export function loadArticle()
{    
    return dispath =>{
            axios.get(actions.articleActionAPI).then(
                resp=>{                                                     
                    dispath(getArticles(resp.data))
                }
            ).catch(err=>{
                console.log(err)
            })
    }
}


export function addArticleAPI(article)
{    
    return dispath =>{
            axios.post(actions.articleActionAPI,article).then(
                (resp)=>{ 
                    article.Id = resp.data.Id
                    console.log(article);
                    dispath(addArticle(article)) 
                 }).catch(err=>{
                console.log(err)
            })
    }
}

export function deleteArticleAPI(article)
{    
    return dispath =>{
            axios.get(actions.articleActionAPI + "/delete/" + article.Id).then(()=>
             dispath(deleteArticle(article)) 
            ).catch(err=>{
                console.log(err)
            })
   }
   
}
