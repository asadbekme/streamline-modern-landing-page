import Link from "next/link";
import { BarChart3, Github, Instagram, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-emerald-500" />
          <span className="text-lg font-bold">StreamLine</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <nav className="flex gap-4 md:gap-6">
            <Link
              href="#"
              className="text-xs md:text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs md:text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs md:text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
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
