import { Action } from 'redux';


const Login = false;

const IsLogedIn = (state = Login, action: Action) => {
    switch (action.type) {
        case "LOGEDIN":
            return !state;
        default:
            return state;
    }
}
export default IsLogedIn;