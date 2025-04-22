import clsx from "clsx";
import { FieldWrapper } from "components/FieldWrapper";
import React, { HTMLProps } from "react";
import { FieldError } from "react-hook-form";

export const TextField: React.FC<
  HTMLProps<HTMLInputElement> & { error?: FieldError; label?: React.ReactNode; }
> = ({ error, className, label, ...rest }) => {
  return (
    <FieldWrapper
      error={error}
      label={label}
      id={rest.id}
      required={rest.required}
    >
      <input className={clsx("input", className, error && "error")} {...rest} />
    </FieldWrapper>
  );
};
