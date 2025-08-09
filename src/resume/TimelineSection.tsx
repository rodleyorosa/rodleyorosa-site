import React from "react";
import { Timeline } from "./Timeline";
import type { Experience } from "../types/types";

interface TimelineSectionProps {
  title: string;
  experiences: Experience[];
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
