function MainContainer({ children, className }) {
  return (
    <div className={`min-h-screen bg-slate-100 ${className}`}>{children}</div>
  );
}

export default MainContainer;
