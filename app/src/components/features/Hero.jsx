import { MoveRight } from "lucide-react";
import Button from "../ui/Button";
import Section from "../ui/Section";

function Hero() {
  return (
    <Section sectionId="hero" className={"items-center"}>
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-5">
          <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
            AI-powered CV builder
          </span>

          <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-gray-800">
            The best online CV builder{" "}
            <span className="text-primary-500">by EthioCV</span>
          </h1>

          <h2 className="text-gray-600 font-sans font-medium text-lg sm:text-xl leading-relaxed max-w-md">
            Build your AI-powered CV in minutes, no design skills needed.
          </h2>

          <Button type="button" className="flex items-center gap-2">
            Build your CV <MoveRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="relative w-full hidden md:block md:w-1/2 aspect-4/5 sm:aspect-4/3 md:aspect-auto md:h-130 lg:h-150 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-bg1.jpg')] bg-cover bg-center" />
          <div
            className="absolute inset-x-0 bottom-0 h-1/3 backdrop-blur-md"
            style={{
              maskImage: "linear-gradient(to top, black, transparent)",
              WebkitMaskImage: "linear-gradient(to top, black, transparent)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-white/70 via-white/20 to-transparent" />
        </div>
      </div>
    </Section>
  );
}

export default Hero;
