const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/* 
  EJERCICIO 3
  Implementar el método count dentro del prototype de LinkedList que deberá retornar la suma de todos los
  valores dentro de la lista.
  En caso de que la lista esté vacía, retornar 0
  Ejemplo:
  Dada esta lista: [4] --> [2] --> [7] -- > null
  LinkedList.count() --> 13
*/

LinkedList.prototype.count = function() {
  // Tu código aca:
 if(this.head === null) return 0
let suma = 0;
let current = this.head;
while(current){
  suma += current.value
  current = current.next}
return suma
}


// No modifiques nada debajo de esta linea //

module.exports = LinkedList;