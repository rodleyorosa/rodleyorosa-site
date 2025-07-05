import React from "react";
import { Timeline } from "./Timeline";

interface TimelineSectionProps {
  title: string;
  experiences: Array<{
    location: string;
    name: string;
    description?: string;
    date?: string;
  }>;
  icon: React.JSX.Element;
}

export const TimelineSection = ({
  title,
  experiences,
  icon,
}: TimelineSectionProps): React.JSX.Element => {
  return (
    <div>
      <h3 className="font-poppins text-[#ffbd39] text-2xl font-semibold text-center py-12">
        {title}
      </h3>
      <div className="flex items-center">
        <Timeline experiences={experiences} icon={icon} />
      </div>
    </div>
  );
};
