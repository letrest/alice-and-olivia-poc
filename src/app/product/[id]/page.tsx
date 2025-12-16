import { products } from '@/data/products';
import ProductDetail from '@/components/ProductDetail';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="mx-auto max-w-[1600px] pb-32 sm:px-6 lg:px-8 lg:py-8 lg:pb-8">
         <div className="mb-8 px-4 sm:px-0 pt-4 lg:pt-0">
           <Link href="/" className="text-xs font-bold text-gray-500 hover:text-black uppercase tracking-widest flex items-center gap-2">
             <span>&larr;</span> Back to Blouses
           </Link>
         </div>
        <ProductDetail product={product} />
      </main>
    </div>
  );
}
