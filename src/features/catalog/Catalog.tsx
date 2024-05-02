import React, {useEffect, useState} from 'react'
import { Product } from '../../app/models/product'
import ProductList from './ProductList';
import { Button } from '@mui/material';
interface CatalogProps {
    products: Product[],
    handleAddProduct: () => void
}

function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    fetch("https://localhost:7041/api/Product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length,
        name: "product" + (prevState.length + 1),
        description: "description" + (prevState.length + 1),
        price: 100 + (prevState.length + 1),
        pictureUrl: "https://picsum.photos/seed/picsum/200/300",
        brand: "test" + (prevState.length + 1),
        type: "test" + (prevState.length + 1),
        quantityInStock: prevState.length + 1,
      },
    ]);
  };

  return (
    <>
      <ProductList products={products} />
      <Button onClick={handleAddProduct}>Add Product</Button>
    </>
  )
}

export default Catalog
