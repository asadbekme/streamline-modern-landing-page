import AnimatedSection from "../animated-section";
import AnimatedList from "../animated-list";
import { features } from "./data";

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
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.name}
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="rounded-full bg-emerald-100 p-3">
                  <Icon className="size-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">{feature.name}</h3>
                <p className="text-center text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </AnimatedList>
      </div>
    </section>
  );
}

export default Features;
