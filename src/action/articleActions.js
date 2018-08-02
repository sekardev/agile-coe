import axios from 'axios'
import actions from './common.js'

export function getArticles(articles)
{  
    return {
        type : 'LOAD_ARTICLE',
        articles
    }
}

export function getArticle(article)
{
    
    return {
        type : 'FETCH_ARTICLE',
        article
    }
}

export function loadArticle()
{    
    return dispath =>{
            axios.get(actions.articleAction).then(
                resp=>{                                      
                    dispath(getArticles(resp.data))
                }
            ).catch(err=>{
                console.log(err)
            })
    }
}

export function loadArticleById(Id)
{    
    return dispath =>{
            axios.get(actions.articleByIdAction + Id).then(
                resp=>{     
                    console.log('loadArticleById' + resp.data)                                 
                    dispath(getArticle(resp.data))
                }
            ).catch(err=>{
                console.log(err)
            })
    }
}
export function addArticle(article)
{    
    return dispath =>{
            axios.post(actions.articleAction,article).then(()=> dispath(loadArticle())  ).catch(err=>{
                console.log(err)
            })
    }
}