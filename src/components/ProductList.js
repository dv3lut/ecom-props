import { useContext, useEffect } from "react";
import { Context } from "./Context";
import ProductItem from "./ProductItem";
import "./ProductList.css";

function ProductList() {
    const { productsData, setProductsData } = useContext(Context);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok)
                    throw new Error("Fetching products data failed with status code " + response.status);
                const jsonData = await response.json();
                setProductsData(jsonData);
            }
            catch (err)
            {
                console.log(err);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="product-list">
            {
                productsData.length > 0 ? (productsData.map((product) => ProductItem(product))) : (<p>No products</p>)
            }
        </div>
    );
}

export default ProductList;