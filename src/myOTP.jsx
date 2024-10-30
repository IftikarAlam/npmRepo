import React,{useState} from "react";

function App() {


  const [number, setNumber] = useState();
  const [data, setData] = useState();
  const [flag, setFlag] = useState(0);
  
  function handleClick(){
    setData(number);
    setFlag(prev=>!prev);
    setNumber('');
  }

const NumInputs = ({setNumber, Number}) => {
  return <>
    <label style={{background:"#F5F7F8" , color:"#3A6D8C", marginRight :"2px" }}>Enter the otp length:</label><input name="input" className="containerStyle" type="tel" pattern="\d*"  onChange={(e)=> setNumber(e.target.value)} value={Number} maxLength="1"/>
  </>
}

const RenderSeparator = () => {
  return <span> - </span>
}

const RenderInput = ({inputProps, index})=> {
  return <input type="text"  onChange={inputProps.handleChange(index)} className="containerStyle" value={inputProps.data} maxLength="1" />
}

const OTPLength = ({otpLength}) => {
  const numInputs = Number(otpLength) ? Number(otpLength) : 4;
  const [otp,setOtp]= useState(new Array( numInputs ).fill(""));

  const handleChange = (index) => (e) =>{
    const temp = [...otp];
    temp[index]= e.target.value;
    setOtp(temp)
    e.target.value ? e.target.nextSibling.nextSibling.focus() : e.target.previousSibling.previousSibling.focus();
  }
  return <>
    {otp.map((data,index)=>{
      const inputProps = {
        handleChange : handleChange,
        data : data
      }
        return <>
           <RenderInput inputProps = {inputProps} index={index} />
          {index < otp.length-1 && <RenderSeparator />}
        </>
        })
    }
  </>
}


  return<>
    	 <h1 style={{color:"#3A6D8C"}}>{!flag ? "OTP" : "Enter OTP"}</h1>

       {!flag ? <NumInputs setNumber={setNumber} Number={number}/> : <OTPLength otpLength={data}/> }
      <br /> <button onClick={handleClick} style={{marginTop:"5px"}}>{!flag ? "Enter length" : "Enter OTP"}</button>
    </>
    
}

export default App;
