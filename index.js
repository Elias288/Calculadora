function suma(first, second){
	return first + second
}
function resta(first, second){
	return first - second
}
function multiplicacion(first, second){
	return first * second
}
function divicion(first, second){
	return first / second
}
function derivacion(first, second){
	return first / second
}
function integracion(first, second){
	return first / second
}

var calculator = document.getElementById('calculator')

calculator.innerHTML=`
	<input type='text' name='input' id='input' value="0">
	<input id="one" type="submit" value="1">
	<input id="two" type="submit" value="2">
	<input id="three" type="submit" value="3">
	<input id="for" type="submit" value="4">
	<input id="five" type="submit" value="5">
	<input id="six" type="submit" value="6">
	<input id="seven" type="submit" value="7">
	<input id="eigth" type="submit" value="8">
	<input id="nine" type="submit" value="9">
	<input id="cero" type="submit" value="0">
	<input id="plus" type="submit" value="+">
	<input id="menos" type="submit" value="-">
	<input id="divir" type="submit" value="/">
	<input id="multiplicar" type="submit" value="*">
	<input id="derivar" type="submit" value="der">
	<input id="integrar" type="submit" value="int">
	<input id="igual" type="submit" value="=">
`

var input = document.getElementById('input')
var sum = document.getElementById('plus')
var menos = document.getElementById('menos')
var divir = document.getElementById('divir')
var multiplicar = document.getElementById('multiplicar')
var derivar = document.getElementById('derivar')
var integrar = document.getElementById('integrar')

var igual = document.getElementById('igual')
var first, second

var operacion

window.addEventListener('load', () => {
	sum.addEventListener('click', () => {
		if(input.value != ""){
			operacion = "suma"
			first = parseInt(input.value)
			input.value=""
			input.focus()
		}
		console.log('shf');
	})
	menos.addEventListener('click', () => {
		if(input.value != ""){
			operacion = "menos"
			first = input.value
			input.focus()
			input.value=""
		}
		console.log('shf');
	})
	multiplicar.addEventListener('click', () => {
		if(input.value != ""){
			operacion = "multiplicar"
			first = input.value
			input.value=""
			input.focus()
		}
		console.log('shf');
	})
	divir.addEventListener('click', () => {
		if(input.value != ""){
			operacion = "divir"
			first = input.value
			input.value=""
			input.focus()
		}
		console.log('shf');
	})
	igual.addEventListener('click', () =>{
		second = parseInt(input.value)
		switch(operacion){
			case "suma":
				input.value = suma(first, second)
				break
			case "multiplicar":
				input.value = multiplicacion(first, second)
				break
			case "menos":
				input.value = resta(first, second)
				break
			case "divir":
				input.value = divicion(first, second)
				break
		}
	})
})