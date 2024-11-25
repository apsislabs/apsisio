import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { Section } from "components/Section";
import { ChevronRight } from "lucide-react";
import { PropsWithChildren } from "react";
import { Button } from "./Button";
import { Cta, CtaProps } from "./Cta";

export const SiteLayout: React.FC<
  PropsWithChildren & {
    showTagline?: boolean;
    contained?: boolean;
    navTheme?: "blue" | "default" | "gray";
    navGuides?: boolean;
    cta?: CtaProps;
  }
> = ({
  children,
  showTagline = false,
  contained = false,
  navTheme,
  navGuides = false,
  cta,
}) => {
  return (
    <>
      <Section theme={navTheme} bordered guides={navGuides}>
        <Navbar
          showTagline={showTagline}
          actions={
            !showTagline && (
              <Button
                href="mailto:contact@apsis.io?subject=Apsis Project Inquiry"
                EndIcon={ChevronRight}
              >
                Work with us
              </Button>
            )
          }
        />
      </Section>

      {contained ? (
        <Section narrow spaced guides={false}>
          {children}
        </Section>
      ) : (
        children
      )}

      {cta && (
        <Section theme="blue" bordered>
          <Cta {...cta} />
        </Section>
      )}

      <Section theme="gray" bordered={!cta}>
        <Footer />
      </Section>
    </>
  );
};