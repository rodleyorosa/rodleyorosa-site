import type { ReactNode } from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title: string;
  section: string;
  description?: string;
}

export const Wrapper = ({
  children,
  title,
  section,
  description,
  ...rest
}: WrapperProps) => {
  return (
    <div id="about" {...rest}>
      <div className="w-[80%] mx-auto max-w-[40rem] py-[7rem]">
        <div className="flex flex-col gap-4">
          <h4 className="font-poppins font-semibold text-[#ffbd39] text-sm uppercase tracking-[0.2rem] text-center">
            {section}
          </h4>
          <h2 className="font-poppins font-semibold text-center text-2xl text-[#313131] md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="font-lora text-[rgb(136,136,136)] text-[1.063rem] font-normal leading-[1.938rem] text-center md:text-[1.25rem] md:leading-[2.25rem]">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
