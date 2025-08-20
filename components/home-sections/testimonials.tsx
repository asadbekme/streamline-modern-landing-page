import Image from "next/image";
import AnimatedList from "../animated-list";
import AnimatedSection from "../animated-section";
import { testimonials } from "./data";

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
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col justify-between rounded-lg border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <div className="size-10 bg-muted rounded-full">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full size-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium">{testimonial.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
}

export default Testimonials;
