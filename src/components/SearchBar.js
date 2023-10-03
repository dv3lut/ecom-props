import './SearchBar.css'
import { useContext } from "react";
import { Context } from "./Context";

function SearchBar() {
    const { filterProductsFromSearch } = useContext(Context);

    const handleSearch = (e) => {
        filterProductsFromSearch(e.target.value);
    }

    return (
        <div className="search-bar-container">
            <input type="text" placeholder="Rechercher..." className="search-bar" onChange={handleSearch}/>
        </div>
    );
}

export default SearchBar;