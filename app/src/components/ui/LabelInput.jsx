import { useId } from "react";
import { ChevronDown } from "lucide-react";

export default function LabelInput({
  label,
  select = false,
  textarea = false,
  required = false,
  rows = 4,
  children,
  className = "",
  id,
  ...props
}) {
  const generatedId = useId();
  const inputId = id || generatedId;

  const fieldClasses =
    "border rounded-lg shadow-sm outline-none border-gray-300 bg-white text-gray-800 " +
    "placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 " +
    "transition-colors duration-200 px-3 py-2 text-sm sm:text-base w-full " +
    "disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed";

  return (
    <div
      className={`flex flex-col gap-1 w-full items-start font-sans text-gray-700 ${className}`}
    >
      <label
        htmlFor={inputId}
        className="font-semibold text-sm sm:text-base text-gray-800"
      >
        {label}
        {required && <span className="text-primary-500 ml-0.5">*</span>}
      </label>

      {select && (
        <div className="relative w-full">
          <select
            id={inputId}
            required={required}
            className={`${fieldClasses} appearance-none pr-9 cursor-pointer`}
            {...props}
          >
            {children}
          </select>
          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      )}

      {textarea && !select && (
        <textarea
          id={inputId}
          required={required}
          rows={rows}
          className={`${fieldClasses} resize-y`}
          {...props}
        />
      )}

      {!select && !textarea && (
        <input
          id={inputId}
          required={required}
          className={fieldClasses}
          {...props}
        />
      )}
    </div>
  );
}
