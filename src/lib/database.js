// Nuestra funcion que consulta a la base de datos y guarda los valores
const getProductsFromDatabase = () => {
  const serverResponse = new Promise((resolve) => {
    // Simulacion de delay de una base de datos ( Cuando son pocos registros,
    // normalmente no tarda más de un segundo una base de datos )
    setTimeout(() => {
      const product = [
        { id:1, name: "Zapatillas", price: 100, size: "42" },
        { id:2, name: "Camiseta de Racing", price: 200, size: "42" },
        { id:3, name: "Reloj", price: 450, size: "42" },
      ];
      resolve(product);
    }, 1000);
  });
  return serverResponse;
};

export default getProductsFromDatabase;