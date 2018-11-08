import React from 'react';
import {connect} from 'react-redux'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft  from 'html-to-draftjs';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Dropdown from '../components/Dropdown';
import {addHighlightAPI,deleteHighlightAPI} from '../action/highlightActions'
import {deleteCarouselAPI,addCarouselAPI} from '../action/carouselActions'
import {addArticleAPI,deleteArticleAPI} from '../action/articleActions'
import {addVisionAPI,deleteVisionAPI} from '../action/visionActions'
import {deleteEventAPI} from '../action/eventActions'
import HighlightAdminPage from '../components/HighlightAdminPage';
import CarouselAdminPage from '../components/CarouselAdminPage';
import ArticleAdminPage from '../components/ArticleAdminPage';
import PropTypes from 'prop-types';
import VisionAdminPage from '../components/VisionAdminPage';
import EventAdminPage from '../components/EventAdminPage';
class AdminContainer extends React.Component
{
  constructor(props)
  {
    super(props);  
    this.handleChange = this.handleChange.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCarouselSubmit = this.handleCarouselSubmit.bind(this);
    this.handleArticleSubmit = this.handleArticleSubmit.bind(this);
    this.handleTableChange = this.handleTableChange.bind(this);
    this.handleAssociateChange = this.handleAssociateChange.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.handleShowGrid = this.handleShowGrid.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleVisionSubmit = this.handleVisionSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  state = {
    Id : 0,AssociateId :0,    Table : "",    Author : "",Title: "" ,  Order:0,   
    ShortDesc : "" ,ImageName :"",ImagePath :"",showGrid : false,editorState: EditorState.createEmpty()
  }
  
  handleTableChange(e)
  {
    
    this.setState(
      {Table : e.target.value , 
        showGrid : false,
        AssociateId : e.target.value
      }   
      )
    }
     
  handleAssociateChange(e)
  {
    
    this.setState(
      {
        Author : e.target.value,
        AssociateId : e.target.value
      })      
    }

    handleEdit(id, table)
    {
      this.setState(
        {showGrid : !this.state.showGrid},    
      )      
      var editRecord = "";
      var blocksFromHtml = "";
      if (table === "article")
      {
        editRecord = this.props.articles.filter((article)=> article.Id == id) 
        blocksFromHtml = htmlToDraft(editRecord[0].Description);       
        this.setState({
          Author : editRecord[0].Author
        })
      }      
      else if (table ==="highlight")
      {
        editRecord = this.props.highlights.filter((highlight)=> highlight.Id == id)   
        blocksFromHtml = htmlToDraft(editRecord[0].Description); 
      }
      else if (table ==="carousel")
      {
        editRecord = this.props.carousels.filter((carousel)=> carousel.Id == id) 
        blocksFromHtml = htmlToDraft(editRecord[0].Description);           
      }
      else if (table ==="vision")
      {
        editRecord = this.props.visions.filter((vision)=> vision.Id == id)   
        blocksFromHtml = htmlToDraft(editRecord[0].Testimonial); 
        this.setState({
          Author : editRecord[0].Author
        })
      }

      var { contentBlocks, entityMap } = blocksFromHtml;
      var contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);      
      this.setState(       
         { 
           Id : editRecord[0].Id,
           Order : editRecord[0].Order,
           Title : editRecord[0].Title  ,
           AssociateId : editRecord[0].AssociateId,
          editorState : EditorState.createWithContent(contentState),
          ImageName : editRecord[0].ImageName,
          ImagePath : editRecord[0].Image
        })      
    }
    
    
    handleSubmit(e) {
      e.preventDefault();

      var maxOrder = Math.max.apply(Math,this.props.highlights.map(function(o){return o.Order;}))
      var highlight = {
        Id : this.state.Id,
        Title : this.state.Title,
        Order : maxOrder,
        Description :draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),            
        ImagePath : this.state.ImagePath
      }      

