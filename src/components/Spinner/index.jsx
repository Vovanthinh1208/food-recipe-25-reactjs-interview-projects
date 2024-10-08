import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/common";

const spinnerVariants = cva(
  ["animate-[spin_0.6s_linear_infinite] rounded-full border-t-[#573792]"],
  {
    variants: {
      size: {
        sm: "h-5 w-5 border-4",
        md: "h-9 w-9 border-[6px]",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

const Spinner = ({ className, size, ...props }) => {
  return (
    <div className={cn(spinnerVariants({ size }), className)} {...props} />
  );
};

export default Spinner;
