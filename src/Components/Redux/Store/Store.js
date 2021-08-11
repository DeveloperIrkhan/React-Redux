import { createStore } from "redux";
import { RootReducer } from "../Redusers";


export const Store = createStore(RootReducer);


export const Login = createStore(RootReducer);
