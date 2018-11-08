import React from 'react';
import '../../src/assests/css/home.css'

class AssociateDropdown extends React.Component {
   
    
    render () {
        let Associates = this.props.associates;
        let optionItems = Associates.map((associate) =>
                <option   key={associate.AssociateId} value={associate.AssociateId} >{associate.Name}</option>
            );

        return (
            <div>           
           <select className="form-control" onChange={this.props.handleChange} value={this.props.selectedValue}>
                {optionItems}
             </select>
           
           </div>        
        )
    }
}

export default AssociateDropdown;