import React from 'react'
import { Editor } from 'react-draft-wysiwyg';
import '../assests/css/admin.css'
import AssociateDropdown from './AssociateDropdown'

const ArticleAdminPage = ({handleChange,handleShortDesc,fileChangedHandler,handleSubmit,
   onEditorStateChange,article, articles, handleShowGrid,handleEdit, handleDelete, associates,handleAssociateChange}) =>
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
        <th scope="col">Author</th>                      
        <th scope="col">Action</th> 
        </tr>
        </thead>
        <tbody>
        {articles.map((art,i)=>{
               return(
                <tr key={i} >                      
                <td>{art.Title}</td>                
                <td>{art.Author}</td>
                <td id="tdAction">      
                                           
                  <button type="button" className="btn btn-danger btn-sm btngrp" 
              onClick={()=>handleDelete(art.Id,'article')}>Delete
              </button>
              <button type="button" className="btn btn-info btn-sm btngrp" 
              onClick={()=>handleEdit(art.Id,'article')}>Edit</button> 
               </td>
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
               <div className="form-group row">
               <div className="col-sm-2">
                 <label className="col-form-label">Choose Associate:</label>
                </div>           
                <div className="col-sm-6">
                <AssociateDropdown associates = {associates} handleChange= {handleAssociateChange} selectedValue={article.AssociateId} />
                </div>
               </div>
               <div className="form-group row">
               <div className="col-sm-2">
                 <label className="col-form-label">Title</label>
                </div>
              <div className="col-sm-6">
              <input type="text" className="form-control" id="title"
                   value={article.Title}   onChange={handleChange} />   
              </div>
              </div>            
              <div className="form-group row">
               <div className="col-sm-2">
                 <label className="col-form-label">Description</label>
                </div>
              <div className="col-sm-8 editorclass">
              <Editor 
                     editorState={article.editorState}              
                     onEditorStateChange={onEditorStateChange}
                                           
                   />   
              </div>
              </div>                            
               
               <div className="form-group row">
               <div className="col-sm-2">
                 <label className="col-form-label">Image :</label>
                </div>
              <div className="col-sm-6">
              <input id="uploadfile" type="file" onChange={fileChangedHandler} /> 
              <label className="col-form-label">{article.ImageName}</label>
              </div>
              </div>   
              <div className="form-group row">
               <div className="col-sm-2">
                 
                </div>
              <div className="col-sm-8">
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