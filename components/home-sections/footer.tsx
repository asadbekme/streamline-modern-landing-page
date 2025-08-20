import Link from "next/link";
import { BarChart3 } from "lucide-react";
import { footerLinks, socialLinks } from "./data";

function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-3">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <BarChart3 className="size-6 text-emerald-500" />
          <span className="text-lg font-bold">StreamLine</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <nav className="flex gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs md:text-sm text-muted-foreground hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Icon className="size-4" />
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 my-2 md:mt-0">
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} StreamLine, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
