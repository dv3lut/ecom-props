import './ProductItem.css'
import { useContext } from "react";
import { Context } from "./Context";

function ProductItem({product}) {
    const { addProductToCart } = useContext(Context);

    const handleAddProductToCart = () => {
        addProductToCart(product);
    }

    return (
        <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-category">{product.category}</p>
                <p className="product-price">{product.price} €</p>
                <button className="product-button" onClick={handleAddProductToCart}>Ajouter au panier</button>
            </div>
        </div>
    )
}

export default ProductItem;