      this.props.addHighlightAPI(highlight);
      this.handleShowGrid();
    }
    handleShowGrid(){
      this.setState(
        {showGrid : !this.state.showGrid,
          Id : 0,
          Title : "",
          Author : "",
          AssociateId:this.props.agileTeams[0].AssociateId,
          editorState: EditorState.createEmpty()
        },    
      )
    }
    handleDelete(id,table)
    {    
      var recordToDelete = {
        Id : id
      }
      if (table === "article")
      {
      this.props.deleteArticleAPI(recordToDelete);
      }
      else if (table ==="carousel")
      {
      this.props.deleteCarouselAPI(recordToDelete);
      }
      else if (table ==="highlight")
      {
      this.props.deleteHighlightAPI(recordToDelete);
      }
      else if (table ==="vision")
      {
      this.props.deleteVisionAPI(recordToDelete);
      }
      else if (table ==="event")
      {
      this.props.deleteEventAPI(recordToDelete);
      }
      
    }
    
    handleCarouselSubmit(e) {
      e.preventDefault();
      var maxOrder = Math.max.apply(Math,this.props.carousels.map(function(o){return o.Order;}))
            
      var carousel = {
        Id : this.state.Id,
        Order : this.state.Order,
        Title : this.state.Title,        
        Description :draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))                  
      }
      this.props.addCarouselAPI(carousel);
      this.handleShowGrid();
    }
    handleArticleSubmit(e) {
      e.preventDefault();
      var article = {
        Id : this.state.Id,
        Title : this.state.Title,  
        Author : this.state.AssociateId,          
        Image : this.state.ImagePath,            
        Description :draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))                  
      }
      this.props.addArticleAPI(article);
      this.handleShowGrid();
    }
    handleVisionSubmit(e){
      e.preventDefault();
      var vision = {      
        Id : this.state.Id,  
        Order : this.state.Order,        
        Author : this.state.AssociateId, 
        Testimonial :draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
      }
      this.props.addVisionAPI(vision);
      this.handleShowGrid();
    }
    handleChange(e) {
      this.setState(
        {Title : e.target.value }
      )
    }
     
    
    onEditorStateChange = (editorState) => {
      this.setState({
        editorState,
      });
    };
    fileChangedHandler(e) {
      let files = e.target.files || e.dataTransfer.files;
      let reader = new FileReader();
      if (!files.length)
      return;
      
      reader.onload = (e) => {
        
        this.setState({
          ImagePath: e.target.result
        })
      };
      reader.readAsDataURL(files[0]);
    }  
    getButton()
    {
      return (<button type="button" className="btn btn-success btn-sm" 
      onClick={this.handleShowGrid}>+ Create</button>    )
    } 
    render() {
            
      if (this.state.Table === "Highlights")
      {
        return (
          <div  className="ContentDivStyle">
          <Dropdown menus={this.props.tables} onChange={this.handleTableChange} />
          <div className="text-right col-md-10"> 
          {this.state.showGrid === false ? this.getButton() : '' }  
          </div>
          
          <HighlightAdminPage 
          handleChange = {this.handleChange} 
          fileChangedHandler = {this.fileChangedHandler} 
          handleEdit = {this.handleEdit}
          handleSubmit = {this.handleSubmit}
          onEditorStateChange = {this.onEditorStateChange}
          highlight  = {this.state}
          highlights = {this.props.highlights}
          handleShowGrid = {this.handleShowGrid}
          handleDelete = {this.handleDelete}
          />
          </div>
        )
      }     
        else if (this.state.Table === "HomeCarousel")
        {
          return (
            <div  className="ContentDivStyle">
            <Dropdown menus={this.props.tables} onChange={this.handleTableChange}/>
            <div className="text-right col-md-10"> 
            {this.state.showGrid === false ? this.getButton() : '' }  
            </div>
            
            <CarouselAdminPage 
            handleChange = {this.handleChange} 
            handleEdit = {this.handleEdit}
            fileChangedHandler = {this.fileChangedHandler} 
            handleSubmit = {this.handleCarouselSubmit}
            onEditorStateChange = {this.onEditorStateChange}
            carousel  = {this.state}
            carousels = {this.props.carousels}
            handleShowGrid = {this.handleShowGrid}
            handleDelete = {this.handleDelete}
            />
            
            </div>
          )
        }
        else if (this.state.Table === "Vision")
        {
          return (
            <div  className="ContentDivStyle">            
            <Dropdown menus={this.props.tables} onChange={this.handleTableChange}/>
            <div className="text-right col-md-10"> 
            {this.state.showGrid === false ? this.getButton() : '' }  
            </div>
            <VisionAdminPage associates = {this.props.agileTeams}
            handleChange = {this.handleChange} 
            handleAssociateChange = {this.handleAssociateChange}            
            fileChangedHandler = {this.fileChangedHandler} 
            handleEdit = {this.handleEdit}
            handleSubmit = {this.handleVisionSubmit}
            onEditorStateChange = {this.onEditorStateChange}
            vision  = {this.state}
            visions = {this.props.visions}
            handleShowGrid = {this.handleShowGrid}
            handleDelete = {this.handleDelete}
            />
            </div>
          )
        }
        else if (this.state.Table === "Events")
        {
          return (
            <div  className="ContentDivStyle">            
            <Dropdown menus={this.props.tables} onChange={this.handleTableChange}/>
            <div className="text-right col-md-10"> 
            {this.state.showGrid === false ? this.getButton() : '' }  
            </div>
            <EventAdminPage associates = {this.props.agileTeams}
            handleChange = {this.handleChange} 
            handleAssociateChange = {this.handleAssociateChange}            
            fileChangedHandler = {this.fileChangedHandler} 
            handleSubmit = {this.handleVisionSubmit}
            onEditorStateChange = {this.onEditorStateChange}
            event  = {this.state}
            events = {this.props.events}
            handleShowGrid = {this.handleShowGrid}
            handleDelete = {this.handleDelete}
            />
            </div>
          )
        }
        else 
        {
          return (
            <div  className="ContentDivStyle">
            
            <Dropdown menus={this.props.tables} onChange={this.handleTableChange}/>
            <div className="text-right col-md-10"> 
            {this.state.showGrid === false ? this.getButton() : '' }  
            </div>
            <ArticleAdminPage associates = {this.props.agileTeams}
            handleChange = {this.handleChange} 
            handleEdit = {this.handleEdit}
            handleAssociateChange = {this.handleAssociateChange}            
            fileChangedHandler = {this.fileChangedHandler} 
            handleSubmit = {this.handleArticleSubmit}
            onEditorStateChange = {this.onEditorStateChange}
            article  = {this.state}
            articles = {this.props.articles}
            handleShowGrid = {this.handleShowGrid}
            handleDelete = {this.handleDelete}
            />
            </div>
          )
        }   
           
      }
      
    }
    
    
    function mapStateToProps(state)
    {   
      return {
        tables : state.tables,
        highlights : state.highlights,
        carousels : state.carousels,
        articles : state.articles,
        agileTeams : state.agileTeams,
        visions : state.visions,
        events : state.events
      }
    }
    
    
    
    export default connect(mapStateToProps,
      {deleteCarouselAPI,deleteArticleAPI,deleteHighlightAPI,deleteEventAPI,addHighlightAPI, addCarouselAPI,addArticleAPI,addVisionAPI,deleteVisionAPI})(AdminContainer);
    
    
    