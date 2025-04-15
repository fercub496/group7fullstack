import Search from '@/app/ui/search';
import { ProductsSkeleton, BarTopSkeleton} from '@/app/ui/skeletons';
import { Suspense } from 'react';
import ProductsGrid from '@/app/ui/products/products-grid';
import { fetchProductsPages } from '@/app/lib/data';
import Pagination from '@/app/ui/products/pagination';


export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchProductsPages(query);

  return (
    <div>
      {/* Etsy-style Filter Buttons */}
      <Suspense fallback={<BarTopSkeleton />}>
        <Search/>
      </Suspense>
      <Suspense key={query + currentPage} fallback={<ProductsSkeleton />}>
        <ProductsGrid query={query} currentPage={currentPage} />
      </Suspense>
      <div className="pagination">
        {<Pagination totalPages={totalPages} />}
      </div>
    </div>
  );
}
