import React from "react";
import {
  borderWidth,
  iconPadding,
  iconWidth,
  timelineWidth,
} from "./constants";

// todo: improve date type
interface TimelineProps {
  experiences: Array<{
    location: string;
    name: string;
    description?: string;
    date?: string;
  }>;
  icon: React.JSX.Element;
}

const timelineStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    borderLeft: `${timelineWidth}px solid rgba(0, 0, 0, 0.1)`,
    padding: "0 0 1.5rem 3rem",
    marginLeft: `-${
      iconPadding + iconWidth / 2 + timelineWidth / 2 + borderWidth
    }px`,
  } satisfies React.CSSProperties,
};

export const Timeline = ({
  experiences,
  icon,
}: TimelineProps): React.JSX.Element => {
  return (
    <div>
      {experiences.map((data, key) => (
        <div key={key} className="flex">
          {icon}
          <div style={timelineStyles.container}>
            <div>
              <h3 className="font-poppins font-semibold text-[#313131] text-xl">
                {data.location}
              </h3>
              <p className="font-poppins text-[#888888] text-sm font-normal leading-[1.875rem]">
                {data.date}
              </p>
            </div>
            <hr className="w-24 h-px border-none bg-[#00000066]" />
            <h4 className="font-poppins text-[#313131] text-[1.063rem] font-semibold">
              {data.name}
            </h4>
            <p className="text-[#888888] text-[1.063rem] font-normal leading-[1.875rem] text-left">
              {data.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
