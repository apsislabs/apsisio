import dynamic from "next/dynamic";
import { StylizedSvg } from "./StylizedSvg";
import { StageRow } from "./StageRow";
import {
  RocketIcon,
  BatteryPlusIcon,
  UsersIcon,
  BotIcon,
  ShieldIcon,
  TrendingUpIcon,
  ZapIcon,
  ListChecksIcon,
  DatabaseZapIcon,
  WorkflowIcon,
  RatioIcon,
  SettingsIcon,
  BrainIcon,
  LockIcon,
  RotateCcwIcon,
  IterationCcwIcon,
  ArrowBigUpDashIcon
} from "lucide-react";
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
          {
            icon: RocketIcon,
            title: "MVP development",
            content:
              "Ship production-grade web + mobile apps quickly without cutting corners.",
          },
          {
            icon: UsersIcon,
            title: "Prototyping & proof of concept",
            content: "Validate ideas and secure early investment.",
          },
          {
            icon: ShieldIcon,
            title: "Regulated industry launches",
            content:
              "Build in compliance from day one for health, fintech, legal, and other regulated sectors.",
          },
        ]}
        whyUs={[
          {
            icon: UsersIcon,
            title: "Self-directed Staff Engineers",
            content: "Decades of experience means no juniors to manage or babysit.",
          },
          {
            icon: TrendingUpIcon,
            title: "Faster results, lower burn",
            content: "Achieve ~85% FTE output in just 20 hrs/week.",
          },
          {
            icon: ZapIcon,
            title: "Developer's developer",
            content:
              "Respected by technical teams, we stay in our lane and integrate cleanly.",
          },
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
          {
            icon: BatteryPlusIcon,
            title: "Senior dev augmentation",
            content:
              "Augment capacity with proven developers delivering enterprise-grade results.",
          },
          {
            icon: ListChecksIcon,
            title: "Backlog clearance & roadmap acceleration",
            content: "Free your team for critical-path work.",
          },
          {
            icon: DatabaseZapIcon,
            title: "System & architecture optimization",
            content: "Improve performance, scalability, and reliability.",
          },
        ]}
        whyUs={[
          {
            icon: ZapIcon,
            title: "Instant impact",
            content:
              "No onboarding lag; we integrate into workflows from day one.",
          },
          {
            icon: ArrowBigUpDashIcon,
            title: "Operational efficiency",
            content:
              "Our small, nimble team delivers more with less bureaucracy.",
          },
          {
            icon: RatioIcon,
            title: "Flexible engagement",
            content: "We scale up or down with your needs.",
          },
        ]}
        variant="green"
      />
      <StageRow
        image={<StylizedSvg variant="pink" SvgComponent={StepUpSvg} />}
        title="Step up"
        subtitle="Level up your product and processes with emerging tech"
        explainer="We help established teams integrate AI, streamline workflows, and evolve infrastructure to stay ahead of the market."
        services={[
          {
            icon: BrainIcon,
            title: "AI feature development",
            content: "Embed LLMs and AI capabilities securely and responsibly.",
          },
          {
            icon: WorkflowIcon,
            title: "System integrations & workflow automation",
            content: "Connect platforms, APIs, and data sources.",
          },
          {
            icon: ZapIcon,
            title: "DevOps & infrastructure evolution",
            content:
              "CI/CD pipelines, cloud optimization, and environment management.",
          },
        ]}
        whyUs={[
          {
            icon: BotIcon,
            title: "AI experience baked in",
            content:
              "From embedding AI in MVPs to building advanced, secure AI-powered features.",
          },
          {
            icon: LockIcon,
            title: "High-stakes, regulated industries",
            content: "We protect data and compliance.",
          },
          {
            icon: IterationCcwIcon,
            title: "Rapid iteration",
            content: "Deploy, learn, and evolve in weeks, not months.",
          },
        ]}
        variant="pink"
      />
    </>
  );
};
