import { About } from "./about/About";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Portfolio } from "./portfolio/Portfolio";
import { Resume } from "./resume/Resume";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
