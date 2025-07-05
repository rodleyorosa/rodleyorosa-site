export const Footer = (): React.JSX.Element => {
  return (
    <div className="bg-[#151515]">
      <div className="w-[80%] mx-auto max-w-[40rem] py-[5rem]">
        <div className="text-center md:flex md:justify-center">
          <p className="font-poppins text-sm leading-[1.875rem] text-[#888] md:after:content-['|'] after:px-4 md:inline-block">
            &copy; Copyright 2025
          </p>
          <p className="font-poppins text-sm font-normal leading-[1.875rem] text-[#888] md:after:content-['|'] after:px-4 md:inline-block">
            Developed by <span className="text-white">Rodley Orosa</span>
          </p>
          <p className="font-poppins text-sm font-normal leading-[1.875rem] text-[#888]">
            Built with React Typescript
          </p>
        </div>
      </div>
    </div>
  );
};
