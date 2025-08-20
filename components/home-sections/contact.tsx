import AnimatedSection from "../animated-section";
import ContactForm from "../contact-form";
import { contacts } from "./data";

function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
                Have questions about StreamLine? Our team is here to help. Fill
                out the form and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div key={contact.label} className="flex items-start space-x-4">
                  <div className="rounded-full bg-emerald-100 p-2">
                    <contact.icon className="size-5 text-emerald-600" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{contact.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {contact.value}
                    </p>
                  </div>
                </div>
              ))}
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
  );
}

export default Contact;
