interface SizeSelectorProps {
  availableSizes: string[];
  selectedSize: string | null;
  onSelectSize: (size: string) => void;
}

const ALL_SIZES = ['XS', 'S', 'M', 'L', 'XL'];

export default function SizeSelector({ availableSizes, selectedSize, onSelectSize }: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {ALL_SIZES.map((size) => {
        const isAvailable = availableSizes.includes(size);
        const isSelected = selectedSize === size;

        return (
          <button
            key={size}
            onClick={() => isAvailable && onSelectSize(size)}
            disabled={!isAvailable}
            className={`
              relative h-10 w-16 border text-sm font-medium transition-all
              ${!isAvailable 
                ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                : isSelected
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 text-gray-900 hover:border-black'
              }
            `}
          >
            {size}
            {!isAvailable && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-px w-full bg-gray-300 rotate-[-25deg]" />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
