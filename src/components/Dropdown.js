import React from 'react';
import '../../src/assests/css/home.css'

class Dropdown extends React.Component {
   
    
    render () {
        let Menus = this.props.menus;
        let optionItems = Menus.map((menu) =>
                <option   key={menu.Id}>{menu.Name}</option>
            );

        return (
            <div className="form-group row">
            <div className="col-sm-2">
              <label className="col-form-label">Choose Page:</label>
             </div>
           <div className="col-sm-6">
           <select className="form-control" onChange={this.props.onChange} >
                {optionItems}
             </select>
           </div>
           </div>        
        )
    }
}

export default Dropdown;