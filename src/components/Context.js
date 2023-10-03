import { useState, createContext } from "react"

const Context = createContext();

function Provider({children}) {
    const [productsData, setProductsData] = useState([]);
    const [cartData, setCartData] = useState([]);
    const [searchValue, setSearchValue] = useState("");


    const addProductToCart = (product) => {
        setCartData([...cartData, product]);
    };

    const removeProductFromCart = (product) => {
        const newCartData = cartData.filter((cartProduct) => cartProduct.id !== product.id);
        setCartData(newCartData);
    };

    const filterProductsFromSearch = (value) => {
        console.log(searchValue);
        setSearchValue(value);
        return productsData.filter(product => product.title.toLowerCase().includes(value.toLowerCase()));
    }

    return (
        <Context.Provider value={{productsData, setProductsData, cartData, addProductToCart, removeProductFromCart, setSearchValue, filterProductsFromSearch}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider};