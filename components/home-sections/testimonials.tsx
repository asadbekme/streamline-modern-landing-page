import AnimatedList from "../animated-list";
import AnimatedSection from "../animated-section";

function Testimonials() {
  return (
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
              Don't just take our word for it. See what our customers have to
              say.
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
                "StreamLine has completely transformed how our team works. We've
                cut our project delivery time in half!"
              </p>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="rounded-full bg-muted h-10 w-10"></div>
              <div>
                <p className="text-sm font-medium">Sarah Johnson</p>
                <p className="text-xs text-muted-foreground">CTO, TechCorp</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                "The analytics features alone are worth the investment. We've
                gained insights we never had before."
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
  );
}

export default Testimonials;
