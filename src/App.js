import './App.css';
import { Provider } from './components/Context';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Provider>
      <div className="App">
        <header>
          <h1>EcomShop</h1>
          <SearchBar />
        </header>
        <div className="content">
          <ProductList />
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
