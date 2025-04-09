import SideNav from '@/app/ui/dashboard/sidenav';
import Link from 'next/link';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dash-layout">
      <SideNav />
      <div className="body-layout">
        <div className="top-header">
          <Link href="/" className="sign-link">SIGN IN</Link>
        </div>
        <div className="bar-top-null"></div>
        <div className="bar-center"></div>
      </div>
      <div className="children">
        {children}
      </div>
    </div>
  );
}