'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, subtotal } = useCart();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[70] w-full max-w-[400px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold uppercase tracking-widest">Shopping Bag ({items.reduce((a, c) => a + c.quantity, 0)})</h2>
            <button onClick={closeCart} className="p-2 hover:text-gray-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <p className="text-gray-500 uppercase tracking-wide">Your bag is empty</p>
                <button 
                  onClick={closeCart}
                  className="text-xs font-bold underline uppercase tracking-widest hover:text-gray-500"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-24 aspect-[3/4] flex-shrink-0 bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 line-clamp-2">
                          {item.name}
                        </h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-black ml-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      
                      <p className="mt-1 text-xs text-gray-500 uppercase tracking-wide">
                        {item.color} / {item.size}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-gray-200">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-gray-50"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-100 p-6 bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold uppercase tracking-widest">Subtotal</span>
                <span className="text-sm font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-gray-500 mb-4 text-center">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                  Checkout
                </button>
                <button 
                  onClick={closeCart}
                  className="w-full border border-black bg-white text-black py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors"
                >
                  View Bag
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
