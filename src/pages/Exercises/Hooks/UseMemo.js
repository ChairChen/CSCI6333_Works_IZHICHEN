import { useState, useMemo } from "react";

const ProductList = ({products, searchTerm}) => {
    console.log('ProductList re-render');

    const filteredProducts = useMemo(() => {
        console.log('ProductList is filtering the products');

        return products.filter(product=>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [products, searchTerm]);

    return (
        <ul>
            {filteredProducts.map(item => 
                <li key={item.id}>{item.name}</li>
            )}
        </ul>
    );
}

export default function UseMemo() {
    const [product, searchTerm] = useState("");

    // example data
    const products = useMemo(() => [
        { id: 1, name: "Apple iPhone"}
        ,{ id: 2, name: "Samsung Galaxy"}
        ,{ id: 3, name: "Google Pixel"}
        ,{ id: 4, name: "OnePlus Nord"}
    ], []);

    console.log('UseMemo parent component re-render');
    return (
        <section>
            <div>
                <h2>Search Item from Product List - useMemo hook example</h2>
                <label>Search:</label>
                <input
                    type="text"
                    placeholder="Search Item from Product List"
                    name="searchTerm"
                    id="searchTerm"
                    value={product}
                    onChange={(event) => searchTerm(event.target.value)} 
                />
            </div>
            <br />
            <ProductList products={products} searchTerm={product}/>
        </section>
    );
}