import React from 'react'
import '../assests/css/home.css'
import ImageSlider from './ImageSlider';
import '../assests/css/team.css'

// class TeamPage extends React.Component
const TeamPage =({teamdetails})=>
{
    return (
        <div className="team-section text-left teamDiv">          
            <h5 className="h1-responsive font-weight-bold ">Agile Certifications</h5>
            <div className="teamDivUl">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active show" data-toggle="tab" href="#home">Safe Certified Agilest</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#profile">Certified Scrum Masters</a>
                    </li>
                </ul>
                <div id="myTabContent" className="tab-content">
                    <div className="tab-pane fade active show" id="home">
                        <br/>
                            <ImageSlider AgileTeamMembers={teamdetails}/>
                    </div>
                    <div className="tab-pane fade " id="profile"><br/>
                        <ImageSlider AgileTeamMembers={teamdetails}/>
                    </div>
                </div>
            </div>
        
    </div>
    )

}
export default TeamPage;