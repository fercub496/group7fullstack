import { fetchFilteredSellers } from '@/app/lib/data';

export default async function SellersGrid({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {

    const sellers = await fetchFilteredSellers(query, currentPage);

    return (
      
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
      
    );
  }