import React from 'react'
import { Editor } from 'react-draft-wysiwyg';
import '../assests/css/admin.css'
import ReactHtmlParser from 'react-html-parser';
import AssociateDropdown from './AssociateDropdown'
const EventAdminPage = ({handleChange,fileChangedHandler,handleSubmit,
  onEditorStateChange,event,events,handleShowGrid,associates,handleDelete,handleAssociateChange}) =>
  {
    if(!event.showGrid)
    {
      return (
        <div>
        <div className="col-md-10 ">
        
        <table className="table table-hover table-bordered">
        <thead>
        <tr>
        <th scope="col">Title</th>
        <th scope="col">Description</th>        
        <th scope="col">Location</th>   
        <th scope="col">Action</th>           
        </tr>
        </thead>
        <tbody>
        {events.map((even,i)=>{
          return(
            <tr key={i} >                      
            
            <td>{even.Title}</td>
            <td>{even.Description}</td>
            <td>{even.Location}</td>
            <td><button type="button" className="btn btn-danger btn-sm" 
            onClick={()=> handleDelete(even.Id,'event')}>Delete</button> </td>
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
                <AssociateDropdown associates = {associates} handleChange= {handleAssociateChange} />
                </div>
        </div>
        <div className="form-group row">
        <div className="col-sm-2">
        <label className="col-form-label">Vision :</label>
        </div>
        <div className="col-sm-8 editorclass">
        <Editor 
        editorState={event.editorState}              
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
  
  export default EventAdminPage;