import React from 'react'
import '../assests/css/home.css'
import MetricsPage from './MetricsPage';
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
                <div className="divBanner  col-sm-12 col-xs-12">
                <CarouselContainer />
                </div>
            </div>
            <div>
            <div className="row ">
                <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 visionHmDiv">    
                     <VisionContainer />
                 </div> 
                 <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 highlightHmDiv">    
                     <HighlightContainer />
                 </div> 
                 <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 EventHmDiv">    
                     <EventContainer />
                 </div> 
            </div>
            <div className="container-fluid articleDiv"> 
            <div className="row ">                
                 <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 ">    
                 <ArticleContainer />
                 </div> 
            </div>
            </div>
            <div className="container-fluid MetricsDiv">    
                <div className="row">
                <div className="col-md-12 col-sm-12">    
                <MetricContainer />
                </div>   
                </div>
            </div>
            <div className="container-fluid teamDiv">    
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