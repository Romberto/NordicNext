"use client";

import { useState } from "react";
import Header from "./Header";

interface NavItem {
  label: string;
  path: string;
}

interface Props {
  navItems: NavItem[];
}

export default function HeaderClient({ navItems }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Header
      navItems={navItems}
      isMobileMenuOpen={isMobileMenuOpen}
      onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
    />
  );
}
