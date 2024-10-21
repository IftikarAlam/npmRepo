import React,{useState} from "react";
import NumInputs from "./numInputs";
import OTPLength from "./OtpLength";
function App() {


  const [number, setNumber] = useState();
  const [data, setData] = useState();
  const [flag, setFlag] = useState(0);
  
  function handleClick(){
    setData(number);
    setFlag(prev=>!prev);
    setNumber('');
  }


// lexical environment and closure
  // const a = ()=>{
  //   let va = 1
  //   const b = ()=>{
  //     let va = 2
  //     const c = ()=>{
  //       let va = 3
  //       return console.log(va)
  //     }
  //     c(); 
  //   }
  //     b();
  // }
  // a();

  return<>
    	 <h1 style={{color:"#3A6D8C"}}>{!flag ? "OTP" : "Enter OTP"}</h1>

       {!flag ? <NumInputs setNumber={setNumber} Number={number}/> : <OTPLength otpLength={data}/> }
      <br /> <button onClick={handleClick} style={{marginTop:"5px"}}>{!flag ? "Enter length" : "Enter OTP"}</button>
    </>
    
}

export default App;
