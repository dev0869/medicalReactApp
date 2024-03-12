import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqArray = [
  {
    title: "What are your hours of operation?",
    content: "Our office is open Monday through Friday from 9 am to 5 pm.",
  },
  {
    title: "Do I need an appointment?",
    content:
      "Yes, we recommend making an appointment to ensure you receive the attention you need.",
  },
  {
    title: "How do I make an appointment from overseas?",
    content:
      "You can contact our international patient services team, and they will guide you through the process.",
  },
  {
    title: "Are language interpreters available?",
    content:
      "Yes, we provide language interpretation services for our international clients.",
  },
  {
    title: "Can I request my medical records online?",
    content:
      "Yes, you can access and request your medical records through our patient portal.",
  },
  {
    title: "Are telehealth appointments available?",
    content:
      "Yes, we offer telehealth services for remote consultations with our healthcare providers.",
  },
  {
    title: "Can I get an estimate of the medical costs?",
    content:
      "Yes, you can request a cost estimate for medical procedures or services. Please contact our billing department for assistance.",
  },
  {
    title: "How does billing work?",
    content:
      "We offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
  },
  {
    title: "Can I get a refund for my subscription?",
    content:
      "We offers a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.",
  },
  {
    title: "How do I cancel my subscription?",
    content:
      "To cancel your We subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing.",
  },
  {
    title: "Can I try this platform for free?",
    content:
      "We offers a free trial of its platform for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged.",
  },
  {
    title: "How do I access medical reports?",
    content:
      "Medical reports is available on the company's website and can be accessed by logging in to your account. The medical reports provides detailed information on how to use the platform, as well as code examples and other resources.",
  },
  {
    title: "How do I contact support?",
    content:
      "If you need help with the platform or have any other questions, you can contact the company's support team by submitting a support request through the website or by emailing support@example.com.",
  },
  {
    title: "Do you offer any discounts or promotions?",
    content:
      "We may offer discounts or promotions from time to time. To stay up-to-date on the latest deals and special offers, you can sign up for the company's newsletter or follow it on social media.",
  },
  {
    title: "How do we compare to other similar services?",
    content:
      "This platform is a highly reliable and feature-rich service that offers a wide range of tools and functionality. It is competitively priced and offers a variety of billing options to suit different needs and budgets.",
  },
];
const About = () => {
  return (
    <>
      <section className="w-full py-4">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                About Our Medical Agency
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Providing exceptional medical care and personalized health
                solutions to clients around the globe.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mx-auto items-start text-base/relaxed md:items-center">
            <div className="w-full md:flex-[3]">
              <img
                src="https://www.orientsls.com/sites/default/files/2024-01/13.png"
                alt="about-image"
                className="w-full rounded-xl"
              />
            </div>
            <div className="text-gray-500 md:flex-[7] md:text-md/relaxed text-justify flex flex-col gap-4">
              <p>
                Our medical agency is dedicated to delivering high-quality,
                patient-centered healthcare services to individuals and families
                worldwide. We offer a comprehensive range of medical solutions,
                from preventive care and wellness programs to specialized
                treatments and advanced procedures.
              </p>
              <p>
                At the heart of our agency is a team of experienced and
                compassionate healthcare professionals, including
                board-certified physicians, skilled nurses, and support staff
                who are committed to providing the best possible care to our
                patients. We combine medical expertise with a personalized
                approach, taking the time to understand each patient's
              </p>
              <p>
                Whether you are seeking routine medical care, managing a chronic
                condition, or exploring treatment options for a complex health
                issue, our agency is here to support you every step of the way.
                We prioritize open communication, patient education, and
                collaboration, emp
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div className="flex flex-col items-center">
          <h2 className="text-center mt-5 text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-500 text-sm md:text-xl mt-3 md:px-20 text-center">
            Find quick answers to common questions about our services. From
            operating hours to payment methods, we've got you covered. Simplify
            your experience and make informed decisions with ease.
          </p>
        </div>
        <div className="grid divide-y divide-neutral-200 mx-auto mt-8">
          <Accordion type="single" collapsible className="w-full">
            {faqArray.map((ele, id) => (
              <AccordionItem value={id.toString()}>
                <AccordionTrigger>
                  <p className="text-xl">{ele.title}</p>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-lg">{ele.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default About;
