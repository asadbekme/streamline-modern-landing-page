import { BarChart3 } from "lucide-react";
import Link from "next/link";
import { ButtonWithAnimation } from "../button-with-animation";
import MobileNav from "../mobile-nav";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-emerald-500" />
          <span className="text-xl font-bold">StreamLine</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
          >
            Contact
          </Link>
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
