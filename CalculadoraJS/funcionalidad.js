var operandoA;
var operandoB;
var operacion;
function init(){
//Variables
// let siete=document.getElementById('#siete');
// let ocho=document.getElementById('#ocho');
// let nueve=document.getElementById('#nueve');
// let uno = document.querySelector('#uno');
// let suma=document.getElementById('#suma');
// let igual=document.getElementById('#igual');
// let resultado = document.querySelector('resultado');
// let reset=document.querySelector('#reset');
}
//Eventos  
siete.onclick=function(e){
  resultado.textContent = resultado.textContent +"7";
}
ocho.onclick=function(e){
  resultado.textContent=resultado.textContent + "8";
}
nueve.onclick=function(e){
  resultado.textContent=resultado.textContent +"9";
}
cuatro.onclick=function(e){
  resultado.textContent=resultado.textContent +"4";
}
cinco.onclick=function(e){
  resultado.textContent=resultado.textContent +"5";
}
seis.onclick=function(e){
  resultado.textContent=resultado.textContent +"6";
}
uno.onclick=function(e){
  resultado.textContent=resultado.textContent +"1";
}
dos.onclick=function(e){
  resultado.textContent=resultado.textContent +"2";
}
tres.onclick=function(e){
  resultado.textContent=resultado.textContent +"3";
}
suma.onclick=function(e){
  operandoA=resultado.textContent;
  operacion="+";
  Limpiar();
}
resta.onclick=function(e){
  operandoA=resultado.textContent;
  operacion="-";
  Limpiar();
}
division.onclick=function(e){
  operandoA=resultado.textContent;
  operacion="/";
  Limpiar();
}
multiplicacion.onclick=function(e){
  operandoA=resultado.textContent;
  operacion="*";
  Limpiar();
}
igual.onclick=function(e){
operandoB=resultado.textContent;
Resolver();
}
reset.onclick=function(e){
  resultado.textContent="";
  operandoA=0;
  operandoB=0;
}

function Limpiar(){
  resultado.textContent="";
}
function Resolver(){
  var res=0;
  switch(operacion){
    case "+":
      res=parseFloat(operandoA)+parseFloat(operandoB);
      break;
      case "-":
      res=parseFloat(operandoA)-parseFloat(operandoB);
      break;
      case "/":
      res=parseFloat(operandoA)/parseFloat(operandoB);
      break;
      case "*":
      res=parseFloat(operandoA)*parseFloat(operandoB);
      break;
  }
  resultado.textContent=res;
}

