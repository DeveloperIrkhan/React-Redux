import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incNumber, decNumber } from '../Components/Redux/Actions/Action'
import { Store } from './Redux/Store/Store.js';
type RootState = ReturnType<typeof Store.getState>;
export const Inputpage = () => {
    const count = useSelector((state: RootState) => state.changeTheNumber);
    const dispatch = useDispatch();
    return (
        <div className="">
            <div className="App container p-5">
                <h1
                    style={{ backgroundColor: "#282c34" }}
                    className="
                      text-capitalize
                      text-white p-2
                      ">Welcome to redux</h1>
            </div>
            <div className="container align-content-center text-center">
                <h2 style={{ color: "#282c34" }} >Increment & Decrement using React-Redux</h2>
                <div className="quantity col-lg-6 col-12">
                    <a
                        onClick={() => { dispatch(decNumber()) }}
                        className="minus" title="Minus"><span>-</span></a>
                    <input name='quantity' className="quantity_input" value={count} type="text" />
                    <a
                        onClick={() => { dispatch(incNumber()) }}
                        className="plus" title="Plus"><span>+</span></a>
                </div>
            </div>
        </div>
    )
}