import { fetchFilteredProducts } from '@/app/lib/data';
import { Product } from '@prisma/client';

export default async function ProductsGrid({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {

    const products = await fetchFilteredProducts(query, currentPage);

    return (
        <div className="productGrid">
         {products.map((product) => (
            <div key={product.id} className="productCard">
              <img src={product.image} alt={product.name}/>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Seller: {product.seller}</p>
            </div>
          ))}
        </div>
    )
  }