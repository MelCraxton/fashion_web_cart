import { DUMMY_PRODUCTS } from "../dummy-products";
import Product from "./Product";

export default function Shop( { addToCart }){
    return(
        <section id="shop">
            <h2>Elegant Clothing for all</h2>
            <ul id="products">
                { DUMMY_PRODUCTS.map((product) => (
                    <li key={product.id}>
                        < Product 
                            id={product.id} 
                            title={product.title} 
                            price={product.price} 
                            description={product.description} 
                            image={product.image} 
                            addToCart={addToCart}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}