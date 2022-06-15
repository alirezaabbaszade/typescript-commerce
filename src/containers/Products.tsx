import React from 'react';
import ProductsComponent from "../components/store/products";
import useApi from "../libs/hooks";
type Props = {}
const Products = (props: Props) => {
    const getProducts = useApi('http://localhost:3001/products');
    return (
      <ProductsComponent

      />
    );
};

export default Products;