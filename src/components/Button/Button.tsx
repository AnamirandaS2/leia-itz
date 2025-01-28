import { forwardRef } from "react";
import { tv } from "tailwind-variants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "green" | "purple" | "pink" | "yellow";
  py: "4" | "2";
  children: React.ReactNode;
}

const ButtonVariants = tv({
  base: "w-full flex items-center justify-center rounded-md text-white font-semibold text-xl outline-none",
  variants: {
    color: {
      green: "bg-green",
      purple: "bg-purple",
      pink: "bg-pink",
      yellow: "bg-yellow",
    },
    py: {
      "4": "py-4",
      "2": "py-2",
    },
  },
});

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, color, py, className, ...props }, ref) => {
    const variantClasses = ButtonVariants({ color, py });

    return (
      <button
        ref={ref}
        className={`${variantClasses} ${className || ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
