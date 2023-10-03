import { useState, createContext } from "react"

const Context = createContext();

function Provider({children}) {
    const [productsData, setProductsData] = useState([]);
    const [filteredProductsData, setFilteredProductsData] = useState([]);
    const [cartData, setCartData] = useState([]);


    const addProductToCart = (product) => {
        setCartData([...cartData, product]);
    };

    const removeProductFromCart = (product) => {
        const newCartData = cartData.filter((cartProduct) => cartProduct.id !== product.id);
        setCartData(newCartData);
    };

    const filterProducts = (searchTerm) => {
        console.log(searchTerm);
        if (searchTerm === "") {
            setFilteredProductsData(productsData);
        }
        else {
            const filtered = productsData.filter(product => 
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProductsData(filtered);
        }
    };


    return (
        <Context.Provider value={{setProductsData, cartData, addProductToCart, removeProductFromCart, filteredProductsData, setFilteredProductsData, filterProducts}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider};