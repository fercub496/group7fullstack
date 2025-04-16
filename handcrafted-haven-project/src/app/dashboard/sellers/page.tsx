import SellersGrid from "@/app/ui/sellers/sellers-grid";
import { SellersSkeleton} from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchSellersPages } from '@/app/lib/data';
import Pagination from '@/app/ui/products/pagination';
import Search from "@/app/ui/seller-search";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchSellersPages(query);

  return (
    <div>
      <Search placeholder="Search sellers..."/>
      <Suspense key={query + currentPage} fallback={<SellersSkeleton />}>
        <SellersGrid query={query} currentPage={currentPage} />
      </Suspense>
      <div className="pagination">
        {<Pagination totalPages={totalPages} />}
      </div>
    </div>
  );
}