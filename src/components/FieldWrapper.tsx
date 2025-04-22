import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { FieldError } from "react-hook-form";

export const FieldWrapper: React.FC<
  PropsWithChildren & {
    id?: string;
    label?: React.ReactNode;
    required?: boolean;
    error?: FieldError;
  }
> = ({ id, required, error, label, children }) => {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={id} className={clsx("label", required && "required")}>
          {label}
        </label>
      )}

      {children}

      {error && <span className="text-sm text-accent">{error.message}</span>}
    </div>
  );
};
