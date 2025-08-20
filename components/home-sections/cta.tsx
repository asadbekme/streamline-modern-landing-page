import { ArrowRight } from "lucide-react";
import AnimatedSection from "../animated-section";
import { ButtonWithAnimation } from "../button-with-animation";

function CTA() {
  return (
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
              Schedule a Demo <ArrowRight className="ml-2 size-4" />
            </ButtonWithAnimation>
          </div>
          <p className="text-xs text-muted-foreground">
            No credit card required. 14-day free trial.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default CTA;
