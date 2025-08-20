import { BarChart3 } from "lucide-react";
import Link from "next/link";
import { ButtonWithAnimation } from "../button-with-animation";
import MobileNav from "../mobile-nav";
import { navigationLinks } from "./data";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="size-6 text-emerald-500" />
          <span className="text-xl font-bold">StreamLine</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-emerald-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <ButtonWithAnimation className="bg-emerald-500 hover:bg-emerald-600">
            Get Started
          </ButtonWithAnimation>
        </div>
      </div>
    </header>
  );
}

export default Header;
