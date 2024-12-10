import _ from "lodash";

import { Button } from "components/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export const Pager: React.FC<{
  numPages: number;
  activePageIdx: number;
  baseUrl: string;
}> = ({ numPages, activePageIdx, baseUrl }) => {
  const pageUrl = `${baseUrl}/page`;
  const prevIdx = activePageIdx - 1;
  const nextIdx = Math.min(activePageIdx + 1, numPages);
  const prevDisabled = prevIdx < 0;
  const nextDisabled = nextIdx >= numPages;

  return (
    <nav className="stack stack-h gap-md">
      <Button
        href={prevDisabled ? baseUrl : `${pageUrl}/${prevIdx + 1}`}
        disabled={prevDisabled}
        variant="tertiary"
        title='Previous Page'
        StartIcon={ChevronLeftIcon}
      >
        Prev
      </Button>

      {_.times(numPages).map((pageIdx) => {
        const active = pageIdx === activePageIdx;
        return (
          <Button
            key={pageIdx}
            href={`${pageUrl}/${pageIdx + 1}`}
            disabled={active}
            variant={active ? "primary" : "tertiary"}
            title={`Page ${pageIdx + 1}`}
          >
            {pageIdx + 1}
          </Button>
        );
      })}

      <Button
        href={nextDisabled ? baseUrl : `${pageUrl}/${nextIdx + 1}`}
        disabled={nextDisabled}
        variant="tertiary"
        title='Next Page'
        EndIcon={ChevronRightIcon}
      >
        Next
      </Button>
    </nav>
  );
};
