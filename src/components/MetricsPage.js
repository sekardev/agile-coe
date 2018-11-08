import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import '../assests/css/metrics.css'

const MetricsPage = ({metrics})=>{
    return (
    <div className="metricsGrid">        
        {metrics.map((metric,i)=>{              
                {
                if(i == 0 )
                   return (
                    <section className="metricsItemls" key= {i}>         
                    <div className="text-center carddescription">
                    <h2>{metric.Value} </h2>  <div className="clearfix"></div>
                    <span className="">{ReactHtmlParser(metric.Name)}</span>
                    </div>
                    </section>
                  )
                }               
                    return (
                        <section className="metricsItem"  key= {i}>         
                        <div className="text-center carddescription">
                        <h2>{metric.Value} </h2>  <div className="clearfix"></div>
                        <span className="">{ReactHtmlParser(metric.Name)}</span>
                        </div>
                        </section>)
            })}
</div>    
)
}

export default MetricsPage;
