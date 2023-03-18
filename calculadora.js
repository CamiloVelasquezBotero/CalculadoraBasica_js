function suma(){
	var numero1 = parseFloat(document.getElementById('numero1').value); /*Se utiliza (parseFloat) para convertir el String obtenido en numero*/
 	var numero2 = parseFloat(document.getElementById('numero2').value);
 	var resultado = numero1 + numero2; /*Se crea el resultado*/

 	document.getElementById('resultado').value = resultado; //Se le cambia el texto al input resultado
}