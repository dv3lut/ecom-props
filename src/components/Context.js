import { useState, createContext } from "react"

const Context = createContext();

function Provider({children}) {
    const [productsData, setProductsData] = useState([]);
    return (
        <Context.Provider value={{productsData, setProductsData}}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider};