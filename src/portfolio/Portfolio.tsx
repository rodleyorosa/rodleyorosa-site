import ideaBoard from "../assets/idea-board.jpg";
import winTracker from "../assets/win-tracker.jpg";
import { Wrapper } from "../components/Wrapper";
import type { CarouselItem } from "../types/types";
import EmblaCarousel from "./EmblaCarousel";

export const Portfolio = (): React.JSX.Element => {
  const carouselItems: CarouselItem[] = [
    {
      img: winTracker,
      alt: "win-tracker",
      link: "https://rodleyorosa.github.io/win-tracker/",
    },
    {
      img: ideaBoard,
      alt: "idea-board",
      link: "https://rodleyorosa.github.io/idea-board/",
    },
  ];
  return (
    <Wrapper
      title="Check Out Some of My Works."
      section="portfolio"
      description="Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do."
    >
      <EmblaCarousel carouselItems={carouselItems} />
    </Wrapper>
  );
};
