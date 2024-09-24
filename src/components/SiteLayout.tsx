import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { Section } from "components/Section";
import { PropsWithChildren } from "react";

export const SiteLayout: React.FC<
  PropsWithChildren & {
    showTagline?: boolean;
    contained?: boolean;
    navTheme?: "blue" | "default" | "gray";
    navGuides?: boolean;
  }
> = ({ children, showTagline = false, contained = false, navTheme, navGuides = false }) => {
  return (
    <>
      <Section theme={navTheme} bordered guides={navGuides}>
        <Navbar showTagline={showTagline} />
      </Section>

      {contained ? (
        <Section narrow spaced guides={false}>
          {children}
        </Section>
      ) : (
        children
      )}

      <Section theme="gray" bordered>
        <Footer />
      </Section>
    </>
  );
};
