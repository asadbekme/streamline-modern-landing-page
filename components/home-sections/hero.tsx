import Image from "next/image";
import { ButtonWithAnimation } from "../button-with-animation";
import AnimatedSection from "../animated-section";

function Hero() {
  return (
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
          <AnimatedSection className="mx-auto" direction="right" delay={300}>
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
  );
}

export default Hero;
