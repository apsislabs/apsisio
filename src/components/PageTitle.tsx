import { formattedTitle } from "lib/metadata";

export const PageTitle: React.FC<{ title?: string }> = ({ title }) => (
  <title key="title">{formattedTitle(title)}</title>
);
