console.log(`Que funcion desea realzar? introduzca el número de la opcion:
   1) Suma
   2) Resta
   3) Multiplicación
   4) División
   5) raíz cuadrada
   6) Formula general
   7) Binomio cuadrado Perfecto`);

var opcion = parseInt(prompt("introduce una opcion:"));

switch (opcion) { 
   	case 1: 
      	var n1 = parseInt(prompt("introduce un numero:"));
      	var n2 = prompt("introduce otro numero:");
      	function imprimirResultado(){
         var suma = n1 + parseInt(n2);
      	console.log(`${suma}`);
      } 
      imprimirResultado();
   	    break;
   	case 2:
   		var n1 = parseInt(prompt("introduce un numero:"));
      	var n2 = prompt("introduce otro numero:");
      	function imprimirReResta(){
         var resta = n1 - parseInt(n2);
         console.log(`${resta}`);
      }
      imprimirReResta();
      	break;
    case 3:
   		var n1 = parseInt(prompt("introduce un numero:"));
      	var n2 = prompt("introduce otro numero:");
      	function ImprimirMultI(){
         var mult = n1 * parseInt(n2);
      	console.log(`${mult}`);
      }
      ImprimirMultI();
      	break; 
    case 4:
   		var n1 = parseInt(prompt("introduce un numero:"));
      	var n2 = prompt("introduce otro numero:");
      	function ImprimirDivision(){
         var div = n1 / parseInt(n2);
         if (n2==0){
            console.log("La divison no es posible");
         }
         else{
           console.log(`${div}`);
         }
      }
      ImprimirDivision();
      	break;  	 	
    case 5:
         var n1 =prompt(`Introduce un numero a sacar raiz cuadrada`);
         function ImprimirRaiz(){
         var raiz = Math.sqrt(n1);
         console.log(`El resultado es:${raiz}`);
        }
        ImprimirRaiz(); 
      break; 

   case 6:
         var a =prompt(`Introduce un valo (a)`);
         var b =prompt(`Introduce un valo (b)`);
         var c =prompt(`Introduce un valo (c)`);
         function x1 (a, b, c ){
         return(((-1)*b)-(Math.sqrt(b*b))-(4*a*c))/(2*a);
         }
         var resultado_x1 = x1 (a,b,c);
         console.log(`x1 =`+resultado_x1);
         function x2(a,b,c){
         return(((-1)*b)+(Math.sqrt(Math.pow (b,2))-(4*a*c)))/(2*a);
         }
         var resultado_x2 = x2 (a,b,c);
         console.log(`x2 =`+resultado_x2);
 
         break; 
   case 7:
        var a = parseInt(prompt("Introduce el valor de (a)"));
        var b = prompt("Introduce el valor de (b)");
        function ImprimirBCP(){
        var respuesta =(a*a)+(2*a*b)+(b*b);
        console.log(`${respuesta}`);
      }    
        ImprimirBCP();
      break; 
   	default: 
      	console.log(`No existe esa funcion`); 
}