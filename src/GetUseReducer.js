import React from "react";
import {useReducer,useState} from "react";

function GetUseReducer() {
  const [state,dispach]=useReducer(reduser,{
      count:0,
      age:25,
      name:'Asilbek',
      number:[23,34,56]
  })
function reduser(state,action){
      state.count=1000;
      console.log(state)
         return state

}     
function AddCount(){
 dispach();
}
    return(
        <div className='container'>
          <div className='row'>
              <div className='col-md-4'>
                  {state.count}
                  <button onClick={AddCount} className='btn btn-dark'>Addcount</button>

              </div>
          </div>
        </div>
    )
}
export default GetUseReducer