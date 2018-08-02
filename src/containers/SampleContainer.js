import React from 'react'
import {connect} from 'react-redux'
import '../assests/css/article.css'
import axios from 'axios'

class SampleContainer extends React.Component
{    
    
        constructor(props)
        {            
         super(props);          
         this.fileChangedHandler = this.fileChangedHandler.bind(this);
         this.loadImage = this.loadImage.bind(this);
        }
        state ={
            image: '', 
          }
        // state = {selectedFile: null}

        loadImage()
        {
            axios.get('http://INDINVTRY1011/AgileCOE/api/highlights').then(
                resp=>{   
                        
                    const chart1 ="data:image/png;base64," + resp.data[3].Image64                                                                   
                    this.setState({
                        Image1: chart1
                      })
                });
            
        }

        fileChangedHandler(e) {
            let files = e.target.files || e.dataTransfer.files;
            let reader = new FileReader();
            if (!files.length)
                  return;
            
            reader.onload = (e) => {

                this.setState({
                  image: e.target.result
                })
              };
              reader.readAsDataURL(files[0]);
          }         

        uploadHandler = () => {
            const formData = {file: this.state.image}
            console.log(JSON.stringify(this.state.image))
            var sample = {
                Title : "Test123",
                Description :"Test this is test",
                Order : "1",
                data : formData
            }
              axios.post('http://localhost:8010/AgileCOE/api/highlights/file-upload', sample )
              .then(response => 
                console.log(response)
            )

            // console.log(this.state.selectedFile)
            // axios.post('http://localhost:8010/AgileCOE/api/articles/file-upload', this.state.selectedFile)
          }
        // uploadHandler = () => {
        //     const formData = new FormData()
        //     formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
        //     axios.post('http://localhost:8010/AgileCOE/api/articles/file-upload', formData)
        //   }

        render()
        {            
            return (
                <div> 
                    <br/><br/><br/><br/><br/><br/>
                <input type="file" onChange={this.fileChangedHandler} />
<button onClick={this.uploadHandler}>Upload!</button>
<button onClick={this.loadImage}>Load Image!</button>

        
         <img src={this.state.Image1} height={50} width={50}/>

</div>
            )
        }
}
{/*  */}

const mapStateToProps = (state)=>
{   
    return {
        highlights : state.highlights
    }
}


export default connect(mapStateToProps)(SampleContainer);