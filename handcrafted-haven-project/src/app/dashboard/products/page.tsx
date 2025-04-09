"use client";

import { useEffect, useState } from "react";
import { ProductsSkeleton } from '@/app/ui/skeletons';

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
      {/* Etsy-style Filter Buttons */}
      <div className="bar-top">
        <button className="bar-top-text" onClick={() => setSelectedCategory(null)}>ALL</button>
        <button className="bar-top-text" onClick={() => setSelectedCategory("Wood")}>WOOD</button>
        <button className="bar-top-text" onClick={() => setSelectedCategory("Ceramic")}>CERAMIC</button>
        <button className="bar-top-text" onClick={() => setSelectedCategory("Jewelry")}>JEWERLY</button>
        <button className="bar-top-text" onClick={() => setSelectedCategory("Textiles")}>TEXTILES</button>
      </div>

      {/* Products Grid */}
      {loading ? (
        < ProductsSkeleton />
      ) : (
        <div className="productGrid">
         {products.map((product) => (
            <div key={product.id} className="productCard">
              <img src={product.image} alt={product.name}/>
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
