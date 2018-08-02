import React from 'react'
import {connect} from 'react-redux'
import HeaderMenus from '../components/common/HeaderMenus'
class HeaderContainer extends React.Component
{    
        constructor(props)
        {            
         super(props); 
         
        }
        render()
        {
            return (
                
                    <div>
                        <HeaderMenus 
                        parentmenus={this.props.menus.filter(filterParentMenu)} 
                        childmenus={this.props.menus.filter(filterChildMenu)} />   
                    </div>
            )
        }
}
function filterParentMenu(menus) {    
    return menus.ParentId === 0;
}
function filterChildMenu(menus) {    
    return menus.ParentId > 0;
}

function mapStateToProps(state)
{    
    return {
        
        menus : state.menus
    }
}


export default connect(mapStateToProps)(HeaderContainer);