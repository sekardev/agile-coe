import React from 'react'
import { Editor } from 'react-draft-wysiwyg';
import '../assests/css/admin.css'
import ReactHtmlParser from 'react-html-parser';
import AssociateDropdown from './AssociateDropdown'
const VisionAdminPage = ({handleChange,fileChangedHandler,handleSubmit,
  onEditorStateChange,vision,visions,handleShowGrid,handleEdit,associates,handleDelete,handleAssociateChange}) =>
  {
    if(!vision.showGrid)
    {
      return (
        <div>
        <div className="col-md-10 ">
        
        <table className="table table-hover table-bordered">
        <thead>
        <tr>
        <th scope="col">Vision</th>
        <th scope="col">Author</th>        
        <th scope="col">Order</th>   
        <th scope="col">Action</th>           
        </tr>
        </thead>
        <tbody>
        {visions.map((vis,i)=>{
          return(
            <tr key={i} >                      
            
            <td>{ReactHtmlParser(vis.Testimonial)}</td>
            <td>{vis.Name}</td>
            <td>{vis.Order}</td>
            <td id="tdAction"><button type="button" className="btn btn-danger btn-sm btngrp" 
            onClick={()=> handleDelete(vis.Id,'vision')}>Delete</button>           
              <button type="button" className="btn btn-info btn-sm btngrp" 
              onClick={()=>handleEdit(vis.Id,'vision')}>Edit</button> 
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
                <AssociateDropdown associates = {associates} 
                handleChange= {handleAssociateChange} 
                selectedValue={vision.AssociateId}
                />
                </div>
        </div>
        <div className="form-group row">
        <div className="col-sm-2">
        <label className="col-form-label">Vision :</label>
        </div>
        <div className="col-sm-8 editorclass">
        <Editor 
        editorState={vision.editorState}              
        onEditorStateChange={onEditorStateChange}
        
        />     
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
  
  export default VisionAdminPage;