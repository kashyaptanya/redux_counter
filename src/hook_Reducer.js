import React, { useReducer } from 'react'

const initial = 0;

function New() {
  const reducer=(state,action)=>{
   console.log(state,action)
    if(action.type==="inc"){

      console.log("test")
      return state + 1;
    }
    if(action.type==="DEC"){
      return state - 1;
    }
    
   
  }
  // const[num,setNum]=useState(0)

  const [state, dispatch] = useReducer(reducer, initial);
  return (
 <div className='count'>
 <h1>{state}</h1>
 <button onClick={()=>dispatch({type:"inc"})} >+</button>
 <button  onClick={()=>dispatch({type:"DEC"})}>-</button>
 </div>
  )
}

export default New