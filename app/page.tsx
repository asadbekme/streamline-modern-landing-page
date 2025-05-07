import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "@/components/mobile-nav";
import { ContactForm } from "@/components/contact-form";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedList } from "@/components/animated-list";
import { ButtonWithAnimation } from "@/components/button-with-animation";
import {
  CheckCircle2,
  ArrowRight,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  BarChart3,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

export default function LandingPage() {
  return (
    <>
      {/* Header */}
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

      <main>
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <AnimatedSection
                className="flex flex-col justify-center space-y-4"
                direction="left"
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Workflow, Amplify Your Results
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The all-in-one platform that helps teams collaborate, manage
                    projects, and deliver results faster than ever before.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <ButtonWithAnimation className="bg-emerald-500 hover:bg-emerald-600">
                    Start Free Trial
                  </ButtonWithAnimation>
                  <ButtonWithAnimation variant="outline">
                    Book a Demo
                  </ButtonWithAnimation>
                </div>
              </AnimatedSection>
              <AnimatedSection
                className="mx-auto"
                direction="right"
                delay={300}
              >
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Dashboard Preview"
                  className="aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Everything You Need in One Place
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our platform provides all the tools you need to manage your
                  projects efficiently and effectively.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedList
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4"
              staggerDelay={150}
            >
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Lightning Fast</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Our platform is optimized for speed, ensuring your team can
                  work without delays.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Secure</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Enterprise-grade security to keep your data safe and protected
                  at all times.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="rounded-full bg-emerald-100 p-3">
                  <BarChart3 className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Analytics</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Comprehensive analytics to help you make data-driven
                  decisions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Time-Saving</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Automation features that save your team hours of manual work
                  every week.
                </p>
              </div>
            </AnimatedList>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Loved by Teams Worldwide
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Don't just take our word for it. See what our customers have
                  to say.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedList
              className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
              staggerDelay={200}
            >
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    "StreamLine has completely transformed how our team works.
                    We've cut our project delivery time in half!"
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">
                      CTO, TechCorp
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    "The analytics features alone are worth the investment.
                    We've gained insights we never had before."
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-xs text-muted-foreground">
                      Product Manager, InnovateCo
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    "Customer support is exceptional. Any issues we've had were
                    resolved within hours, not days."
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="rounded-full bg-muted h-10 w-10"></div>
                  <div>
                    <p className="text-sm font-medium">Emily Rodriguez</p>
                    <p className="text-xs text-muted-foreground">
                      Operations Director, GrowthLabs
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedList>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Choose the plan that's right for your team. All plans include
                  a 14-day free trial.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedList
              className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
              staggerDelay={200}
            >
              {/* Starter Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-sm text-muted-foreground">
                    Perfect for small teams just getting started.
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    /month
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>5GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Email support</span>
                  </li>
                </ul>
                <ButtonWithAnimation className="mt-6 bg-emerald-500 hover:bg-emerald-600">
                  Get Started
                </ButtonWithAnimation>
              </div>

              {/* Pro Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-sm text-muted-foreground">
                    For growing teams that need more.
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$79</span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    /month
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Up to 20 team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>20GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Advanced integrations</span>
                  </li>
                </ul>
                <ButtonWithAnimation className="mt-6 bg-emerald-500 hover:bg-emerald-600">
                  Get Started
                </ButtonWithAnimation>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-sm text-muted-foreground">
                    For large organizations with specific needs.
                  </p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$199</span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    /month
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Custom analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Unlimited storage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-500" />
                    <span>On-premise deployment option</span>
                  </li>
                </ul>
                <ButtonWithAnimation className="mt-6 bg-emerald-500 hover:bg-emerald-600">
                  Contact Sales
                </ButtonWithAnimation>
              </div>
            </AnimatedList>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <AnimatedSection
                className="flex flex-col justify-center space-y-4"
                direction="left"
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Get in Touch
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Have questions about StreamLine? Our team is here to help.
                    Fill out the form and we'll get back to you as soon as
                    possible.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-emerald-100 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-emerald-600"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        +1 (555) 000-0000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-emerald-100 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-emerald-600"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        hello@streamline.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-emerald-100 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-emerald-600"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        123 Innovation Drive, San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection
                className="rounded-lg border bg-background p-6 shadow-sm"
                direction="right"
                delay={200}
              >
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Transform Your Workflow?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Join thousands of teams already using StreamLine to boost
                  productivity and deliver results.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <ButtonWithAnimation className="bg-emerald-500 hover:bg-emerald-600">
                  Start Your Free Trial
                </ButtonWithAnimation>
                <ButtonWithAnimation variant="outline">
                  Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonWithAnimation>
              </div>
              <p className="text-xs text-muted-foreground">
                No credit card required. 14-day free trial.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* Footer */}
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
    </>
  );
}
