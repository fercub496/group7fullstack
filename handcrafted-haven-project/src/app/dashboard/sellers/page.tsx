"use client";

import { useEffect, useState } from "react";

type Seller = {
  id: string;
  name: string;
  sellerimage: string;
};

export default function SellersPage() {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSellers() {
      try {
        const response = await fetch("/api/sellers");
        const data = await response.json();
        setSellers(data);
      } catch (error) {
        console.error("Failed to fetch sellers:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSellers();
  }, []);

  if (loading) return <p className="p-4">Loading sellers...</p>;

  return (
    <div>
      <h1>Sellers</h1>
      <div className="productGrid">
        {sellers.map((seller) => (
          <div
            key={seller.id}
            className="productCard"
          >
            <img
              src={seller.sellerimage}
              alt={seller.name}
            />
            <h2>{seller.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}