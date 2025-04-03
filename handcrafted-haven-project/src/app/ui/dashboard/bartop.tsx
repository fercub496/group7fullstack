import Link from 'next/link';

export default function BarTop() {
    return (
      <div className="bar-top">
        <Link href="/dashboard/sellers" className="top-nav-link">
          <div className="side-nav-text">WOOD</div>
        </Link>
  
        <Link href="/dashboard/products" className="top-nav-link">
          <div className="side-nav-text">GLASS</div>
        </Link>
  
        <Link href="/dashboard/reviews" className="top-nav-link">
          <div className="side-nav-text">FABRIC</div>
        </Link>

        <Link href="/dashboard/reviews" className="top-nav-link">
          <div className="side-nav-text">CERAMIC</div>
        </Link>

        <Link href="/dashboard/reviews" className="top-nav-link">
          <div className="side-nav-text">METAL</div>
        </Link>
  
      </div>
    );
  }
  