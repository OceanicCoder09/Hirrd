import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json"; // Ensure this path is correct
import faqs from "../data/faq.json"; // Ensure this path is correct
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

/**
 * LandingPage Component
 * Renders the main landing page of the job portal.
 * Features include a hero section, company showcase, feature cards, and FAQs.
 */
const LandingPage = () => {
  return (
    // Main container for the landing page content
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      {/* Hero Section: Catchy headline and call to action */}
      <section className="text-center">
        {/* Main heading with the brand logo integrated */}
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get
            <img
              src="/logo.png"
              className="h-14 sm:h-24 lg:h-32"
              alt="Hirrd Logo - Your path to the perfect job" // More descriptive alt text for accessibility
            />
          </span>
        </h1>
        {/* Sub-headline providing more detail */}
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>

      {/* Action Buttons: Navigate to job listings or job posting */}
      <div className="flex gap-6 justify-center">
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>

      {/* Companies Showcase Carousel */}
      <section className="py-10">
        {/* Screen-reader only heading for accessibility */}
        <h2 className="sr-only">Trusted by Leading Companies</h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false, // Keep autoplaying even if user interacts
            }),
          ]}
          opts={{
            align: "start", // Align carousel items to the start
            loop: true,     // Loop the carousel infinitely
          }}
          className="w-full"
        >
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies.map(({ name, id, path }) => (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
                <img
                  src={path}
                  alt={`${name} Company Logo`} // More descriptive alt text
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Promotional Banner Image */}
      <section className="py-10">
        <h2 className="sr-only">Discover more with Hirrd</h2> {/* Hidden heading for accessibility */}
        <img
          src="/banner.png"
          className="w-full object-cover" // Ensure the image covers its area nicely
          alt="Promotional banner highlighting key features of Hirrd job portal" // Descriptive alt text
        />
      </section>

      {/* Feature Cards: Differentiating sections for job seekers and employers */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
};

export default LandingPage;