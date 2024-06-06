import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { paragraphMedium, textButton, title } from "@/components/primitives";

export default function About() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
      id="about"
    >
      <div className="flex flex-col max-w-lg text-center justify-center gap-5">
        <div className="flex flex-col">
          <h1 className={title()}>
            Tenha hoje um site{" "}
            <h1 className={title({ color: "violet" })}>bonito</h1>,
            <h1 className={title({ color: "violet" })}>rápido</h1> e que te gere
            resultados
          </h1>
        </div>
        <p className={paragraphMedium()}>
          Vamos aumentar as vendas do seu negócio? Entre em contato com nossa
          equipe diretamente pelo WhatsApp.
        </p>
      </div>

      <div className="flex gap-3 mt-2">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.whats}
        >
          <p className={textButton()}>Solicitar Orçamento Grátis</p>
        </Link>
      </div>
    </section>
  );
}
