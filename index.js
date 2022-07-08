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

var calculator = document.getElementById('calculator')

calculator.innerHTML=`
	<input type='text' name='input' id='input' value="0">
	<div class="botones">
		<input id="seven" type="submit" value="7">
		<input id="eigth" type="submit" value="8">
		<input id="nine" type="submit" value="9">
		<input id="for" type="submit" value="4">
		<input id="five" type="submit" value="5">
		<input id="six" type="submit" value="6">
		<input id="one" type="submit" value="1">
		<input id="two" type="submit" value="2">
		<input id="three" type="submit" value="3">
		<input id="cero" type="submit" value="0">
		<input id="plus" type="submit" value="+">
		<input id="menos" type="submit" value="-">
		<input id="divir" type="submit" value="/">
		<input id="multiplicar" type="submit" value="*">
		<input id="igual" type="submit" value="=">
		<input id="del" type="submit" value="DEL">
	</div>
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
			input.value="0"
			input.focus()
		}
		console.log('shf');
	})
	menos.addEventListener('click', () => {
		if(input.value != ""){
			operacion = "menos"
			first = input.value
			input.focus()
			input.value="0"
		}
		console.log('shf');
	})
	multiplicar.addEventListener('click', () => {
		if(input.value != ""){
			operacion = "multiplicar"
			first = input.value
			input.value="0"
			input.focus()
		}
		console.log('shf');
	})
	divir.addEventListener('click', () => {
		if(input.value != ""){
			operacion = "divir"
			first = input.value
			input.value="0"
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
	document.getElementById('one').addEventListener('click', () => {
		input.value == "0" ? input.value = "1" : input.value += "1"
	})
	document.getElementById('two').addEventListener('click', () => {
		input.value == "0" ? input.value = "2" : input.value += "2"
	})
	document.getElementById('three').addEventListener('click', () => {
		input.value == "0" ? input.value = "3" : input.value += "3"
	})
	document.getElementById('for').addEventListener('click', () => {
		input.value == "0" ? input.value = "4" : input.value += "4"
	})
	document.getElementById('five').addEventListener('click', () => {
		input.value == "0" ? input.value = "5" : input.value += "5"
	})
	document.getElementById('six').addEventListener('click', () => {
		input.value == "0" ? input.value = "6" : input.value += "6"
	})
	document.getElementById('seven').addEventListener('click', () => {
		input.value == "0" ? input.value = "7" : input.value += "7"
	})
	document.getElementById('eigth').addEventListener('click', () => {
		input.value == "0" ? input.value = "8" : input.value += "8"
	})
	document.getElementById('nine').addEventListener('click', () => {
		input.value == "0" ? input.value = "9" : input.value += "9"
	})
	document.getElementById('cero').addEventListener('click', () => {
		input.value == "0" ? input.value = "0" : input.value += "0"
	})
	document.getElementById('del').addEventListener('click', () => {
		input.value = "0"
		first = 0
		second = 0
	})
})