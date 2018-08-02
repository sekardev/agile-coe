import React from 'react'

const CourseList = (props)=>{
   return( 
       <div>
            <div className="merchant-list col-md-3">
                <div className="responsive-table ">
                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <td>Title</td>
                        </tr>
                        </thead>
                        <tbody>
     {props.courses.map((s,index)=>{
         return (<tr><td>{s.title}</td></tr>)
     })} </tbody></table> </div> </div></div>)
}

export default CourseList;