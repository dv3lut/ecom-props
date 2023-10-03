import './SearchBar.css'
import { useContext } from "react";
import { Context } from "./Context";

function SearchBar() {
    const { filterProducts } = useContext(Context);

    const handleSearchChange = (e) => {
        filterProducts(e.target.value);
    }

    return (
        <div className="search-bar-container">
            <input type="text" placeholder="Rechercher..." className="search-bar" onChange={handleSearchChange}/>
        </div>
    );
}

export default SearchBar;