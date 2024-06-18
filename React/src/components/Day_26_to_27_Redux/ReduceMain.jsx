import React from "react"
import { useDispatch } from "react-redux";
import ReduceDemo from "./ReduceDemo";

function ReduceMain() {

    //dispatch the event
    const dispatch = useDispatch();

    return (
        <div className="App" >
            <button onClick={e => dispatch({ type: 'IncrementCount' })} className="mt-5 bg-success text-white rounded border-0" >
                Incremenet
            </button >

            <button onClick={e => dispatch({ type: "DecrementCount" })} className="bg-warning text-white rounded border-0 ms-5">
                Decrement
            </button>

            <ReduceDemo />

            <button onClick={e => dispatch({ type: 'IncrementAge' })} className="bg-success text-white rounded border-0" >
                Incremenet
            </button >

            <button onClick={e => dispatch({ type: "DecrementAge" })} className="bg-warning text-white rounded border-0 ms-5">
                Decrement
            </button>

        </div >
    )
}

export default ReduceMain;