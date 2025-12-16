import Link from "next/link";
export default function Header() {

  return (
    <div>
        {/* Promo Banner */}
        <div className="bg-black text-white text-[10px] sm:text-xs py-2 text-center tracking-widest uppercase font-medium">
            Want 15% off your first purchase? <span className="underline cursor-pointer">Sign up here</span>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
            <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                {/* Left: Hamburger Menu (Mobile) */}
                <div className="flex items-center lg:hidden">
                <button className="p-2 -ml-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                </div>

                {/* Center: Logo */}
                <div className="flex flex-col items-center justify-center absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none lg:translate-x-0 lg:items-start">
                <Link href="/" className="text-l text-black uppercase tracking-[0.2em]">Alice + Olivia</Link>
                <span className="text-[0.5rem] sm:text-[0.6rem] uppercase tracking-widest text-gray-500 mt-0.5">By Stacey Bendet</span>
                </div>
                            {/* Navigation (Desktop) */}
            <nav className="hidden lg:block  py-3">
            <ul className="flex justify-center space-x-8 text-[11px] font-bold uppercase tracking-widest text-gray-900">
                <li className="cursor-pointer hover:text-gray-500">New Arrivals</li>
                <li className="cursor-pointer hover:text-gray-500">Clothing</li>
                <li className="cursor-pointer hover:text-gray-500">Dresses</li>
                <li className="cursor-pointer hover:text-gray-500">Sale</li>
            </ul>
            </nav>

                {/* Right: Icons */}
                <div className="flex items-center space-x-4">
                <button className="p-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <button className="p-2 relative">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="absolute top-1 right-0 bg-black text-white text-[0.6rem] w-3.5 h-3.5 flex items-center justify-center rounded-full">0</span>
                </button>
                </div>
            </div>
            </div>
        </header>
    </div>
  );
}   