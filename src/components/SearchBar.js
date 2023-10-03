import './SearchBar.css'

function SearchBar() {
    return (
        <div className="search-bar-container">
            <input type="text" placeholder="Rechercher..." className="search-bar"/>
        </div>
    );
}

export default SearchBar;