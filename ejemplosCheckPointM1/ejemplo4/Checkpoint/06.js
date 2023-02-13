const { BinarySearchTree } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// 6️⃣ ***** EJERCICIO 6 ***** - agregarProductos 6️⃣
// Implementar la función agregarProductos(producto) al prototipo de BinarySearchTree, que nos servirá para
// agregar LOS NOMBRES de los productos en una góndola de supermercado en base a las comparacionesde sus precios,
// siguiendo la siguiente tabla:
//
//    ┌─────────┬────────┐
//    │Productos│ Precios│
//    ├─────────┼────────┤
//    │  Leche  │  100   │
//    │  Queso  │  150   │
//    │   Pan   │   50   │
//    │ Frutas  │  110   │
//    │  Arroz  │   40   │
//    │  Jugo   │   80   │
//    └─────────┴────────┘
//
//  EJEMPLO:
//
//  Si partimos del árbol inicial llamado "arbolDeProductos" con un solo nodo:
//
//                                              Leche
//                                              /    \
//
//    arbolDeProductos.agregarProductos(Queso)
//
//                                              Leche
//                                              /    \
//                                                   Queso
//
// El producto "Queso" se insertó a la derecha, ya que su precio (150), es mayor que el precio Leche (100).
//
//    arbolDeProductos.agregarProductos(Pan)
//
//                                             Leche
//                                             /    \
//                                          Pan      Queso
//
// El producto "Pan" se insertó a la izquierda, ya que su precio (50), es menor que el precio Leche (100).
//
//    arbolDeProductos.agregarProductos(Frutas)
//
//                                             Leche
//                                            /     \
//                                         Pan       Queso
//                                                  /
//                                               Frutas
//
// El producto "Frutas" en la posición correspondiente, ya que su precio (110), supera al de Leche (100) y
// es menor que precio de Queso (150).
//
// CONSIGNAS:
//  🟢 En caso de querer insertar un producto que ya se encuentra en el árbol, debe retornar
//    el string "Ya existe el producto".
//  🟢 En caso de querer insertar un producto que no se encuentra en la tabla de precios, debe retornar
//    el string "Producto inexistente".
//  🟢 El método debe insertar el producto en la posición correspondiente, basando su ubicación en el
//    precio del producto. (Ver ejemplos)
//  🟢 En caso de insertar el producto correctamente, debe retornar el nuevo nodo que ha sido insertado.

BinarySearchTree.prototype.agregarProductos = function (
  nombreProducto,
  productos
) {
  let Existe = 0;
  for (key in productos) {
    if (key == nombreProducto) {
      Existe = 1;
    }
  }
  if (!Existe) {
    return "Producto inexistente";
  } else {
    if (this.contains(nombreProducto, productos)) {
      return "Ya existe el producto";
    } else {
      this.insertProducto(nombreProducto, productos);
      return new BinarySearchTree(nombreProducto);
    }
  }
};

BinarySearchTree.prototype.contains = function (nombreProducto, productos) {
  if (nombreProducto === this.value) return true;
  if (productos[nombreProducto] < productos[this.value]) {
    if (!this.left) return false;
    else return this.left.contains(nombreProducto, productos);
  } else if (productos[nombreProducto] > productos[this.value]) {
    if (!this.right) return false;
    else return this.right.contains(nombreProducto, productos);
  }
};

BinarySearchTree.prototype.insertProducto = function (
  nombreProducto,
  productos
) {
  if (productos[nombreProducto] < productos[this.value]) {
    if (!this.left) this.left = new BinarySearchTree(nombreProducto);
    else this.left.insertProducto(nombreProducto, productos);
  } else if (productos[nombreProducto] > productos[this.value]) {
    if (!this.right) this.right = new BinarySearchTree(nombreProducto);
    else this.right.insertProducto(nombreProducto, productos);
  }
};

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  BinarySearchTree,
};
