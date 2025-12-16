import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const defaultColor = product.colors[0];
  const defaultImage = defaultColor.images[0];

  return (
    <div className="group block">
      <div className="relative aspect-[3/4.5] w-full overflow-hidden bg-gray-100 mb-3">
        <Link href={`/product/${product.id}`}>
          <Image
            src={defaultImage}
            alt={product.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        
        {/* Quick Add Button */}
        <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors z-10" aria-label="Quick Add">
          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>

        {/* Carousel Indicators (Visual Only) */}
        <div className="absolute bottom-3 left-3 flex space-x-1">
           <div className="w-3 h-0.5 bg-black"></div>
           <div className="w-3 h-0.5 bg-gray-300/80"></div>
           <div className="w-3 h-0.5 bg-gray-300/80"></div>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase tracking-[0.15em] mb-1 hover:text-black transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mb-2">
          {product.discountedPrice ? (
            <>
              <p className="text-xl text-gray-400 font-light line-through decoration-gray-400">${product.price.toFixed(2)}</p>
              <p className="text-xl text-gray-600 font-light">${product.discountedPrice.toFixed(2)}</p>
            </>
          ) : (
            <p className="text-sm text-gray-600 font-normal tracking-wide">${product.price.toFixed(0)}</p>
          )}
        </div>
        
        {/* Color Swatch */}
        <div className="flex items-center space-x-1">
           <div 
             className="w-3 h-3 border border-gray-300" 
             style={{ backgroundColor: defaultColor.hex }}
             title={defaultColor.name}
           />
           {product.colors.length > 1 && (
             <span className="text-[10px] text-gray-400">+ {product.colors.length - 1}</span>
           )}
        </div>
      </div>
    </div>
  );
}
