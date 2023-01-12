const { generateBook } = require("../utils");
const utils = require("../utils");
/*
    6️⃣ ***EJERCICIO 6*** - classifyBooks 6️⃣
    ❕ CONSIGNA ❕ 
    1 - Retorna un nuevo objeto clasificado por genero a partir de los generos existentes
    📢 PUNTOS A TENER EN CUENTA 📢
    - Si no hay libros disponibles, arrojar un Error('No hay libros disponibles')
    - Vas a necesitar extraer los géneros de los libros para obtenerlos
    EJEMPLO --> 
    Dado el siguiente siguiente array:
      [{
         nombreLibro: 'Sol',
         genero: 'Horror'
      }, {
         nombreLibro: 'Luna',
         genero: 'Fantasia'
      }, {
         nombreLibro: 'Tierra',
         genero: 'Fantasia'
      }]
   clasifyBooks() retorna --> {
      Horror: [{ nombreLibro: 'Sol', genero: 'Horror' }],
      Fantasia: [{ nombreLibro: 'Luna', genero: 'Fantasia' }, { nombreLibro: 'Tierra', genero: 'Fantasia' }]
   }
   Nota: Estos datos son de ejemplo, en los tests vendran otros campos.
   */
const classifyBooks = () => {
  // ⚠️ No modificar nada arriba de esta línea ⚠️
  if (!utils.books.length) {
    throw Error("No hay libros disponibles");
  }
  const geners = [];
  const objGeners = {};
  genersFilter = [];
  for (let i = 0; i < utils.books.length; i++) {
    geners.push(utils.books[i].genre);
  }
  geners.forEach(function (item) {
    if (!genersFilter.includes(item)) {
      genersFilter.push(item);
    }
  });
  for (let i = 0; i < genersFilter.length; i++) {
    const bookFG = utils.books.filter((book) => book.genre == genersFilter[i]);
    objGeners[genersFilter[i]] = bookFG;
  }

  return objGeners;
};

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = classifyBooks;
