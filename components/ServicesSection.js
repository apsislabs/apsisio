import { ServiceRow } from "./ServiceRow";

export const ServicesSection = () => {
  return (
    <>
      <ServiceRow
        variant="blue"
        title="Software &amp; Devops"
        imgSrc={"/img/laptop.svg"}
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
        ]}
      />

      <ServiceRow
        reverse
        variant="pink"
        title="Design &amp; Discovery"
        imgSrc={"/img/bulb.svg"}
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
        variant="green"
        title="Our favorite tools"
        imgSrc={"/img/phone.svg"}
        content={
          <p>
            Our motto is "when in doubt, get a burrito." Our second motto,
            though, is <strong>"be easy to hire and easy to fire."</strong>{" "}
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
          "Wordpress",
          "Java Springboot",
          "PostgreSQL & MySQL",
        ]}
      />

      <ServiceRow
        variant="gold"
        reverse
        title="How we work"
        imgSrc={"/img/paper.svg"}
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
