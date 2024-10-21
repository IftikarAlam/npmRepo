import React,{useState} from "react";
import RenderSeparator from "./RenderSeparator"
import RenderInput from "./RenderInput"
function OtpLength({otpLength}){
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

export default OtpLength; 