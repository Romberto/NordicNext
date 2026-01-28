"use client"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import { useState } from "react";

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'Проекты', path: '/catalog' },
  { label: 'Блог', path: '/blog' },
  { label: 'Контакты', path: '/contacts' },
];

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div>
      <Header navItems={navItems} isMobileMenuOpen={isMobileMenuOpen} onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}/>
    <main>
        <Hero/>
    </main>
    <Footer/>
    </div>
    
  );
}
