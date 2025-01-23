import { forwardRef } from "react";
import { tv } from "tailwind-variants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "green" | "purple" | "pink";
}

const ButtonVariants = tv({
  base: "w-full flex items-center justify-center bg-green rounded-md text-white py-4 font-semibold text-xl outline-none",
  variants: {
    color: {
      green: "bg-green",
      purple: "bg-purple",
      pink: "bg-pink",
    },
  },
});

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, color, className, ...props }, ref) => {
    const variantClasses = ButtonVariants({ color });

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
