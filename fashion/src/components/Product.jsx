export default function Product({ image, title, price, description, id, addToCart}){
    return (
        <article className='product'>
            < img src={image} title={title} />
            <div className="product-content">
                <div>
                    <h3>{ title }</h3>
                    <small>#{ id }</small>
                    <p>${ price }</p>
                    <p>{ description }</p>
                </div>
                <p className='product-actions'>
                    <button onClick={addToCart}>Add to cart</button>
                </p>
            </div>
        </article>
    )
}