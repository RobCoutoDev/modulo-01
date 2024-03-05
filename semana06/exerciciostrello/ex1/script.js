function verificarNumeroPar(numero) {
    return new Promise((resolve, reject) => {
      if (numero % 2 === 0) {
        resolve("Número validado é par");
      } else {
        reject(new Error("Error: número informado é ímpar"));
      }
    });
  }

verificarNumeroPar(10)
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((error) => {
    console.log(error.message); 
  });
