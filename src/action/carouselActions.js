import axios from 'axios'
import actions from './common.js'

export function getCarousel(carousels)
{  
    return {
        type : 'LOAD_CAROUSEL',
        carousels
    }
}
export function deleteCarousel(carousel)
{  
    return {
        type : 'DELETE_CAROUSEL',
        carousel
    }
}
export function addCarousel(carousel)
{  
    
    return {
        type : 'ADD_CAROUSEL',
        carousel
    }
}


export function loadCarousel()
{
    
    return dispath =>{
            axios.get(actions.carouselActionAPI).then(
                resp=>{                                      
                    dispath(getCarousel(resp.data))
                }
            ).catch(err=>{
                console.log(err)
            })
    }
}
export function addCarouselAPI(carousel)
{    
    return dispath =>{
            axios.post(actions.carouselActionAPI,carousel).then((resp)=> {             
             carousel.Id = resp.data.Id
             dispath(addCarousel(carousel));             
            }).catch(err=>{
                console.log(err)
            })
    }
}

export function deleteCarouselAPI(carousel)
{    
    return dispath =>{
            axios.get(actions.carouselActionAPI + "/" + carousel.Id).then(()=>
             dispath(deleteCarousel(carousel)) 
            ).catch(err=>{
                console.log(err)
            })
   }
   
}