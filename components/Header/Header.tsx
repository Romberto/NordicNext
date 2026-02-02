"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  path: string;
}

interface HeaderProps {
  navItems: NavItem[];
}

export default function Header({ navItems }: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 transition-all">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-20">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-stone-900 flex items-center justify-center text-white font-serif font-bold text-lg">
            N
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-stone-900">
            NORDIC<span className="font-light text-stone-500">SIP</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const isActive =
              item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isActive ? "text-stone-900" : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu + Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 h-screen w-[100vh] bg-black/40 backdrop-blur-sm z-40"
            onClick={closeMobileMenu}
          ></div>

          {/* Sliding Menu */}
          <div className="fixed top-[50%]  w-[280px] left-[50%] translate-x-[-50%] bg-white shadow-lg border-b border-stone-100 z-50 transform transition-transform duration-300 rounded-2xl border">
            <nav className="flex flex-col gap-6 p-6 pt-12 ">
              {navItems.map((item) => {
                const isActive =
                  item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`text-lg font-medium transition-colors ${
                      isActive ? "text-stone-900" : "text-stone-500 hover:text-stone-900 hover:bg-gray-200"
                    }`}
                    onClick={closeMobileMenu} // закрываем при клике на ссылку
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
