import { GitPullRequest, PenTool, Terminal, Tool } from "react-feather";
import { Row } from "./Row";
import { ServicesList } from "./ServicesList";

export const ServicesSection = () => {
  return (
    <>
      <Row>
        <ServicesList
          title="Software &amp; Devops"
          variant="blue"
          Icon={Terminal}
          listItems={[
            "Web sites & apps",
            "iOS & Android",
            "HIPAA-compliant solutions",
            "Infrastructure management",
            "Continuous integration",
          ]}
        />

        <ServicesList
          title="Design &amp; Discovery"
          Icon={PenTool}
          variant="pink"
          listItems={[
            "Requirements analysis",
            "Project design",
            "UI &amp; UX Solutions",
          ]}
        />

        <ServicesList
          title="Our favorite tools"
          Icon={Tool}
          variant="green"
          listItems={[
            "Ruby on Rails",
            "React",
            "Wordpress",
            "Java Springboot",
            "PostgreSQL &amp; MySQL",
          ]}
        />

        <ServicesList
          title="How we work"
          Icon={GitPullRequest}
          variant="yellow"
          listItems={[
            "Team augmentation",
            "Embedded engineers",
            "Standalone projects",
            "Small teams",
          ]}
        />
      </Row>
    </>
  );
};
