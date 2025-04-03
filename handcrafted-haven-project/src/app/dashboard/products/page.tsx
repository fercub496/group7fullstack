"use client";

import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
};

export default function DashboardPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const query = selectedCategory ? `?category=${selectedCategory}` : "";
        const response = await fetch(`/api/products${query}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Etsy-style Filter Buttons */}
      <div className="bar-top" style={{ marginBottom: "20px" }}>
        <button onClick={() => setSelectedCategory(null)}>All</button>
        <button onClick={() => setSelectedCategory("Wood")}>Wood</button>
        <button onClick={() => setSelectedCategory("Ceramic")}>Ceramic</button>
        <button onClick={() => setSelectedCategory("Jewelry")}>Jewelry</button>
        <button onClick={() => setSelectedCategory("Textiles")}>Textiles</button>
      </div>

      {/* Products Grid */}
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {products.map((product) => (
            <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
              <img src={product.image} alt={product.name} width={150} />
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
