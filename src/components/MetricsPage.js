import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import '../assests/css/metrics.css'

const MetricsPage = ({metrics})=>{
    
    if(metrics && metrics.length >0)
    {
        
    return(
        
        <div>
        
        <div className="row ">
           
            <div className="col-md-3 cardMetrics">
            <div className="">
               
                
                    <div className="col text-center carddescription">
                    <h2>{metrics[0].Value} </h2>  <div className="clearfix"></div>
                    {ReactHtmlParser(metrics[0].Name)}
                    </div>
                
                </div>
            </div>
            <div className="col-md-2 cardMetrics">
            <div className="">
               
                
                    <div className="col text-center carddescription">
                    <h2> {metrics[1].Value} </h2>  <div className="clearfix"></div>
                    {ReactHtmlParser(metrics[1].Name)}
                    </div>
                
                </div>
            </div>
            <div className="col-md-2 cardMetrics">
            <div className="">
                    <div className="col text-center carddescription">
                    <h2> {metrics[2].Value} </h2>  <div className="clearfix"></div>
                    {ReactHtmlParser(metrics[2].Name)}
                    </div>
                
                </div>
            </div>
            <div className="col-md-2 cardMetrics">
            <div className="">
               
                
                    <div className="col text-center carddescription">
                    <h2> {metrics[3].Value} </h2>  <div className="clearfix"></div>
                    {ReactHtmlParser(metrics[3].Name)}
                    </div>
                </div>
                
            </div>
            <div className="col-md-2 cardMetrics cardMetricsLast">
            <div className="">
               
                
                    <div className="col text-center carddescription">
                    <h2> {metrics[4].Value} </h2>  <div className="clearfix"></div>
                    {ReactHtmlParser(metrics[4].Name)}
                    </div>
                </div>
                
            </div>
        </div>
        <br/>
        </div>
    )
}
else 
{
    return('<div>No Record Found </div>')
}

}

export default MetricsPage;
