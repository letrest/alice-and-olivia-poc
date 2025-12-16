import { ProductColor } from '@/data/products';
import Image from 'next/image';

interface ColorSwatchesProps {
  colors: ProductColor[];
  selectedColor: ProductColor;
  onSelectColor: (color: ProductColor) => void;
}

export default function ColorSwatches({ colors, selectedColor, onSelectColor }: ColorSwatchesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => {
        const isSelected = selectedColor.name === color.name;
        return (
          <button
            key={color.name}
            onClick={() => onSelectColor(color)}
            className={`relative h-8 w-8 border focus:outline-none transition-all ${
              isSelected 
                ? 'border-black border-2' 
                : 'border-gray-200 hover:border-gray-400'
            }`}
            title={color.name}
            aria-label={`Select color ${color.name}`}
          >
            <Image 
              src={color.images[0]} 
              alt={color.name}
              fill
              className="object-cover"
              sizes="24px"
            />
          </button>
        );
      })}
    </div>
  );
}
