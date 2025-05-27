import clsx from "clsx";
import { ColorVariant } from "lib/types";

export const StylizedSvg: React.FC<{
  SvgComponent: React.ComponentType<{ style?: any; className?: string }>;
  variant: ColorVariant;
}> = ({ SvgComponent, variant }) => {
  return <SvgComponent className={clsx("svg", `svg--${variant}`)} />;
};
