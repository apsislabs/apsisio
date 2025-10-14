import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { Section } from "components/Section";
import { ChevronRight, PhoneIcon } from "lucide-react";
import { PropsWithChildren } from "react";
import { Button } from "./Button";
import { Cta, CtaProps } from "./Cta";

export const SiteLayout: React.FC<
  PropsWithChildren & {
    showTagline?: boolean;
    contained?: boolean;
    navTheme?: "blue" | "default" | "gray";
    navGuides?: boolean;
    wide?: boolean;
    cta?: CtaProps;
    footer?: React.ReactNode
  }
> = ({
  children,
  showTagline = false,
  contained = false,
  navTheme,
  wide = false,
  navGuides = false,
  cta,
  footer,
}) => {
  return (
    <>
      <Section theme={navTheme} bordered guides={navGuides}>
        <Navbar
          showTagline={showTagline}
          actions={
            !showTagline && (
              <>
                <Button
                  href="/book"
                  StartIcon={PhoneIcon}
                  size="sm"
                  variant="tertiary"
                >
                  Book a call
                </Button>

                <Button
                  href="/hire"
                  EndIcon={ChevronRight}
                  size="sm"
                >
                  Work with us
                </Button>
              </>
            )
          }
        />
      </Section>

      <main id="main">
        {contained ? (
          <Section narrow={!wide} spaced guides={false}>
            {children}
          </Section>
        ) : (
          children
        )}
      </main>

      {footer}

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
