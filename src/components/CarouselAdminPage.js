import React from 'react'
import { Editor } from 'react-draft-wysiwyg';
import '../assests/css/admin.css'
import ReactHtmlParser from 'react-html-parser';

const CarouselAdminPage = ({handleChange,fileChangedHandler,handleSubmit,
  onEditorStateChange,carousel,carousels,handleEdit,handleShowGrid,handleDelete}) =>
  {
    if(!carousel.showGrid)
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
        {carousels.map((caro,i)=>{
          return(
            <tr key={i} >                      
            <td>{caro.Title}</td>
            <td>{ReactHtmlParser(caro.Description)}</td>
            <td>{caro.Order}</td>
            <td id="tdAction"><button type="button" className="btn btn-danger btn-sm btngrp" 
            onClick={()=> handleDelete(caro.Id,'carousel')}>Delete</button>
             <button type="button" className="btn btn-info btn-sm btngrp" 
              onClick={()=>handleEdit(caro.Id,'carousel')}>Edit</button> 
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
        <label className="col-form-label">Title :</label>
        </div>
        <div className="col-sm-8">
        <input
        type="text"
        className="form-control"
        id="title"
        value={carousel.Title}
        onChange={handleChange} />       
        </div>
        </div>    
        <div className="form-group row">
        <div className="col-sm-2">
        <label className="col-form-label">Description :</label>
        </div>
        <div className="col-sm-8 editorclass">
        <Editor 
        editorState={carousel.editorState}              
        onEditorStateChange={onEditorStateChange}
        
        />     
        </div>
        </div>                
        <div className="form-group row">
        <div className="col-sm-2">
        <label className="col-form-label">Image :</label>
        </div>
        <div className="col-sm-8 ">
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
  
  export default CarouselAdminPage;