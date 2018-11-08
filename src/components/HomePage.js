import React from 'react'
import '../assests/css/home.css'
import HighlightContainer from '../containers/HighlightContainer';
import EventContainer from '../containers/EventContainer';
import CarouselContainer from '../containers/CarouselContainer';
import ArticleContainer from '../containers/ArticleContainer'
import VisionContainer from '../containers/VisionContainer';
import TeamPageContainer from '../containers/TeamPageContainer';
import MetricContainer from '../containers/MetricContainer';

class HomePage extends React.Component
{
    render()
    {
        return (
            <div>
            <div className="divCarouselBg">                 
                <div className="divBanner col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <CarouselContainer />
                </div>
            </div>
            <div>
            <div className="bgRow">
                <div className="bgRowChild">    
                     <VisionContainer />
                 </div> 
                 <div className="bgRowChild">    
                     <HighlightContainer />
                 </div> 
                 <div className="bgRowChild">    
                     <EventContainer />
                 </div> 
            </div>
            <div className="articleContainer bgRow"> 
                 <ArticleContainer />                 
            </div>
            <div className="container-fluid MetricsDiv">    
                
                <MetricContainer />
                
            </div>
            <div className="container-fluid teamContainer">    
                <div className="row">
                <div className="col-md-12 col-sm-12">    
                <TeamPageContainer />
                </div>   
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default HomePage;