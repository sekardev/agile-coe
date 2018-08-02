import React from 'react';
import { EditorState } from 'draft-js';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

class ContentEditorPage extends React.Component
{
    state = {
        editorState: EditorState.createEmpty(),
        viewState: "test",
      }
      constructor(props)
      {
          super(props);
          this.readContent();
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
        
        return (
          <div className="ContentDivStyle">   
            <br/>          <br/>
            {ReactHtmlParser(this.state.viewState)}
            </div>
        );
      }
}

export default ContentEditorPage;


