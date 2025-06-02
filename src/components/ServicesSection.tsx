import dynamic from 'next/dynamic';
import { ServiceRow } from "./ServiceRow";
import { StylizedSvg } from "./StylizedSvg";

const DesignSvg = dynamic(() => import("/public/img/services/discovery.svg"), { ssr: false });
const DevSvg = dynamic(() => import("/public/img/services/rocket.svg"), { ssr: false });
const TeamSvg = dynamic(() => import("/public/img/services/team.svg"), { ssr: false });
const ToolsSvg = dynamic(() => import("/public/img/services/tools.svg"), { ssr: false });

export const ServicesSection = () => {
  return (
    <>
      <ServiceRow
        listColumns
        variant="blue"
        title="Software &amp; Devops"
        img={<StylizedSvg variant="blue" SvgComponent={DevSvg} />}
        alt="Image of a Laptop for Software & Devops"
        content={
          <p>
            Our bread and butter; as a team we have almost 40 years experience
            building software of all sorts: front-end, back-end, you name it. If
            you can dream it up, we can help you{" "}
            <strong>build it, deploy it, and scale it</strong> to tens of
            thousands of happy users.
          </p>
        }
        listItems={[
          "Web sites & apps",
          "iOS & Android",
          "HIPAA-compliant solutions",
          "Infrastructure management",
          "Continuous integration",
          "Third-Party Integrations",
        ]}
      />

      <ServiceRow
        listColumns
        reverse
        variant="pink"
        title="Design &amp; Discovery"
        img={<StylizedSvg variant="pink" SvgComponent={DesignSvg} />}
        alt="Image of a lightbulb for Design & Discovery"
        content={
          <p>
            Every project starts with a robust process of design and discovery
            to ensure not only that we know your requirements backwards and
            forwards, but also to ensure <em>you</em> know exactly what we're
            going to build.
          </p>
        }
        listItems={[
          "Requirements analysis",
          "Project design",
          "UI & UX Solutions",
        ]}
      />

      <ServiceRow
        listColumns
        variant="green"
        title="Our favorite tools"
        img={<StylizedSvg variant="green" SvgComponent={ToolsSvg} />}
        alt="Image of a Phone for our favorite tools"
        content={
          <p>
            Our motto is "when in doubt, get a taco." Our second motto, though,
            is{" "}
            <a href="/blog/2024/11/25/easy-to-fire/">
              <strong>"be easy to hire and easy to fire."</strong>
            </a>{" "}
            We're comfortable working in most tech stacks, but there are a few
            that we tend to favor. These represent{" "}
            <strong>widely used industry standards</strong>, so when it's time
            for us to part ways you won't have any trouble finding devs to take
            over.
          </p>
        }
        listItems={[
          "Ruby on Rails",
          "React",
          "JVM & Spring Framework",
          "Amazon Web Services",
          "PostgreSQL, SQLServer, MySQL",
        ]}
      />

      <ServiceRow
        listColumns
        variant="gold"
        reverse
        title="How we work"
        img={<StylizedSvg variant="gold" SvgComponent={TeamSvg} />}
        alt="Image of a piece of paper for how we work"
        content={
          <p>
            At Apsis, we work within a framework we call{" "}
            <strong>"almost agile"</strong> &mdash; a setup that helps us remain
            responsive to your particular project's needs. For any project, no
            matter how small you can expect to work with a{" "}
            <strong>single point of contact</strong> who will manage at least
            one other dev to provide a flexible team capable of tackling your
            requirements.
          </p>
        }
        listItems={[
          "Team augmentation",
          "Embedded engineers",
          "Standalone projects",
          "Small teams",
        ]}
      />
    </>
  );
};
