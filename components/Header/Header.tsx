"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  path: string;
}

interface HeaderProps {
  navItems: NavItem[];
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export default function Header({
  navItems,
  isMobileMenuOpen,
  onToggleMobileMenu,
}: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 h-20 flex items-center transition-all">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">

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
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-stone-900"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={onToggleMobileMenu}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
