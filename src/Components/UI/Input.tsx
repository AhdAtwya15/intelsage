import { forwardRef, InputHTMLAttributes, Ref, useState, useRef } from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

type IProps = InputHTMLAttributes<HTMLInputElement> & { label?: string; icon?: "email" | "password" };

const Input = forwardRef(
  ({ label, icon, type, ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 
    const inputRef = useRef<HTMLInputElement>(null);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="relative">
        <input
          ref={ref || inputRef}
          type={icon === "password" ? (showPassword ? "text" : "password") : type} 
          className="border-[1px] border-gray-300 focus:border-black focus:outline-none rounded-xl py-5 px-5 text-sm w-full bg-transparent font-extralight pr-10"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
        {label && (
          <label
          className={`text-md px-3 py-1 bg-[#FFFFFF] absolute mb-2 bottom-14 left-9 transform translate-y-1/2 transition-colors duration-200 ${
            isFocused || rest.value ? "text-black" : "text-gray-400"
          }`}
        >
          {label}
        </label>
        )}
        {icon === "email" && (
          <EmailOutlinedIcon
            className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
          />
        )}
        {icon === "password" && (
          <div 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" 
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <VisibilityOffOutlinedIcon className="w-5 h-5 text-gray-400" />
            ) : (
              <VisibilityOutlinedIcon className="w-5 h-5 text-gray-400" />
            )}
          </div>
        )}
      </div>
    );
  }
);

export default Input;