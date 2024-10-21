function numInputs({setNumber, Number}){
	return <>
		<label style={{background:"#F5F7F8" , color:"#3A6D8C", marginRight :"2px" }}>Enter the otp length:</label><input name="input" className="containerStyle" type="tel" pattern="\d*"  onChange={(e)=> setNumber(e.target.value)} value={Number} maxLength="1"/>
	</>
}

export default numInputs; 