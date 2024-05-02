import React from "react";
import List from "@mui/material/List";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  return (
    <>
      <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={4} key={product.id}>
              <ProductCard product={product}></ProductCard>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default ProductList;
