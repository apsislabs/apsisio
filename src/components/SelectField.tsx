import clsx from "clsx";
import { FieldWrapper } from "components/FieldWrapper";
import React, { HTMLProps } from "react";
import { FieldError } from "react-hook-form";

export const SelectField: React.FC<
  HTMLProps<HTMLSelectElement> & { error?: FieldError; label?: React.ReactNode; }
> = ({ children, error, className, label, ...rest }) => {
  return (
    <FieldWrapper
      error={error}
      label={label}
      id={rest.id}
      required={rest.required}
    >
      <select className={clsx("input", className, error && "error")} {...rest}>
        {children}
      </select>
    </FieldWrapper>
  );
};
