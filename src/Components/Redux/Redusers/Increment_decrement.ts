import { Action } from "redux";

const initialState = 10;
const changeTheNumber = (state = initialState, action:Action) =>{
    switch (action.type) {
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state;
    }

}
export default changeTheNumber;