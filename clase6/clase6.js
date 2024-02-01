//una PROMESA es un tipo de OBJETO que representa la eventual finalizacion de un proceso asincronico y su valor, tiene metodos y propiedades propias
//tambien es un tipo de OBJETO especial que sirve de ENLACE entre el productor y consumidor de código
//una PROMESA tiene 3 estados: pending, fulfilled (cumplida), rejected (rechazada)

let cart = [];

let addCart = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let tiempoCarga = Math.random();
    if (tiempoCarga < 0.5) {
      cart.push("productoX");
      resolve(cart);
    } else {
      reject("no se pudo cargar el producto al carrito");
    }
  }, 2000);
});

addCart
  .then(function (cart) {
    console.log("se cumple");
    console.log(cart);
  })
  .catch(function (msj) {
    console.log(msj);
  });

console.log(addCart);
