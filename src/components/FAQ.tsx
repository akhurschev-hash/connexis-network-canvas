import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use AES-256 encryption for all data at rest and in transit. We're on our SOC2 compliance roadmap and follow industry best practices. Your investor relationships are yours—we never share or sell your data.",
    },
    {
      question: "Can I import existing spreadsheets?",
      answer: "Yes! Connexis supports CSV uploads and direct Google Sheets sync. You can also connect your LinkedIn for automatic contact imports. Our smart mapping handles different formats seamlessly.",
    },
    {
      question: "What happens after the free trial?",
      answer: "After 14 days, you can choose between our flexible monthly or annual plans. No credit card required for the trial. You'll get full access to all features during the trial period.",
    },
    {
      question: "Do you support team collaboration?",
      answer: "Yes! Our Team plan includes shared workspaces, role-based permissions, and collaborative notes. Multiple team members can work on investor relationships together.",
    },
    {
      question: "How does the 3D visualization work?",
      answer: "Our AI automatically maps relationships between contacts based on shared connections, communication history, and mutual interests. The 3D graph makes patterns visible that spreadsheets hide.",
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Common <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Connexis
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="card-glow rounded-xl border border-primary/10 px-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left font-heading text-lg hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
