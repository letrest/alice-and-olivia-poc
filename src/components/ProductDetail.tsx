'use client';

import { useState } from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductImageCarousel from './ProductImageCarousel';
import ColorSwatches from './ColorSwatches';
import SizeSelector from './SizeSelector';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart, openCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleAddToBag = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.discountedPrice || product.price,
      image: selectedColor.images[0],
      color: selectedColor.name,
      size: selectedSize,
      quantity: 1,
    });
    openCart();
  };

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
      {/* Image Gallery */}
      <div className="mb-8 lg:mb-0">
        <ProductImageCarousel 
          images={selectedColor.images} 
          productName={product.name} 
        />
      </div>

      {/* Product Info */}
      <div className="px-4 sm:px-0 lg:mt-0">
        <h1 className="text-xl text-gray-600 uppercase tracking-wide ">
          {product.name}
        </h1>
        <div className="mt-4 flex items-center gap-3">
          {product.discountedPrice ? (
            <>
              <p className="text-xl text-gray-400 font-light line-through decoration-gray-400">${product.price.toFixed(2)}</p>
              <p className="text-xl text-gray-600 font-light">${product.discountedPrice.toFixed(2)}</p>
            </>
          ) : (
            <p className="text-xl text-gray-600 font-light">${product.price.toFixed(2)}</p>
          )}
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide">Color: <span className="font-normal text-gray-600 ml-2">{selectedColor.name}</span></h3>
          <div className="mt-4">
            <ColorSwatches
              colors={product.colors}
              selectedColor={selectedColor}
              onSelectColor={(color) => {
                setSelectedColor(color);
                setSelectedSize(null); // Reset size when color changes
              }}
            />
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide">Size: <span className="font-normal text-gray-600 ml-2">{selectedSize || 'Select a size'}</span></h3>
          <div className="mt-4">
            <SizeSelector
              availableSizes={selectedColor.availableSizes || []}
              selectedSize={selectedSize}
              onSelectSize={setSelectedSize}
            />
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide">Description</h3>
          <div className="mt-4 space-y-6">
            <p className="text-base text-gray-600 leading-relaxed">{product.description}</p>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-50 lg:static lg:p-0 lg:bg-transparent lg:border-none lg:mt-10">
          <button
            type="button"
            onClick={handleAddToBag}
            disabled={!selectedSize}
            className={`flex w-full items-center justify-center px-8 py-4 text-base font-bold text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 uppercase tracking-widest transition-colors ${
              selectedSize 
                ? 'bg-black hover:bg-gray-800' 
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {selectedSize ? 'Add to Bag' : 'Select Size'}
          </button>
        </div>
      </div>
    </div>
  );
}
