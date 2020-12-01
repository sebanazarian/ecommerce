// Nuestra funcion que consulta a la base de datos y guarda los valores
const getProductsFromDatabase = () => {
  const serverResponse = new Promise((resolve) => {
    // Simulacion de delay de una base de datos ( Cuando son pocos registros,
    // normalmente no tarda más de un segundo una base de datos )
    setTimeout(() => {
      const product = [
        { id:1, name: "Zapatillas", price: 2700, size: "42" },
        { id:2, name: "Camiseta de Racing", price: 13299, size: "42" },
        { id:3, name: "Reloj", price: 4002, size: "42" },
      ];
      resolve(product);
    }, 3000);
  });
  return serverResponse;
};

export default getProductsFromDatabase;