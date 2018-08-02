import React from 'react'
import {connect} from 'react-redux'
import {addMerchant} from '../action/merchantAction'
class MerchantPage extends React.Component
{
   
        constructor(props)
        {
            
                super(props);
                this.addMerchant = this.addMerchant.bind(this);
                
        }
        addMerchant()
        {       
            
            var merchant = {
                "id": 12,
                "firstname": "Susan1",
                "lastname": "Mckee1",
                "avatarUrl": "http://placehold.it/64x64",
                "email": "susanmckee@overfork.com",
                "phone": "+78 (114) 788-2368",
                "hasPremium": false
            }
            this.props.addMerchant(merchant);
        }
        render()
        {
            return (
                
                    <div className="merchant-list">
                        <input type="button" className="btn btn-primary col-md-2" value="Add" onClick={this.addMerchant} />
                        <div className="responsive-table">
                            <table className="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Avatar</th>
                                    <th>Email Address</th>
                                    <th>Phone Number</th>
                                    <th>Premium</th>
                                    {/* <th>Bids</th>
                                    <th>Edit</th>
                                    <th>Delete</th> */}
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.merchants.map(merchant =>
                                    <tr key={merchant.id}>
                                        <td>{merchant.id}</td>
                                        <td>{merchant.firstname}</td>
                                        <td>{merchant.lastname}</td>
                                        <td><img className="avatar" src={merchant.avatarUrl} alt="Merchant Avatar"/></td>
                                        <td>{merchant.email}</td>
                                        <td>{merchant.phone}</td>
                                        <td className="premium">
                                            {
                                                merchant.hasPremium ?
                                                    <span className="glyphicon glyphicon-ok"></span>
                                                    :
                                                    <span className="glyphicon glyphicon-remove"></span>
                                            }
                                        </td>
                                        {/* <td>
                                            <NavLink to={'/bids/' + merchant.id}>View Bids</NavLink>
                                        </td>
                                        <td>
                                            <NavLink className="btn btn-primary btn-sm"
                                                     to={'/edit/' + merchant.id}>Edit</NavLink>
                                        </td> */}
                                        {/* <td>
                                            <button className="btn btn-sm btn-danger"
                                                    onClick={() => onDeleteMerchant(merchant.id)}>
                                                Delete
                                            </button>
                                        </td> */}
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>                        
                    </div>
            )
        }
}

function mapStateToProps(state)
{
    return {
        merchants : state.merchants
    }
}

function mapDispatchToProps(dispatch)
{
    return{
        addMerchant : merchant => dispatch(addMerchant(merchant))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantPage);