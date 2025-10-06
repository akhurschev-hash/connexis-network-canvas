import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const productItems = {
  Discovery: [
    { title: "Investors", href: "#investors" },
    { title: "Companies", href: "#companies" },
    { title: "People", href: "#people" },
  ],
  Intelligence: [
    { title: "Round Coach", href: "#round-coach" },
    { title: "Relationship Intelligence", href: "#relationship-intelligence" },
    { title: "Investor Intelligence", href: "#investor-intelligence" },
  ],
  Process: [
    { title: "Investor Pipeline", href: "#investor-pipeline" },
    { title: "Communications", href: "#communications" },
  ],
};

const resourcesItems = {
  Customers: [
    { title: "Customer Stories", href: "#customer-stories" },
    { title: "Customer Onboarding", href: "#customer-onboarding" },
  ],
  Documentation: [
    { title: "Blog", href: "#blog" },
    { title: "Product Docs", href: "#product-docs" },
  ],
};

const companyItems = {
  Careers: [
    { title: "Open Roles", href: "#open-roles" },
    { title: "Culture Code", href: "#culture-code" },
  ],
  About: [
    { title: "Manifesto", href: "#manifesto" },
  ],
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl border transition-all duration-300 ${
          isScrolled
            ? "bg-[rgba(12,14,18,0.85)] shadow-2xl border-white/10"
            : "bg-[rgba(12,14,18,0.6)] shadow-lg border-white/[0.08]"
        }`}
        style={{ backdropFilter: "blur(10px)" }}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold tracking-tight text-white hover:text-luminous-teal transition-colors focus:outline-none focus:ring-2 focus:ring-luminous-teal focus:ring-offset-2 focus:ring-offset-background rounded"
            aria-label="Connexis home"
          >
            connexis
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {/* Product Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-[#E6E6E6] hover:text-white hover:bg-white/[0.06] data-[state=open]:bg-white/[0.06] data-[state=open]:text-white focus:ring-luminous-teal">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-3 gap-6 p-6 w-[700px]">
                      {Object.entries(productItems).map(([category, links]) => (
                        <div key={category}>
                          <h3 className="text-sm font-semibold text-[#A9AFB8] mb-3 tracking-wide uppercase">
                            {category}
                          </h3>
                          <ul className="space-y-2">
                            {links.map((link) => (
                              <li key={link.title}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={link.href}
                                    className="block text-[#E6E6E6] hover:text-white transition-colors py-1.5 focus:outline-none focus:text-white rounded"
                                  >
                                    {link.title}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-[#E6E6E6] hover:text-white hover:bg-white/[0.06] data-[state=open]:bg-white/[0.06] data-[state=open]:text-white focus:ring-luminous-teal">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-6 p-6 w-[500px]">
                      {Object.entries(resourcesItems).map(([category, links]) => (
                        <div key={category}>
                          <h3 className="text-sm font-semibold text-[#A9AFB8] mb-3 tracking-wide uppercase">
                            {category}
                          </h3>
                          <ul className="space-y-2">
                            {links.map((link) => (
                              <li key={link.title}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={link.href}
                                    className="block text-[#E6E6E6] hover:text-white transition-colors py-1.5 focus:outline-none focus:text-white rounded"
                                  >
                                    {link.title}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Company Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-[#E6E6E6] hover:text-white hover:bg-white/[0.06] data-[state=open]:bg-white/[0.06] data-[state=open]:text-white focus:ring-luminous-teal">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-6 p-6 w-[400px]">
                      {Object.entries(companyItems).map(([category, links]) => (
                        <div key={category}>
                          <h3 className="text-sm font-semibold text-[#A9AFB8] mb-3 tracking-wide uppercase">
                            {category}
                          </h3>
                          <ul className="space-y-2">
                            {links.map((link) => (
                              <li key={link.title}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={link.href}
                                    className="block text-[#E6E6E6] hover:text-white transition-colors py-1.5 focus:outline-none focus:text-white rounded"
                                  >
                                    {link.title}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <Button
              onClick={() => window.open('https://forms.gle/aAPipwF6qBMESBSu7', '_blank')}
              className="ml-4 bg-gradient-to-r from-luminous-teal to-[#3A9BDC] text-white font-semibold px-6 py-2 rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(50,224,196,0.3)] hover:shadow-[0_0_30px_rgba(50,224,196,0.5)] focus:ring-2 focus:ring-luminous-teal focus:ring-offset-2 focus:ring-offset-background"
            >
              Join the Waitlist
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="bg-[#0C0E12] border-white/10 h-screen overflow-y-auto pt-20"
            >
              <Accordion type="single" collapsible className="w-full space-y-2">
                {/* Product Accordion */}
                <AccordionItem value="product" className="border-white/10">
                  <AccordionTrigger className="text-[#E6E6E6] hover:text-white font-medium">
                    Product
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      {Object.entries(productItems).map(([category, links]) => (
                        <div key={category}>
                          <h4 className="text-xs font-semibold text-[#A9AFB8] mb-2 uppercase tracking-wide">
                            {category}
                          </h4>
                          <ul className="space-y-2 ml-2">
                            {links.map((link) => (
                              <li key={link.title}>
                                <a
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block text-[#E6E6E6] hover:text-white py-1 transition-colors"
                                >
                                  {link.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Resources Accordion */}
                <AccordionItem value="resources" className="border-white/10">
                  <AccordionTrigger className="text-[#E6E6E6] hover:text-white font-medium">
                    Resources
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      {Object.entries(resourcesItems).map(([category, links]) => (
                        <div key={category}>
                          <h4 className="text-xs font-semibold text-[#A9AFB8] mb-2 uppercase tracking-wide">
                            {category}
                          </h4>
                          <ul className="space-y-2 ml-2">
                            {links.map((link) => (
                              <li key={link.title}>
                                <a
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block text-[#E6E6E6] hover:text-white py-1 transition-colors"
                                >
                                  {link.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Company Accordion */}
                <AccordionItem value="company" className="border-white/10">
                  <AccordionTrigger className="text-[#E6E6E6] hover:text-white font-medium">
                    Company
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      {Object.entries(companyItems).map(([category, links]) => (
                        <div key={category}>
                          <h4 className="text-xs font-semibold text-[#A9AFB8] mb-2 uppercase tracking-wide">
                            {category}
                          </h4>
                          <ul className="space-y-2 ml-2">
                            {links.map((link) => (
                              <li key={link.title}>
                                <a
                                  href={link.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block text-[#E6E6E6] hover:text-white py-1 transition-colors"
                                >
                                  {link.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Mobile CTA */}
              <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0C0E12] border-t border-white/10">
                <Button
                  onClick={() => {
                    window.open('https://forms.gle/aAPipwF6qBMESBSu7', '_blank');
                    setMobileOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-luminous-teal to-[#3A9BDC] text-white font-semibold py-3 rounded-full hover:brightness-110 transition-all shadow-[0_0_20px_rgba(50,224,196,0.3)]"
                >
                  Join the Waitlist
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
