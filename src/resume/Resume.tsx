import { SchoolIcon } from "../assets/icons/timeline/SchoolIcon";
import { WorkIcon } from "../assets/icons/timeline/WorkIcon";
import { Wrapper } from "../components/Wrapper";
import { TimelineSection } from "./TimelineSection";

export const Resume = () => {
  const workExperiences = [
    {
      location: "Zextras",
      name: "Front-end Developer",
      description:
        "During my experience in Zextras I learned to build solutions with React increasing its robustness with Typescript and covering them with tests to prevent bugs.",
      date: "April 2023 - Present",
    },
    {
      location: "Zucchetti Software Giuridico",
      name: "Front-end Developer",
      description:
        "Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.",
      date: "May 2022 - August 2022",
    },
  ];

  const educationExperiences = [
    {
      location: "ITS Last",
      name: "Digital Transformation Specialist",
      date: "October 2021 - July 2023",
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
