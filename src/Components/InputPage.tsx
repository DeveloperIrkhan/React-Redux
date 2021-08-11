import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incNumber, decNumber, Login } from '../Components/Redux/Actions/Action'
import { Store } from './Redux/Store/Store.js';
type RootState = ReturnType<typeof Store.getState>;
export const Inputpage = () => {
    const count = useSelector((state: RootState) => state.ChangeNo);
    const LogingIn = useSelector((state: RootState) => state.Login)
    const dispatch = useDispatch();
    return (
        <div className="">
            {console.log(LogingIn)}
            <div className="App container p-5">
                <h1
                    style={{ backgroundColor: "#282c34" }}
                    className="
                      text-capitalize
                      text-white p-2
                      ">Welcome to redux</h1>
            </div>
            <div className="col py-4 align-content-center text-center">
                <h5 className="float-right">Hi! Click on Login button to See magic</h5>
                <button
                    className="btn btn-dark"
                    onClick={() => { dispatch(Login()) }}>Login</button>
            </div>
            <div className="container align-content-center text-center">
                {LogingIn ?
                    <div className="">
                        <h2 style={{ color: "#282c34" }} >Increment & Decrement using React-Redux</h2>
                        <div className="quantity col-lg-6 col-12">
                            <a
                                onClick={() => { dispatch(decNumber()) }}
                                className="minus" title="Minus"><span>-</span></a>
                            <input name='quantity' className="quantity_input" readOnly={true} value={count} type="text" />
                            <a
                                onClick={() => { dispatch(incNumber()) }}
                                className="plus" title="Plus"><span>+</span></a>
                        </div>
                    </div>
                    :
                    <div className="col py-4">
                        <p className="alert-success">Hi you are not logIn</p>
                    </div>
                }



            </div>
        </div>
    )
}