import { CssIcon } from "../assets/icons/technologies/CssIcon";
import { HtmlIcon } from "../assets/icons/technologies/HtmlIcon";
import { LaravelIcon } from "../assets/icons/technologies/LaravelIcon";
import { ReactIcon } from "../assets/icons/technologies/ReactIcon";
import { TailwindCssIcon } from "../assets/icons/technologies/TailwindcssIcon";
import { TestingIcon } from "../assets/icons/technologies/TestingIcon";
import { TypescriptIcon } from "../assets/icons/technologies/TypescriptIcon";
import { VueIcon } from "../assets/icons/technologies/VueIcon";
import profilePic from "../assets/profile-pic.jpeg";
import { Wrapper } from "../components/Wrapper";
import type { Profile } from "../types/types";
import { Section } from "./Section";

export const About = () => {
  const profileData: Profile[] = [
    {
      label: "fullname",
      value: "Rodley Orosa",
    },
    {
      label: "birth date",
      value: "March 01, 2001",
    },
    {
      label: "job",
      value: "Front-end Developer",
    },
    {
      label: "email",
      value: "rodleyorosa@gmail.com",
    },
  ];

  const skillsData: Profile[] = [
    {
      label: "html",
      icon: <HtmlIcon />,
    },
    {
      label: "css",
      icon: <CssIcon />,
    },
    {
      label: "tailwindcss",
      icon: <TailwindCssIcon />,
    },
    {
      label: "react",
      value: "I learnt React from @Zextras",
      icon: <ReactIcon />,
    },
    {
      label: "testing",
      value: "I learnt Testing from @Zextras",
      icon: <TestingIcon />,
    },
    {
      label: "typescript",
      value: "I learnt TypeScript from @Zextras",
      icon: <TypescriptIcon />,
    },
    {
      label: "vuejs",
      value: "I learnt Vuejs from @ITSLast",
      icon: <VueIcon />,
    },
    {
      label: "laravel",
      value: "I learnt Laravel from @ITSLast",
      icon: <LaravelIcon />,
    },
  ];

  return (
    <Wrapper title={"Let me introduce myself."} section={"about"}>
      <div className="flex flex-col gap-[3rem]">
        <div className="text-center mt-12 md:flex md:text-left md:gap-8 md:items-center">
          <img
            src={profilePic}
            className="w-20 h-20 mx-auto border border-[#00000019] rounded-full md:w-28 md:h-28"
            alt="profile-pic"
          />
          <p className="font-lora text-[#888888] text-[1.063rem] leading-[1.938rem] md:text-[1.25rem] md:leading-[2.25rem]">
            Hi! I'm Rodley Orosa, a Front-end Developer passionate about
            crafting modern and intuitive user interfaces. With expertise in
            React, Typescript and Testing, I build high-performance and
            responsive websites. Explore my portfolio to see my work!
          </p>
        </div>
        <div className="flex flex-col gap-[3rem] font-normal leading-[1.938rem] whitespace-pre-wrap md:flex-row">
          <Section
            description={
              "I am 24-year-old based in Vicenza, Italy and I have Filipino roots.\nIn addition to coding, another passion of mine is music. Check out my Instagram profile to hear me play!"
            }
            profileData={profileData}
            title={"profile"}
          />
          <Section
            description={
              "Throughout my journey, I have continuously developed my skills in front-end development."
            }
            profileData={skillsData}
            title={"skills"}
          />
        </div>
      </div>
    </Wrapper>
  );
};
