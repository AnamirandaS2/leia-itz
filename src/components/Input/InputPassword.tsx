import { Eye, EyeClosed } from "lucide-react";
import { forwardRef, InputHTMLAttributes, useState } from "react";

interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative w-full">
        <input
          required
          ref={ref}
          {...props}
          type={showPassword ? "text" : "password"}
        />
        {showPassword ? (
          <Eye
            size={20}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-[50%] translate-y-[-50%] stroke-[#707378] cursor-pointer"
          />
        ) : (
          <EyeClosed
            size={20}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-[50%] translate-y-[-50%] stroke-[#707378] cursor-pointer"
          />
        )}
      </div>
    );
  }
);
