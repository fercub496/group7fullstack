import Link from 'next/link';

export default function SideNav() {
  return (
    <div className="side-nav">
      <h1 className="side-nav-header">Handcrafted Haven</h1>

      <Link href="/dashboard/sellers" className="side-nav-link">
        <div className="side-nav-text">Sellers</div>
      </Link>

      <Link href="/dashboard/products" className="side-nav-link">
        <div className="side-nav-text">Products</div>
      </Link>

      <Link href="/dashboard/reviews" className="side-nav-link">
        <div className="side-nav-text">Reviews and Ratings</div>
      </Link>

    </div>
  );
}
