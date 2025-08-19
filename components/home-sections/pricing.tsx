import { CheckCircle2 } from "lucide-react";
import AnimatedList from "../animated-list";
import AnimatedSection from "../animated-section";
import { ButtonWithAnimation } from "../button-with-animation";

function Pricing() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
              Choose the plan that's right for your team. All plans include a
              14-day free trial.
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
              <span className="ml-1 text-sm text-muted-foreground">/month</span>
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
              <span className="ml-1 text-sm text-muted-foreground">/month</span>
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
              <span className="ml-1 text-sm text-muted-foreground">/month</span>
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
  );
}

export default Pricing;
