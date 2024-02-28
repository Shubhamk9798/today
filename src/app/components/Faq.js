import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevron from "../components/assets/chev.png";
import Image from "next/image";
import "./faq.css";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <Image
          className={`ml-auto transition-transform duration-200 ease-out chev-logo ${
            isEnter && "rotate-180"
          }`}
          src={chevron}
          alt="Chevron"
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left hover:bg-slate-100 ${
          isEnter && "bg-slate-200"
        }`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);

const Faq = () => {
  return (
    <>
      <h1 className="heading-faq">Frequently Asked Questions</h1>
      <div className="mx-2 my-4 border-t">
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
        <Accordion transition transitionTimeout={200}>
          <AccordionItem header="Am I eligible for this course if I am from a non-technical background?">
            Yes! All college students, graduates, and working professionals who
            are willing to put in the effort to break into the field of coding
            or data analytics, regardless of their degree, graduation
            percentage, or branch, are eligible for our courses.
          </AccordionItem>

          <AccordionItem header="Can I pay the tuition fee in installments?">
            Yes, you can pay the tuition fee component in installments of up to
            12 months at 0% interest with our education loan partners.
          </AccordionItem>

          <AccordionItem header="Which one is the ideal course for me?">
            The ideal course for you depends on your background, interest areas,
            and career goals. We suggest you appear for a recommendation test on
            the platform that will help you understand the best suitable course
            for you.
          </AccordionItem>

          <AccordionItem header="How long will it take to complete the course?">
            The duration of our courses is typically 3-6 months depending on the
            curriculum. This enables comprehensive learning from fundamentals to
            advanced topics with thorough practice. The courses are designed for
            both working professionals and students to complete at their own
            pace.
          </AccordionItem>

          <AccordionItem header="What If I miss a live session?">
            Recordings of all the Live Lectures would be available on your
            portal as soon as the live lecture ends, which you can watch in case
            you have missed the live lectures.
          </AccordionItem>

          <AccordionItem header="Which companies will I be referred to on completing This courses?">
            Students can access all eligible drives by 1300+ hiring partners .
            You will be able to access a mix of startups and MNCs like Lowe's,
            HSBC, Paytm, Park+, etc.
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Faq;
