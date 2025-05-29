import { CtaProps } from "components/Cta";
import { LogoType } from "components/LogoType";
import { PageHeader } from "components/PageHeader";

import { PageMeta } from "components/PageMeta";
import { SiteLayout } from "components/SiteLayout";
import { getAllCaseStudyIds, getCaseStudy, getRandomCta } from "lib/posts";
import { CaseStudy } from "lib/types";
import { truncate } from "lodash-es";
import { XIcon } from "lucide-react";
import { useRouter } from "next/router";

export async function getStaticProps({ params }) {
  const caseStudy = await getCaseStudy(params);

  return {
    props: {
      caseStudy,
      cta: getRandomCta(),
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllCaseStudyIds();

  return {
    paths,
    fallback: false,
  };
}

export const CaseStudyPage = ({
  caseStudy,
  cta,
}: {
  caseStudy: CaseStudy;
  cta: CtaProps;
}) => {
  const { asPath } = useRouter();

  return (
    <>
      <PageMeta
        title={`${caseStudy.title} | ${caseStudy.client} × Apsis`}
        path={asPath}
        description={truncate(caseStudy.content, { length: 120 })}
      />

      <SiteLayout contained cta={cta}>
        <PageHeader
          title={caseStudy.title}
          subtitle={caseStudy.subtitle}
          prefix={
            <span className="stack stack-h gap-sm">
              <LogoType as="span" className="text-primary" />
              <XIcon className="text-muted" />
              <img src={caseStudy.logo} height={caseStudy.logoSize ?? 40} />
            </span>
          }
          center
        />

        <div className="typography">
          <div dangerouslySetInnerHTML={{ __html: caseStudy.contentHtml }} />
        </div>
      </SiteLayout>
    </>
  );
};

export default CaseStudyPage;
