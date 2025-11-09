import { useState, useRef } from "react";

export default function SearchApp() {
    const products = [
        "Apple iPhone 13",
        "Samsung Galaxy S21",
        "Google Pixel 6",
        "OnePlus 9",
        "Sony Xperia 5 III",
        "Nokia XR20",
        "Motorola Edge 20",
        "Xiaomi Mi 11",
        "Oppo Find X3 Pro",
        "Huawei P50 Pro"
    ];
    const [query, setQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [message, setMessage] = useState("");

    const searchCount = useRef(0);

    const handleSearch = (e) => {
        const keyword = e.target.value;
        setQuery(keyword);

        if (keyword.trim() !== "") {
            searchCount.current += 1;

            if (searchCount.current > 10) {
                setMessage("You have exceeded the maximum number of searches (10). Please try again later.");
                return;
            } else {
                setMessage(`You can only perform ${10 - searchCount.current} more searches.`);
            }
            const results = products.filter(product =>
                product.toLowerCase().includes(keyword.toLowerCase())
            );
            setFilteredProducts(results);
            setMessage(`
                Found ${results.length} products matching "${keyword}". Total searches: ${searchCount.current}.
                You can only perform ${10 - searchCount.current} more searches.
            `);

        } else {
            setFilteredProducts([]);
            setMessage("Please enter a search term.");
        }
    };

    const resetSearch = () => {
        setQuery("");
        setFilteredProducts([]);
        setMessage("");
        searchCount.current = 0;
    };

    return (
        <section style={{ padding: "20px" }}>
            <h2>Product Search App</h2>
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search for a product..."
                style={{
                padding: "8px",
                width: "70%",
                border: "1px solid #ccc",
                borderRadius: "5px",
                }}
            />

            <button
                onClick={resetSearch}
                style={{
                marginLeft: "10px",
                padding: "8px 12px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                }}
            >
                Reset
            </button>

            {/* message area */}
            <p
                style={{
                marginTop: "15px",
                fontWeight: "bold",
                color:
                    searchCount.current > 10
                    ? "red"
                    : message.includes("reset")
                    ? "green"
                    : "black",
                }}
            >
                {message}
            </p>

            {/* Search results */}
            {filteredProducts.length > 0 && (
                <ul
                style={{
                    listStyle: "none",
                    marginTop: "10px",
                    padding: 0,
                    borderTop: "1px solid #ddd",
                }}
                >
                {filteredProducts.map((item, index) => (
                    <li
                    key={index}
                    style={{
                        padding: "8px",
                        borderBottom: "1px solid #eee",
                    }}
                    >
                    {item}
                    </li>
                ))}
                </ul>
            )}

            {/* When no results */}
            {query && filteredProducts.length === 0 && (
                <p style={{ color: "gray" }}>No products found.</p>
            )}
        </section>
    );
}