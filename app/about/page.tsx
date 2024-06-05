import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";

export default function About() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
      id="about"
    >
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Tenha hoje um site&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>bonito,&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>rápido&nbsp;</h1>
        <br />
        <h1 className={title()}>e que te gere resultados</h1>
        <p className=" text-sm">
          Vamos aumentar as vendas do seu negócio? Entre em contato com nossa
          equipe diretamente pelo WhatsApp.
        </p>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.whats}
        >
          Solicitar Orçamento Grátis
        </Link>
      </div>
    </section>
  );
}
