import './ProductItem.css'

function ProductItem(product) {
    return (
        <div className="product">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description}</p>
                <p className="product-category">{product.category}</p>
                <p className="product-price">{product.price} €</p>
                <button className="product-button">Ajouter au panier</button>
            </div>
        </div>
    )
}

export default ProductItem;