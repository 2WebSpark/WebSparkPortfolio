import About from "./about/page";
import Portfolio from "./portfolio/page";
import Servicos from "./servicos/page";

export default function Home() {
  return (
    <div className="flex flex-col">
      <About />
      <Portfolio />
      <Servicos />
    </div>
  );
}
