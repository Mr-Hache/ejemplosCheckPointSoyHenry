//
// 6️⃣ ***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
//
// Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
// retorne false si un número dentro del array no es primo
// EJEMPLOS:
// Dado el siguiente array:
// [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
// sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
//
// Dado este otro array:
// [61, 7, 13, 11, 29, 3]
// sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
//⚠️ ATENCION ⚠️
// NO utilizar el método sort() de Array!
// REQUISITOS:
//  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
//  🟢 Si numero dentro del array no es primo, retornar false

function sortPrimeHouses(array) {
  // Tu código aquí:
  let countPrimos = 0;
  for (let i = 0; i < array.length; i++) {
    let esPrimo = 0;
    for (let j = 1; j < array[i]; j++) {
      if (array[i] % j === 0) {
        esPrimo++;
      }
    }
    if (esPrimo > 2) countPrimos++;
  }
  if (countPrimos > 0) return false;
  for (let i = 1; i < array.length; i++) {
    let aux = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = aux;
  }
  return array;
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  sortPrimeHouses,
};
