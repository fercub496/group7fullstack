'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    
    }
    replace(`${pathname}?${params.toString()}`);
  }
  
  return (
    <div className="bar-top">
        <button className="bar-top-text" onClick={() => handleSearch("")}>ALL</button>
        <button className="bar-top-text" onClick={() => handleSearch("Wood")}>WOOD</button>
        <button className="bar-top-text" onClick={() => handleSearch("Ceramic")}>CERAMIC</button>
        <button className="bar-top-text" onClick={() => handleSearch("Jewelry")}>JEWERLY</button>
        <button className="bar-top-text" onClick={() => handleSearch("Textiles")}>TEXTILES</button>
    </div>
  );
}