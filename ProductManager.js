class ProductManager {
    constructor() {
      this.products = [];
      this.productId = 0;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      const newProduct = {
        id: this.productId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
  
      if (product) {
        return product;
      } else {
        console.log('Error: Product not found.');
      }
    }
  }
  // SE CREA LA INSTANCIA PRODUCTMANAGER

  const productManager = new ProductManager();

  // SE AGREGAN 4 PRODUCTOS

  productManager.addProduct('Camisa', 'biyela', 19.99, 'ruta/imagen1.jpg', 'ABC123', 10);
  productManager.addProduct('pantalon', 'cuero', 299.99, 'ruta/imagen2.jpg', 'DEF456', 5);
  productManager.addProduct('remera', 'algodon', 69.99, 'ruta/imagen3.jpg', 'RTF789', 8);
  productManager.addProduct('campera', 'ecocuero', 599.99, 'ruta/imagen2.jpg', 'DEF456', 5);

  // SE IMPREMEN POR CONSOLA LOS PRODUCTOS
  
  const products = productManager.getProducts();
  console.log(products);
  
  // SE CONSULTA UN ID QUE NO EXISTE PARA CONFIRMAR EL ELSE

  console.log(productManager.getProductById(5))
  console.log(productManager.getProductById(18))

  console.log(productManager.getProductById(2))
  console.log(productManager.getProductById(0))




  
  
  
  
  
