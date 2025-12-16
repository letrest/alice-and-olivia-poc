import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs & Title */}
        <div className="flex flex-col items-center mb-8 space-y-4">
           <div className="text-[10px] text-gray-400 uppercase tracking-widest space-x-2">
             <Link href="/" className="hover:text-black">Shop</Link>
             <span>/</span>
             <Link href="/" className="hover:text-black">Tops</Link>
             <span>/</span>
             <span className="text-black">Blouses</span>
           </div>
           <h1 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.15em] text-gray-900">Blouses</h1>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-end mb-6">
          <button className="flex items-center space-x-2 text-xs font-medium uppercase tracking-widest text-gray-500 hover:text-black">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span>Filter</span>
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
