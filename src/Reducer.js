import React from "react";
import {useReducer} from "react";
 function reducer(state,action){
     switch (action.type) {
         case "INC":return state=state+1;
             case "DEC":return state=state+-1;
         default: return state
     }

 }
const Reducer=()=>{
    const [count,dispach]=useReducer(reducer,0

    )
    function Increment(){
        dispach({type:'INC'})
    }
    function Decrement(){
      dispach({type:"DEC"})
    }
    return(
        <>
            <h1>Counter:{count}</h1>
            <button className={'btn btn-dark'} onClick={Increment}>Inc</button>
            <button className={'btn btn-dark'} onClick={Decrement}>Dec</button>
        </>
    )
}
export default Reducer