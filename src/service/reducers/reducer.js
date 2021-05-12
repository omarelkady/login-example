import { SAVE_DATA } from '../constants'

const initialState = {
    Data: []
}
export default function Items(state = [], action) {
    switch (action.type) {
        case SAVE_DATA:
            return [
                ...state,
                {Data: action.data}
            ]
        default:
            return state
    }
}