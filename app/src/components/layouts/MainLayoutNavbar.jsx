import Logo from "../ui/Logo";

function MainLayoutNavbar() {
  return (
    <nav
      aria-label="Main"
      className="relative flex h-13 w-full items-center justify-between rounded-full bg-white px-4 py-0.5 font-sans shadow-sm"
    >
      <Logo link={"/builder"} />
      <h2 className="font-semibold text-gray-800 ">EthioCV Builder</h2>
      <div></div>
    </nav>
  );
}

export default MainLayoutNavbar;
