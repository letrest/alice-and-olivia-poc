import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Alice + Olivia POC",
  description: "Alice + Olivia POC built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <CartProvider>
          <Header />
          <CartDrawer />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
