import React,{useState} from 'react'

const Calculator = () => {
    const[input,setInput]=useState("");
const [result,setResult]=useState(0);
const changeHandler=(e)=>{
    setInput(e.target.value);
}
  return (
   
    <center>
<div className='card col-sm-3 shadow-lg bg-info'>
    <h5 className='text-warning'>Calculator</h5>
    <div className='card-body '>
      <input type="text" name='input' value={input} onChange={changeHandler} /><br/>
      <button onClick={()=>setResult(eval(input))} className="bg-danger text-white">Result</button>
      <h4 ><span className='text-dark '>Result</span>={result}</h4>
      <button onClick={()=>setInput(input+'1')}>1</button>
      <button onClick={()=>setInput(input+'2')}>2</button>
      <button onClick={()=>setInput(input+'3')}>3</button>
      <button onClick={()=>setInput(input+'4')}>4</button>
      <button onClick={()=>setInput(input+'5')}>5</button>
      <br/>
      <button onClick={()=>setInput(input+'6')}>6</button>
      <button onClick={()=>setInput(input+'7')}>7</button>
      <button onClick={()=>setInput(input+'8')}>8</button>
      <button onClick={()=>setInput(input+'9')}>9</button>
      <button onClick={()=>setInput(input+'0')}>0</button>
      <br/>
      <button onClick={()=>setInput(input+'+')}>+</button>
      <button onClick={()=>setInput(input+'-')}>-</button>
      <button onClick={()=>setInput(input+'*')}>*</button>
      <button onClick={()=>setInput(input+'/')}>/</button>
      <button onClick={()=>setInput('')}>clr</button>
    </div>
    </div>
    </center>
  
   )
  }

export default Calculator;
