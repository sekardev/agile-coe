import React from 'react'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../assests/css/admin.css'
import ReactHtmlParser from 'react-html-parser';

const HighlightAdminPage = ({handleChange,fileChangedHandler,
  handleSubmit,onEditorStateChange,highlight,highlights,handleShowGrid}) =>
{
        if(!highlight.showGrid)
        {
        return (
            <div>
              <div className="col-md-10 ">
              
              <table className="table table-hover table-bordered">
              <thead>
              <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Order</th>              
              <th scope="col">Action</th>   
              </tr>
              </thead>
              <tbody>
              {highlights.map((hghlght,i)=>{
                     return(
                      <tr >                      
                      <td>{hghlght.Title}</td>
                      <td>{ReactHtmlParser(hghlght.Description)}</td>
                      <td>{hghlght.Order}</td>
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
             <form>
             <div className="form-group row">
             <div className="col-sm-2">
               <label className="col-form-label">Title :</label>
              </div>
            <div className="col-sm-6">
            <input type="text" className="form-control" id="title"
                 value={highlight.Title}   onChange={handleChange} />   
            </div>
            </div>
            <div className="form-group row">
             <div className="col-sm-2">
               <label className="col-form-label">Description :</label>
              </div>
            <div className="col-sm-8 editorclass">
            <Editor 
                   editorState={highlight.editorState}              
                   onEditorStateChange={onEditorStateChange}
                                         
                 />   
            </div>
            </div>              
            
             <div className="form-group row">
             <div className="col-sm-2">
               <label className="col-form-label">Image :</label>
              </div>
            <div className="col-sm-8">
            <input id="uploadfile" type="file" onChange={fileChangedHandler} />
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

export default HighlightAdminPage;