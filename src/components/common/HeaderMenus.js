import React from 'react';
import {Link} from 'react-router'
//import Logo1 from "../../assests/Logo1.PNG";
import Logo from "../../assests/Logo.png";
import './header.css';


const HeaderMenus = ({parentmenus,childmenus})=>{

    if(childmenus.length > 1){
        return(
            <nav className="navbar navbar-expand-lg navbarmargin fixed-top">  
            <a className="navbar-brand text-uppercase" href="">
            <img src={Logo} alt=""
                className="rounded circle highlightimg" /> 
             </a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" 
             data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
             aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
             </button>
            <div id="navbarNavDropdown" className="navbar-collapse collapse">
            
            <ul className="navbar-nav ml-auto">
               
            <li className="nav-item">
                   <Link className="nav-link" to="/" >Home</Link>              
                   </li>
            {parentmenus.map((menu,i)=>{
                            return(<li  className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">{menu.Name}</a>    
                           <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                           {childmenus.map((childmenu)=>{
                             return (childmenu.ParentId === menu.Id ?
                              <Link className="dropdown-item LinkCSS" to={childmenu.RoutePath} >
                                   {childmenu.Name}
                                   </Link> : '')
                           })}
                           </div>
                    </li>)
            })}            
            </ul>
            </div>
    </nav>
        );
    }
    else 
    {
        return(
            <nav className="navbar navbar-expand-lg navbarmargin fixed-top">      
           
        
            <button className="navbar-toggler" type="button" 
            data-toggle="collapse" data-target="#navbarNavDropdown"
             aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
      
        
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <img src={Logo} alt=""
                className="highlightimg"/>             
       
          <ul className="navbar-nav ml-auto">
            {parentmenus.map((menu,i)=>{
                            return(
                            <li key={i} className="nav-item dropdown">                           
                             <Link className="nav-link" to={menu.RoutePath} >{menu.Name}</Link>    
                    </li>)
            })}
            <li> 

            <Link className="subscribeButton btn btn-outline-secondary btn-sm" to="/" >Subscribe</Link> 
                </li>            
          </ul>       
        </div>
        
      </nav>)
    }

    
};


export default HeaderMenus;