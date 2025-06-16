import { cn } from "../lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  "flex items-center justify-center font-medium text-white duration-300   disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-black dark:bg-[#FFFFFF] hover:opacity-75  duration-300  disabled:bg-opacity-50 dark:text-black ", 
        danger: "bg-red-600 hover:bg-red-800 text-white ocus:ring-4 focus:outline-none focus:ring-red-300 font-medium",
        outline: "border border-indigo-400 hover:text-white bg-transparent text-black hover:border-transparent hover:bg-indigo-600 dark:text-gray-700 dark:hover:text-white",
        rescan:"bg-[#FFFFFF] dark:bg-[#e4d6ff] border border-[#6366F1] dark:border-transparent text-[#6366F1] text-[13px] hover:bg-[#6366F1] hover:text-white dark:hover:bg-[#6366F1] dark:hover:text-[#FFFFFF] transition  font-medium"
        
      },
      size: {
        default: "p-5 rounded-xl w-full",
        sm: "text-xs px-9 py-2 rounded-lg",
        xsm:"text-xs px-5 py-1 rounded-md",
        md:"px-7 py-[5px] rounded-md"
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
  <div className="flex items-center justify-center  gap-2">
    {isLoading && (
      <svg
        className=" animate-spin size-4 ml-[-1rem]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    )}
    <span className={isLoading ? "opacity-95" : ""}>{children}</span>
  </div>
</button>

  );
};

export default Button;