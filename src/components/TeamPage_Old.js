import React from 'react'
import '../assests/css/home.css'

class TeamPage extends React.Component
{
    render()
    {
        return (
            <div>
           
           
<section className="team-section text-center">  
  <h2 className="h1-responsive font-weight-bold my-5">Our Agile team</h2>
  
  <div className="row">

    
    <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <div className="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
         className="rounded-circle z-depth-1  Img-style" alt="Sample avatar" />
      </div>
      <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
      <p className="text-uppercase blue-text"><strong>Graphic designer</strong></p>
      <p className="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci  sed quia non numquam modi tempora eius.</p>
      <ul className="list-unstyled mb-0">
        
        <a className="p-2 fa-lg fb-ic">
          <i className="fa fa-facebook blue-text"> </i>
        </a>
        
        <a className="p-2 fa-lg tw-ic">
          <i className="fa fa-twitter blue-text"> </i>
        </a>
        
        <a className="p-2 fa-lg ins-ic">
          <i className="fa fa-instagram blue-text"> </i>
        </a>
      </ul>
    </div>
   
    <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <div className="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" 
        className="rounded-circle z-depth-1  Img-style" alt="Sample avatar" />
      </div>
      <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
      <p className="text-uppercase blue-text"><strong>Web developer</strong></p>
      <p className="grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa accusantium doloremque rem laudantium totam aperiam.</p>
      <ul className="list-unstyled mb-0">
        
        <a className="p-2 fa-lg fb-ic">
          <i className="fa fa-facebook blue-text"> </i>
        </a>
        
        <a className="p-2 fa-lg ins-ic">
          <i className="fa fa-instagram blue-text"> </i>
        </a>
      </ul>
    </div>
    
    <div className="col-lg-3 col-md-6 mb-md-0 mb-5">
      <div className="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" 
        className="rounded-circle z-depth-1  Img-style" alt="Sample avatar"/>
      </div>
      <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
      <p className="text-uppercase blue-text"><strong>Photographer</strong></p>
      <p className="grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim est fugiat nulla id eu laborum.</p>
      <ul className="list-unstyled mb-0">
        
        <a className="p-2 fa-lg fb-ic">
          <i className="fa fa-facebook blue-text"> </i>
        </a>
        
        <a className="p-2 fa-lg ins-ic">
          <i className="fa fa-instagram blue-text"> </i>
        </a>
        
        <a className="p-2 fa-lg ins-ic">
          <i className="fa fa-dribbble blue-text"> </i>
        </a>
      </ul>
    </div>
    
    <div className="col-lg-3 col-md-6">
      <div className="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" 
        className="rounded-circle z-depth-1  Img-style" alt="Sample avatar" />
      </div>
      <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
      <p className="text-uppercase blue-text"><strong>Backend developer</strong></p>
      <p className="grey-text">Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur totam officia voluptates perferendis voluptatibus aut.</p>
      <ul className="list-unstyled mb-0">
        
        <a className="p-2 fa-lg fb-ic">
          <i className="fa fa-facebook blue-text"> </i>
        </a>
        
        <a className="p-2 fa-lg ins-ic">
          <i className="fa fa-github blue-text"> </i>
        </a>
      </ul>
    </div>
    

  </div>
  

</section>

     </div>
        )
    }
}
export default TeamPage;