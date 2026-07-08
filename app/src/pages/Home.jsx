import Hero from "../components/features/Hero";
import Navbar from "../components/layouts/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="sticky top-0 z-50 backdrop-blur">
        <div className="mx-auto w-full px-4 sm:px-4 lg:px-6 py-2">
          <Navbar />
        </div>
      </header>

      <main className="mx-auto w-full px-3 py-8 sm:px-6 lg:px-6">
        <Hero />
      </main>
    </div>
  );
}

export default Home;
