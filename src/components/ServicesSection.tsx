import dynamic from "next/dynamic";
import { StylizedSvg } from "./StylizedSvg";
import { StageRow } from "./StageRow";
import Link from "next/link";


const StartUpSvg = dynamic(() => import("/public/img/home/startup.svg"), {
  ssr: false,
});
const StepUpSvg = dynamic(() => import("/public/img/home/stepup.svg"), {
  ssr: false,
});

export const ServicesSection = () => {
  return (
    <>
      <StageRow
        title="Start up"
        subtitle="From vision to viable product"
        explainer="We help early-stage teams get from concept to launch-ready, with compliance and scalability in mind."
        services={[
          <span>
            <strong>MVP development</strong> – Ship production-grade web +
            mobile apps quickly without cutting corners.
          </span>,
          <span>
            <strong>Prototyping & proof of concept</strong> – Validate ideas and
            secure early investment.
          </span>,
          <span>
            <strong>Regulated industry launches</strong> – Build in compliance
            from day one for health, fintech, legal, and other regulated
            sectors.
          </span>,
        ]}
        whyUs={[
          <span>
            Only <strong>senior, self-directed developers</strong> — no juniors
            to manage or babysit.
          </span>,
          <span>
            <strong>~85% FTE output in just 20 hrs/week</strong> — faster
            results, lower burn.
          </span>,
          <span>
            <strong>Developer’s developer</strong> — respected by technical
            teams, we stay in our lane and integrate cleanly.
          </span>,
        ]}
        footer={
          <>
            Apsis helped careviso launch a HIPAA-compliant MVP that contributed
            to securing <strong>$17M in Series B funding.</strong> See the{" "}
            <Link href="/clients/careviso/">story</Link>.
          </>
        }
        variant="blue"
      />
      <StageRow
        image={<StylizedSvg variant="green" SvgComponent={StartUpSvg} />}
        title="Scale up"
        subtitle="Accelerate growth and output without adding management overhead"
        explainer="We plug into growing teams to help them clear backlogs, hit ambitious deadlines, and scale systems — without the cost and ramp time of full-time hires."
        services={[
          <span>
            <strong>Senior dev augmentation</strong> – Augment capacity with
            proven developers delivering enterprise-grade results.
          </span>,
          <span>
            <strong>Backlog clearance & roadmap acceleration</strong> – Free
            your team for critical-path work.
          </span>,
          <span>
            <strong>System & architecture optimization</strong> – Improve
            performance, scalability, and reliability.
          </span>,
        ]}
        whyUs={[
          <span>
            <strong>Instant impact</strong> — no onboarding lag; we integrate
            into workflows from day one.
          </span>,
          <span>
            <strong>Operational efficiency</strong> — our small, nimble team
            delivers more with less bureaucracy.
          </span>,
          <span>
            <strong>Flexible engagement</strong> — we scale up or down with your
            needs.
          </span>,
        ]}
        variant="green"
      />
      <StageRow
        image={<StylizedSvg variant="pink" SvgComponent={StepUpSvg} />}
        title="Step up"
        subtitle="Level up your product and processes with emerging tech"
        explainer="We help established teams integrate AI, streamline workflows, and evolve infrastructure to stay ahead of the market."
        services={[
          <span>
            <strong>AI feature development</strong> – Embed LLMs and AI
            capabilities securely and responsibly.
          </span>,
          <span>
            <strong>System integrations & workflow automation</strong> – Connect
            platforms, APIs, and data sources.
          </span>,
          <span>
            <strong>DevOps & infrastructure evolution</strong> – CI/CD
            pipelines, cloud optimization, and environment management.
          </span>,
        ]}
        whyUs={[
          <span>
            <strong>AI experience baked in</strong> — from embedding AI in MVPs
            to building advanced, secure AI-powered features.
          </span>,
          <span>
            Proven in <strong>high-stakes, regulated industries</strong> — we
            protect data and compliance.
          </span>,
          <span>
            <strong>Rapid iteration</strong> — deploy, learn, and evolve in
            weeks, not months.
          </span>,
        ]}
        variant="pink"
      />
    </>
  );
};
