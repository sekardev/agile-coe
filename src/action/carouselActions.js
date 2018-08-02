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



export function loadCarousel()
{
    
    return dispath =>{
            axios.get(actions.carouselAction).then(
                resp=>{                                      
                    dispath(getCarousel(resp.data))
                }
            ).catch(err=>{
                console.log(err)
            })
    }
}
export function addCarousel(carousel)
{    
    return dispath =>{
            axios.post(actions.carouselAction,carousel).then(()=> dispath(loadCarousel())  ).catch(err=>{
                console.log(err)
            })
    }
}

// export function deleteCarouselAPI(carousel)
// {    
//     return dispath =>{
//             axios.delete(actions.carouselAction,carousel).then(()=>

             
//              dispath(deleteCarousel()) 
            
//             ).catch(err=>{
//                 console.log(err)
//             })
//     }
// }