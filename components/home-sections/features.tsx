import { BarChart3, Clock, Shield, Zap } from "lucide-react";
import AnimatedSection from "../animated-section";
import AnimatedList from "../animated-list";

function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
              Our platform is optimized for speed, ensuring your team can work
              without delays.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="rounded-full bg-emerald-100 p-3">
              <Shield className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold">Secure</h3>
            <p className="text-center text-sm text-muted-foreground">
              Enterprise-grade security to keep your data safe and protected at
              all times.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="rounded-full bg-emerald-100 p-3">
              <BarChart3 className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold">Analytics</h3>
            <p className="text-center text-sm text-muted-foreground">
              Comprehensive analytics to help you make data-driven decisions.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="rounded-full bg-emerald-100 p-3">
              <Clock className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold">Time-Saving</h3>
            <p className="text-center text-sm text-muted-foreground">
              Automation features that save your team hours of manual work every
              week.
            </p>
          </div>
        </AnimatedList>
      </div>
    </section>
  );
}

export default Features;
