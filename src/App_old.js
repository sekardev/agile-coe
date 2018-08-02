import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person'
import Counter from './components/Counter'

class App_old extends Component {
  
  state = {
    persons :[] = [{
      name : "Tom" , age :"23"
    },{
      name : "Steve" , age :"32"
    }]
  }

  nameChangeHandler = (newName)=>
  {
      this.setState({
        persons :[] = [{
          name : newName , age :"15"
        },{
          name : "Steve54321" , age :"18"
        }] }
      )
      //console.log('you clicked me')
  }

  render() {
    return (
      <div className="App">       
        <p className="App-intro">
          This is our React program
        </p>
        {/* <Person 
         click={this.nameChangeHandler.bind(this,"Tom Mayer")} 
         name= {this.state.persons[0].name}
         age= {this.state.persons[0].age} >This is my habit </Person>
        <Person 
        name= {this.state.persons[1].name} 
        age= {this.state.persons[1].age}/> */}
        <table>
          <tr> <td>Name</td><td>Age</td> </tr>
           {this.state.persons.map((person,i)=>{
                return (<tr><td>
                  {person.name}
                </td><td> {person.age} </td></tr>)
          })}
          </table>

        <button  onClick={this.nameChangeHandler.bind(this,"steve")} > Change the name </button>
        <ul  >
          </ul>
          <Counter />
      </div>
    );
  }
}

export default App;
