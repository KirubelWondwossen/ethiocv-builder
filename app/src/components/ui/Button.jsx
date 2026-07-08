function Button({ children, className, type }) {
  return (
    <button
      type={type}
      className={`rounded-full bg-primary-500 px-5 py-2.5 text-base sm:text-lg font-medium
              text-white transition-colors hover:bg-primary-600 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
