import React from 'react'

const Person = (props) => {

    return(
        <div>    
            <p onClick={props.click}>
            Name : {props.name}
            <br/>
            Age : {props.age}
            <br/>
            {props.children}
            <br/>
            </p>
        </div>
    )

}

export default Person;