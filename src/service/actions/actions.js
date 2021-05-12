import { SAVE_DATA } from '../constants'
export const addData =(data)=>{
    // console.warn("action",data)
    return {
        type: SAVE_DATA,
        data: data
    }
}