function renderInput({inputProps, index}){
	return <input type="text"  onChange={inputProps.handleChange(index)} className="containerStyle" value={inputProps.data} maxLength="1" />
}

export default renderInput;