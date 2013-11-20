//Detectar Elementos dentro de un Array
Array.prototype.contiene = function(obj) {
	var i = this.length;
	while (i--) {
		if (this[i] === obj) {
			return true;
		}
	}
	return false;
}


//Calcular Daños segun el o los tipos de un Pokémon
var resultado = new Array();
var indica = 0;

function calculoElemPoke(tipo1, tipo2) {
	for (var e = 0; e < elementos.length; e++) {
		indica = 100;
		
		//FUERTE
		if ( elemFuerte[e].contiene(tipo1) || elemFuerte[e].contiene(tipo2)) {
			indica = 50;
		}
		if ( elemFuerte[e].contiene(tipo1) && elemFuerte[e].contiene(tipo2)) {
			indica = 25;
		}
		
		//DEBIL
		if ( elemDebil[e].contiene(tipo1) || elemDebil[e].contiene(tipo2)) {
			if (indica == 50) {
				indica = 100;
			} else {
				indica = 200;
			}
		}
		if ( elemDebil[e].contiene(tipo1) && elemDebil[e].contiene(tipo2)) {
			indica = 400;
		}
		
		//INMUNE
		if ( elemInmune[e].contiene(tipo1) || elemInmune[e].contiene(tipo2)) {
			indica = 0;
		}
		
		resultado[e] = indica;
		console.log(elementos[e] + ' = ' + indica + '%');
	}
}