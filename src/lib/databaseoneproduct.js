const getOneProduct = () => {
  const serverResponse = new Promise((resolve) => {
    setTimeout(() => {
      const product = 
        { name: "Zapatillas", price: 2700, size: "42" };
      resolve(product);
    }, 3000);
  });
  return serverResponse;
};

export default getOneProduct;