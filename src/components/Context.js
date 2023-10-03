import { useState, createContext } from "react"

const Context = createContext();

function Provider({children}) {
    const [productsData, setProductsData] = useState([]);
    const [cartData, setCartData] = useState([]);

    const addProductToCart = (product) => {
        console.log(product)
        setCartData([...cartData, product]);
    };

    const removeProductFromCart = (product) => {
        const newCartData = cartData.filter((cartProduct) => cartProduct.id !== product.id);
        setCartData(newCartData);
    };
    return (
        <Context.Provider value={{productsData, setProductsData, cartData, addProductToCart, removeProductFromCart}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider};