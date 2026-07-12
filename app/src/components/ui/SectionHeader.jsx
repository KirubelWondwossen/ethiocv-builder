function SectionHeader({ children, className }) {
  return (
    <h2
      className={`text-gray-800 font-bold text-2xl sm:text-3xl mt-3 mb-3 max-w-2xl ${className}`}
    >
      {children}
    </h2>
  );
}

export default SectionHeader;
