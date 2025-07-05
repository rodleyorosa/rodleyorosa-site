import { About } from "./about/About";
import { Header } from "./header/Header";
import { Portfolio } from "./portfolio/Portfolio";
import { Resume } from "./resume/Resume";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Portfolio />
    </div>
  );
}

export default App;
