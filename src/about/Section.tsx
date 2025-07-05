import React from "react";

interface SectionProps {
  title: string;
  description: string;
  profileData: Array<{
    label?: string;
    value?: string;
    icon?: React.JSX.Element;
  }>;
}

export const Section = ({ title, description, profileData }: SectionProps) => {
  return (
    <div className="flex flex-col gap-4 md:w-1/2">
      <h4 className="font-poppins font-bold text-[#313131] text-[1.125rem] uppercase text-center md:text-left tracking-[0.1rem]">
        {title}
      </h4>
      <p className="font-lora text-[#888888] text-[1.063rem] font-normal leading-[1.875rem]">
        {description}
      </p>
      {profileData.map((data, index) => (
        <div key={index}>
          <p className="font-poppins text-[#313131] uppercase text-sm font-bold text-center md:text-left leading-[0.938rem] flex gap-[0.313rem] tracking-[0.1rem]">
            {data.icon}
            {data.label}
          </p>
          <p className="font-poppins text-[#888888] text-sm font-normal leading-[1.8rem]">
            {data.value}
          </p>
        </div>
      ))}
    </div>
  );
};
