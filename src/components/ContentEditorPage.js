import React from 'react';
import {connect} from 'react-redux'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import Dropdown from './Dropdown';


function uploadImageCallBack(file) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://INDINVTRY1011/AgileCOE/api/page');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
}
class ContentEditorPage extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      Title: "" , 
      Description : "",
      ImagePath :""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    console.log('submit')
  }

  handleChange(field, e) {
  this.setState(Object.assign({}, this.state, {[field]: e.target.value}))
  }

    state = {
        editorState: EditorState.createEmpty(),
        viewState: "",
        menuState :[]
      }
    
      onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
      };

      saveContent = ()=>{     
         var formFields =  {
            "Id": 2,
            "PageName": "Test1",
            "Content": draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
            "Active": 1
        }
       
          axios.post('http://INDINVTRY1011/AgileCOE/api/page', formFields)
            .then(response=>{
            console.log(response);})
          
      }

      readContent = () =>{   
             
          axios.get('http://INDINVTRY1011/AgileCOE/api/page')
            .then(response=>{                 
              this.setState({
                viewState :   response.data[0].Content               
              });
            ;}
              
        ) 
      }      
    
      render() {
        const { editorState } = this.state;
        return (
          <div  className="ContentDivStyle">
              <br/><br/>
              <Dropdown menus={this.props.menus} />
            <Editor 
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
                                    
            />     

             <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>  
       
            <input  className="btn btn-primary" 
                type="submit" value="Save" 
                onClick={this.saveContent} />
            <input  className="btn btn-primary" 
                type="submit" value="Read" 
                onClick={this.readContent} />
        <input  className="btn btn-primary" 
                type="submit" value="Fetch" 
                onClick={this.props.onClick} />
                
            <div>
            {ReactHtmlParser(this.state.viewState)}
            </div>            
            
          </div>
        );
      }
}

function mapStateToProps(state)
{   
    return {
        menus : state.menus
    }
}


export default connect(mapStateToProps)(ContentEditorPage);


