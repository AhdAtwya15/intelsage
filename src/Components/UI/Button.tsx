import { cn } from "../lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  "flex items-center justify-center font-medium text-white duration-300 disabled:bg-indigo-400 disabled:hover:bg-indigo-400 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-black dark:bg-[#FFFFFF] hover:opacity-80 dark:text-black", 
        danger: "bg-red-900 dark:bg-[#c2344d] dark:text-white dark:hover:bg-red-700",
        outline: "border border-indigo-400 hover:text-white bg-transparent text-black hover:border-transparent hover:bg-indigo-600 dark:text-gray-700 dark:hover:text-white",
      },
      size: {
        default: "p-5 rounded-xl w-full",
        sm: "text-xs px-9 py-2 rounded-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  isLoading?: boolean;
  type?: "submit" | "button" | "reset";
}

const Button = ({
  type,
  variant,
  size,
  fullWidth,
  className,
  children,
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type || "button"} 
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      {...props}
      disabled={isLoading}
    >
      {isLoading ? (
        <svg
          className="mr-3 -ml-1 size-5 animate-spin text-white  "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : null}
      {children}
    </button>
  );
};

export default Button;