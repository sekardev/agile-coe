import React from 'react'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../assests/css/admin.css'
import ReactHtmlParser from 'react-html-parser';

const ArticleAdminPage = ({handleChange,handleShortDesc,fileChangedHandler,handleSubmit,
   onEditorStateChange,article, articles, handleShowGrid}) =>
{
  if(!article.showGrid)
  {
  return (
      <div>
        <div className="col-md-10 ">
        
        <table className="table table-hover table-bordered">
        <thead>
        <tr>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Author</th>                      
        <th scope="col">Action</th> 
        </tr>
        </thead>
        <tbody>
        {articles.map((art,i)=>{
               return(
                <tr >                      
                <td>{art.Title}</td>
                <td>{art.ShortDesc}</td>
                <td>{art.Author}</td>
                <td><button type="button" className="btn btn-danger btn-sm" 
              onClick={handleShowGrid}>Delete</button> </td>
                </tr>    
              )      
           })}
            </tbody>
            </table> </div>              
          </div>
  )
}
else 
{
        return (
            <div>
               <form >
               <div class="form-group row">
               <div class="col-sm-2">
                 <label class="col-form-label">Title</label>
                </div>
              <div class="col-sm-6">
              <input type="text" class="form-control" id="title"
                   value={article.Title}   onChange={handleChange} />   
              </div>
              </div>
              <div class="form-group row">
               <div class="col-sm-2">
                 <label class="col-form-label">Short Desc</label>
                </div>
              <div class="col-sm-6">
              <input type="text" class="form-control" id="title"
                   value={article.ShortDesc}   onChange={handleShortDesc} />   
              </div>
              </div>      
              <div class="form-group row">
               <div class="col-sm-2">
                 <label class="col-form-label">Description</label>
                </div>
              <div class="col-sm-8 editorclass">
              <Editor 
                     editorState={article.editorState}              
                     onEditorStateChange={onEditorStateChange}
                                           
                   />   
              </div>
              </div>                            
               
               <div class="form-group row">
               <div class="col-sm-2">
                 <label class="col-form-label">Image :</label>
                </div>
              <div class="col-sm-6">
              <input id="uploadfile" type="file" onChange={fileChangedHandler} /> 
              </div>
              </div>   
              <div class="form-group row">
               <div class="col-sm-2">
                 
                </div>
              <div class="col-sm-8">
              <button type="submit" className="btn btn-success btn-sm" onClick={handleSubmit}>
                 Save
               </button>
               <button type="button" className="btn btn-default btn-sm" 
              onClick={handleShowGrid}>Cancel</button> 
              </div>
              </div>   
              
              
               </form>  
                
                </div>
        )
      }
}

export default ArticleAdminPage;