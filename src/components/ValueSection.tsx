import React from "react";
import { SectionHeader } from "components/SectionHeader";
import { ServiceRow } from "components/ServiceRow";
import { StylizedSvg } from "components/StylizedSvg";
import { ArrowRightIcon } from "lucide-react";

import ScaleUpSvg from "/public/img/home/scaleup.svg";
import StartUpSvg from "/public/img/home/startup.svg";
import StepUpSvg from "/public/img/home/stepup.svg";

export const ValueSection: React.FC = () => {
  return (
    <>
      <SectionHeader
        title="Software delivery that grows with you"
        subtitle="From first launch to next
              big leap"
      />

      <ServiceRow
        variant="blue"
        title="Start up"
        subtitle="Early-stage momentum, low overhead."
        img={<StylizedSvg variant="blue" SvgComponent={StartUpSvg} />}
        alt="Image of a Laptop for Software & Devops"
        content={
          <p>
            You've got a vision and pressure to move fast. We help you ship your
            MVP, test product ideas, or augment a lean internal team with senior
            devs and product engineers who deliver from day one.
          </p>
        }
        listIcon={ArrowRightIcon}
        listItems={[
          "Build fast without sacrificing code quality or architecture.",
          "Extend your runway by scaling engineering without overhead.",
          "Get real product shipped, not just prototypes.",
        ]}
      />

      <ServiceRow
        variant="green"
        title="Scale up"
        subtitle="Ship more, reduce tech debt, and stay ahead."
        img={<StylizedSvg variant="green" SvgComponent={ScaleUpSvg} />}
        alt="Image of a Laptop for Software & Devops"
        reverse
        content={
          <p>
            You've found product-market fit, but now comes the hard part:
            delivering faster without downtime. Apsis can help you scale output
            while addressing tech debt, automating testing, and easing growing
            pains.
          </p>
        }
        listIcon={ArrowRightIcon}
        listItems={[
          "Reduce delivery bottlenecks with independent-minded senior devs.",
          "Add specialized expertise to your sprints without slowing down your team.",
          "Tackle refactors, rewrites and tech debt without distracting your best talent.",
        ]}
      />

      <ServiceRow
        variant="pink"
        title="Step up"
        subtitle="Modernize platforms. Reimagine experiences."
        img={<StylizedSvg variant="pink" SvgComponent={StepUpSvg} />}
        alt="Image of a Laptop for Software & Devops"
        content={
          <p>
            You're ready for what's next: replatforming legacy systems,
            improving developer velocity, or launching something bold. Apsis
            brings product-minded engineering that makes big moves feel
            manageable.
          </p>
        }
        listIcon={ArrowRightIcon}
        listItems={[
          "Future-proof your platform without blowing up what works.",
          "Ship high-stakes projects without the stress of team overextension.",
          "Experiment fast with prototypes or greenfield initiatives.",
        ]}
      />
    </>
  );
};
