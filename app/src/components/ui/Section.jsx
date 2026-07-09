function Section({ children, className, sectionId }) {
  return (
    <section
      id={sectionId}
      className={`min-h-screen flex px-6 md:px-12 lg:px-20 py-24 md:py-0 font-sans ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
