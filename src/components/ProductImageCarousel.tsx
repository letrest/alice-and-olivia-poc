'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

export default function ProductImageCarousel({ images, productName }: ProductImageCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Reset to first image when images array changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [images]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:max-h-[80vh] no-scrollbar py-2 px-4 lg:py-0 lg:px-0 min-w-20">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative w-20 h-24 flex-shrink-0 border transition-colors ${
              selectedIndex === idx ? 'border-black' : 'border-transparent hover:border-gray-300'
            }`}
          >
            <Image
              src={img}
              alt={`${productName} view ${idx + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
      
      {/* Main Image */}
      <div className="sticky top-20 px-4 lg:px-0 content-center">
        <div className="relative w-full aspect-[3/4] lg:h-[40vh] lg:w-full lg:flex-1 bg-gray-50">
            <Image
            src={images[selectedIndex]}
            alt={productName}
            fill
            className="object-cover left-10 top-0 absolute"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            />
        </div>
      </div>
    </div>
  );
}
