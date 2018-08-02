import React from 'react';
import {connect} from 'react-redux'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import Dropdown from '../components/Dropdown';
import actions from '../action/common'
import {addHighlights} from '../action/highlightActions'
import {addCarousel} from '../action/carouselActions'
import {addArticle} from '../action/articleActions'
import HighlightAdminPage from '../components/HighlightAdminPage';
import CarouselAdminPage from '../components/CarouselAdminPage';
import ArticleAdminPage from '../components/ArticleAdminPage';


class AdminContainer extends React.Component
{
  constructor(props)
  {
    super(props);  
    this.handleChange = this.handleChange.bind(this);
    this.handleShortDescChange = this.handleShortDescChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCarouselSubmit = this.handleCarouselSubmit.bind(this);
    this.handleArticleSubmit = this.handleArticleSubmit.bind(this);
    this.handleTableChange = this.handleTableChange.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.handleShowGrid = this.handleShowGrid.bind(this);
  }
  state = {
    Table : "",
    Title: "" ,      
    ShortDesc : "" ,
    ImagePath :"",
    showGrid : false,
     editorState: EditorState.createEmpty()
   }
 
  handleTableChange(e)
  {
    
    this.setState(
      {Table : e.target.value , 
      showGrid : false}   
    )
  }
  
  handleSubmit() {
    var highlight = {
      Title : this.state.Title,
      Description :draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),            
      ImagePath : {file: this.state.ImagePath}  
    }
    this.props.dispatch(addHighlights(highlight)).then(() => console.log('Record Saved'));
      
  }
  handleShowGrid(){
    this.setState(
      {showGrid : !this.state.showGrid},    
    )
  }
  handleCarouselSubmit() {
    var carousel = {
      Title : this.state.Title,
      Description :draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))                  
    }
    this.props.dispatch(addCarousel(carousel)).then(() => console.log('Record Saved'));
  }

  handleArticleSubmit() {
    var article = {
      Title : this.state.Title,
      ShortDesc : this.state.ShortDesc,
      Description :draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))                  
    }
    this.props.dispatch(addArticle(article)).then(() => console.log('Record Saved'));
  }

  handleChange(e) {
  this.setState(
    {Title : e.target.value }
  )
  }
  handleShortDescChange(e) {
    this.setState(
      {ShortDesc : e.target.value }
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
        const { editorState } = this.state;
        
        if (this.state.Table == "Highlights")
        {
          return (
            <div  className="ContentDivStyle">
              <Dropdown menus={this.props.tables} onChange={this.handleTableChange}/>
              <div className="text-right col-md-10"> 
                {this.state.showGrid == false ? this.getButton() : '' }  
              </div>
               
                <HighlightAdminPage 
          handleChange = {this.handleChange} 
          fileChangedHandler = {this.fileChangedHandler} 
          handleSubmit = {this.handleSubmit}
            onEditorStateChange = {this.onEditorStateChange}
            highlight  = {this.state}
            highlights = {this.props.highlights}
            handleShowGrid = {this.handleShowGrid}
             />
             </div>
          )
        }
        else if (this.state.Table == "Vision")
        {
          return(
            <div  className="ContentDivStyle">
            <Dropdown menus={this.props.tables} onChange={this.handleTableChange}/>
          </div>)
          
        }
        else if (this.state.Table == "HomeCarousel")
        {
          return (
            <div  className="ContentDivStyle">
              <Dropdown menus={this.props.tables} onChange={this.handleTableChange}/>
              <div className="text-right col-md-10"> 
                {this.state.showGrid == false ? this.getButton() : '' }  
              </div>
                <CarouselAdminPage 
          handleChange = {this.handleChange} 
          fileChangedHandler = {this.fileChangedHandler} 
          handleSubmit = {this.handleCarouselSubmit}
            onEditorStateChange = {this.onEditorStateChange}
            carousel  = {this.state}
            carousels = {this.props.carousels}
            handleShowGrid = {this.handleShowGrid}
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
                {this.state.showGrid == false ? this.getButton() : '' }  
              </div>
              <ArticleAdminPage 
        handleChange = {this.handleChange} 
        handleShortDesc = {this.handleShortDescChange}
        fileChangedHandler = {this.fileChangedHandler} 
        handleSubmit = {this.handleSubmit}
          onEditorStateChange = {this.onEditorStateChange}
          article  = {this.state}
          articles = {this.props.articles}
          handleShowGrid = {this.handleShowGrid}
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
      articles : state.articles
    }
}


export default connect(mapStateToProps)(AdminContainer);


