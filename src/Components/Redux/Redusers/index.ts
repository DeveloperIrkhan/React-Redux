import changeTheNumber from './Increment_decrement'
import { combineReducers } from 'redux'
import IsLogedIn from './LoginInReducer';
// key value Pair
export const RootReducer = combineReducers(
    {
        ChangeNo: changeTheNumber,
        Login : IsLogedIn
    }
);
