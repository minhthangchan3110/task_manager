import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function Input({ type = "text", ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative w-full">
      <input
        {...props}
        type={isPassword ? (showPassword ? "text" : "password") : type}
        className="w-full border rounded-2xl border-[#d9dbe0] border-s py-2.5 px-3.5 pr-10 text-[12px]"
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#6c5ce7]"
          aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
        >
          {showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={16} />}
        </button>
      )}
    </div>
  );
}
