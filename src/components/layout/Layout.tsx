import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen matrix-bg ctx-grid bg-[var(--bg)] text-[var(--muted)] flex flex-col relative">
      <Header />
      <main className="flex-1 page-abstract relative">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
