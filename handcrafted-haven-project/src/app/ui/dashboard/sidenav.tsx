import Link from 'next/link';
import HHLogo from '../hh-logo';

export default function SideNav() {
  return (
    <div className="side-nav">
      <Link
        className="side-nav-logo"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <HHLogo />
        </div>
      </Link>

      <div className="bar"></div>

      <Link href="/dashboard/sellers" className="side-nav-link">
        <div className="side-nav-text">SELLERS</div>
      </Link>

      <Link href="/dashboard/products" className="side-nav-link">
        <div className="side-nav-text">PRODUCTS</div>
      </Link>

      <Link href="/dashboard/reviews" className="side-nav-link">
        <div className="side-nav-text">REVIEWS & RATINGS</div>
      </Link>

    </div>
  );
}

