// JavaScript Document

var elementos = new Array();
elementos[0] = 'acero';
elementos[1] = 'agua';
elementos[2] = 'bicho';
elementos[3] = 'dragon';
elementos[4] = 'electrico';
elementos[5] = 'fantasma';
elementos[6] = 'fuego';
elementos[7] = 'hada';
elementos[8] = 'hielo';
elementos[9] = 'lucha';
elementos[10] = 'normal';
elementos[11] = 'planta';
elementos[12] = 'psiquico';
elementos[13] = 'roca';
elementos[14] = 'siniestro';
elementos[15] = 'tierra';
elementos[16] = 'veneno';
elementos[17] = 'volador';


//Fuerte = 50% del daño / Ataque -> Defensor
var elemFuerte = new Array();
//Acero
elemFuerte[0] = new Array('acero', 'agua', 'electrico', 'fuego');
//Agua
elemFuerte[1] = new Array('agua', 'dragon', 'planta');
//Bicho
elemFuerte[2] = new Array('acero', 'fantasma', 'fuego', 'hada', 'lucha', 'veneno', 'volador');
//Dragon
elemFuerte[3] = new Array('acero');
//Electrico
elemFuerte[4] = new Array('dragon', 'electrico', 'planta');
//Fantasma
elemFuerte[5] = new Array('siniestro');
//Fuego
elemFuerte[6] = new Array('agua', 'dragon', 'fuego', 'roca');
//Hada
elemFuerte[7] = new Array('acero', 'fuego', 'veneno');
//Hielo
elemFuerte[8] = new Array('acero', 'agua', 'fuego', 'hielo');
//Lucha
elemFuerte[9] = new Array('bicho', 'hada', 'psiquico', 'veneno', 'volador');
//Normal
elemFuerte[10] = new Array('acero', 'roca');
//Planta
elemFuerte[11] = new Array('acero', 'bicho', 'dragon', 'fuego', 'planta', 'veneno', 'volador');
//Psiquico
elemFuerte[12] = new Array('acero', 'psiquico');
//Roca
elemFuerte[13] = new Array('acero', 'lucha', 'tierra');
//Siniestro
elemFuerte[14] = new Array('hada', 'lucha', 'siniestro');
//Tierra
elemFuerte[15] = new Array('bicho', 'planta');
//Veneno
elemFuerte[16] = new Array('fantasma', 'roca', 'tierra', 'veneno');
//Volador
elemFuerte[17] = new Array('acero', 'electrico', 'roca');


//Debil = 200% del daño
var elemDebil = new Array();
//Acero
elemDebil[0] = new Array('hada', 'hielo', 'roca');
//Agua
elemDebil[1] = new Array('fuego', 'roca', 'tierra');
//Bicho
elemDebil[2] = new Array('planta', 'psiquico', 'siniestro');
//Dragon
elemDebil[3] = new Array('dragon');
//Electrico
elemDebil[4] = new Array('agua', 'volador');
//Fantasma
elemDebil[5] = new Array('fantasma', 'psiquico');
//Fuego
elemDebil[6] = new Array('acero', 'bicho', 'hielo', 'planta');
//Hada
elemDebil[7] = new Array('dragon', 'lucha', 'siniestro');
//Hielo
elemDebil[8] = new Array('dragon', 'planta', 'tierra', 'volador');
//Lucha
elemDebil[9] = new Array('acero', 'hielo', 'normal', 'roca', 'siniestro');
//Normal
elemDebil[10] = new Array('NADA');
//Planta
elemDebil[11] = new Array('agua', 'roca', 'tierra');
//Psiquico
elemDebil[12] = new Array('lucha', 'veneno');
//Roca
elemDebil[13] = new Array('bicho', 'fuego', 'hielo', 'volador');
//Siniestro
elemDebil[14] = new Array('fantasma', 'psiquico');
//Tierra
elemDebil[15] = new Array('acero', 'electrico', 'fuego', 'roca', 'veneno');
//Veneno
elemDebil[16] = new Array('hada', 'planta');
//Volador
elemDebil[17] = new Array('bicho', 'lucha', 'planta');


//Inmune = 0% daño
var elemInmune = new Array();
//Acero
elemInmune[0] = new Array('NADA');
//Agua
elemInmune[1] = new Array('NADA');
//Bicho
elemInmune[2] = new Array('NADA');
//Dragon
elemInmune[3] = new Array('hada');
//Electrico
elemInmune[4] = new Array('tierra');
//Fantasma
elemInmune[5] = new Array('normal');
//Fuego
elemInmune[6] = new Array('NADA');
//Hada
elemInmune[7] = new Array('NADA');
//Hielo
elemInmune[8] = new Array('NADA');
//Lucha
elemInmune[9] = new Array('fantasma');
//Normal
elemInmune[10] = new Array('fantasma');
//Planta
elemInmune[11] = new Array('NADA');
//Psiquico
elemInmune[12] = new Array('siniestro');
//Roca
elemInmune[13] = new Array('NADA');
//Siniestro
elemInmune[14] = new Array('NADA');
//Tierra
elemInmune[15] = new Array('volador');
//Veneno
elemInmune[16] = new Array('acero');
//Volador
elemInmune[17] = new Array('NADA');