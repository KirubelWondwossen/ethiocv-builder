function Section({ children, className, sectionId }) {
  return (
    <section
      id={sectionId}
      className={`md:min-h-screen md:flex px-6 md:px-12 lg:px-20 py-8 md:py-0 font-sans ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
