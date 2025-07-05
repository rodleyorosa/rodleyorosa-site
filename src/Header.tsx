import { ArrowAbout } from "./assets/icons/ArrowAbout";
import { GithubIcon } from "./assets/icons/social/GtihubIcon";
import { InstagramIcon } from "./assets/icons/social/InstagramIcon";
import { LinkedinIcon } from "./assets/icons/social/LinkedinIcon";

export const Header = () => {
  const scrollToAbout = (): void => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen min-h-[40rem] flex items-center justify-center text-center text-white bg-[#313131] md:bg-[url('/background-header.jpg')] md:bg-center md:bg-no-repeat md:bg-cover md:bg-fixed">
      <div className="animate-focusIn">
        <p className="font-poppins text-[#ffbd39] uppercase tracking-[0.2rem] font-semibold text-sm leading-[1.875rem] md:text-[1.438rem]">
          Hello World.
        </p>
        <h1 className="font-poppins text-[2.5rem] font-semibold md:text-[4rem] lg:text-[5.25rem]">
          I'm Rodley Orosa.
        </h1>
        <p className="font-lora uppercase text-[0.8rem] tracking-[0.1rem] border-l-2 border-r-2 border-white/30 w-fit mx-auto px-4 md:text-base lg:text-[1.063rem]">
          Front-End Developer
        </p>
        <button
          onClick={scrollToAbout}
          className="font-poppins bg-transparent border-2 border-white/30 cursor-pointer text-white text-[0.813rem] font-bold tracking-[0.2rem] uppercase px-6 py-4 mt-12 inline-flex items-center gap-[0.2rem]"
        >
          more about me <ArrowAbout />
        </button>
      </div>
      <div className="absolute bottom-4">
        <div className="flex flex-row gap-8">
          <GithubIcon />
          <InstagramIcon />
          <LinkedinIcon />
        </div>
      </div>
    </div>
  );
};
