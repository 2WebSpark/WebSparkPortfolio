import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";

export default function Portfolio() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
      id="portfolio"
    >
      <h1 className={title()}>Portfólio</h1>
      <div className="flex w-full gap-5 items-center justify-center">
        <Link href={siteConfig.linksProjetos.projeto1}>
          <Card className="flex py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Dr. Artur Carrijo</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardBody>
          </Card>
        </Link>
        <Link href={siteConfig.linksProjetos.projeto1}>
          <Card className="flex py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Dr. Artur Carrijo</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardBody>
          </Card>
        </Link>
        <Link href={siteConfig.linksProjetos.projeto1}>
          <Card className="flex py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">Dr. Artur Carrijo</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardBody>
          </Card>
        </Link>
      </div>
    </section>
  );
}
