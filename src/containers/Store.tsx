import React from 'react';
import StoreComponent from "../components/store";
import useApi from "../libs/hooks";
type Props = {

}
const Store = (props: Props) => {
    const getProducts = useApi("http://localhost:3001/products");
    return (
        <StoreComponent products={getProducts?.data} />
    );
};

export default Store;