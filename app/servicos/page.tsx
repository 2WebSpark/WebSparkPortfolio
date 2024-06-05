import { Card, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function Servicos() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
      id="servicos"
    >
      <h1 className={title()}>Serviços</h1>
      <div className="flex w-full gap-5 items-center justify-center">
        <div>
          <Card className="py-4 border-none hover:border-solid border-2 hover:border-sky-500">
            <CardBody className="overflow-visible py-2 gap-2">
              <h2 className="font-bold text-large">Desenvolvimento de Sites</h2>
              <p className={subtitle({ className: "mt-4 text-sm" })}>
                Criamos um site profissional completo de acordo com a
                necessidade do seu negócio, desde portais de conteúdo, sites
                institucionais, sites corporativos e até blogs pessoais.
              </p>
              <div className="flex gap-3">
                <Link
                  isExternal
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "shadow",
                    fullWidth: true,
                  })}
                  href={siteConfig.links.whats}
                >
                  Quero um Site
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>

        <div>
          <Card className="py-4 border-none hover:border-solid border-2 hover:border-sky-500">
            <CardBody className="overflow-visible py-2 gap-2">
              <h2 className="font-bold text-large">
                Desenvolvimento de Landing Pages
              </h2>
              <p className={subtitle({ className: "mt-4 text-sm" })}>
                Desenvolvemos Landing Pages envolventes com foco em conversão de
                leads e vendas, criando uma estrutura robusta de captação em um
                site profissional.
              </p>
              <div className="flex gap-3">
                <Link
                  isExternal
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "shadow",
                    fullWidth: true,
                  })}
                  href={siteConfig.links.whats}
                >
                  Quero uma Landing Pages
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>

        <div>
          <Card className="py-4 border-none hover:border-solid border-2 hover:border-sky-500">
            <CardBody className="overflow-visible py-2 gap-2">
              <h2 className="font-bold text-large">
                Desenvolvimento de Landing Pages
              </h2>
              <p className={subtitle({ className: "mt-4 text-sm" })}>
                Desenvolvemos Landing Pages envolventes com foco em conversão de
                leads e vendas, criando uma estrutura robusta de captação em um
                site profissional.
              </p>
              <div className="flex gap-3">
                <Link
                  isExternal
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "shadow",
                    fullWidth: true,
                  })}
                  href={siteConfig.links.whats}
                >
                  Quero uma Landing Pages
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
