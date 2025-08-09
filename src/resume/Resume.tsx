import { SchoolIcon } from "../assets/icons/timeline/SchoolIcon";
import { WorkIcon } from "../assets/icons/timeline/WorkIcon";
import { Wrapper } from "../components/Wrapper";
import type { Experience } from "../types/types";
import { TimelineSection } from "./TimelineSection";

export const Resume = () => {
  const workExperiences: Experience[] = [
    {
      location: "Zextras",
      name: "Front-end Developer",
      description:
        "During my experience in Zextras I learned to build solutions with React increasing its robustness with Typescript and covering them with tests to prevent bugs.",
      startDate: new Date(2023, 4),
      endDate: null,
    },
    {
      location: "Zucchetti Software Giuridico",
      name: "Front-end Developer",
      description:
        "Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.",
      startDate: new Date(2022, 5),
      endDate: new Date(2022, 8),
    },
  ];

  const educationExperiences: Experience[] = [
    {
      location: "ITS Last",
      name: "Digital Transformation Specialist",
      startDate: new Date(2021, 10),
      endDate: new Date(
      2023,7
      ),
    },
  ];

  return (
    <Wrapper
      className="bg-[#ebebeb]"
      title={"More of my credentials."}
      section={"resume"}
      description="Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do."
    >
      <TimelineSection
        experiences={workExperiences}
        icon={<WorkIcon />}
        title="Work Experience"
      />
      <TimelineSection
        experiences={educationExperiences}
        icon={<SchoolIcon />}
        title="Education"
      />
    </Wrapper>
  );
};
