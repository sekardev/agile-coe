import axios from 'axios'

export function getMerchants()
{
    return dispath =>{
            axios.get('http://www.mocky.io/v2/59b994573a0000f501f7fb05').then(
                resp=>{
                    dispath(setMerchants(resp.data))
                }
            ).catch(err=>{
                console.log(err)
            })
    }
}

export function setMerchants(merchants)
{
    return{
        type :'SET_MERCHANT', merchants
    }
}

export function addMerchant(merchant)
{
    console.log(merchant);
    return {
        type : 'ADD_MERCHANT', merchant
    }
}