import { Icons } from "@/components/@shared/icons";
import { Banner } from "@/components/banner";
import { Button } from "@/components/button";
import { Carousel } from "@/components/carousel";
import { Header } from "@/components/header";
import { Text } from "@/components/text";
import Image from "next/image";
import { flex, stack } from "../../styled-system/patterns";

export default function Home() {
  return (
    <div>
      <Header.Root>
        <div className={flex({ direction: 'row', gap: 3 })}>
          <Image src='/assets/hamburger.svg' alt="hamburger" width={30} height={30} />
          <Image src='/assets/logo.svg' alt="logo" width={100} height={24} />
        </div>
        <Button>
          <Text size="md" weight="semiBold">REGISTER</Text>
        </Button>
      </Header.Root>

      <main>
        <Banner.Root>
          <Banner.Image src='/assets/banner.png' alt='banner' />
          <div className={stack({ gap: 8 })}>
            <div>
              <Text size="xl">Boas vindas  ao Pigmo!</Text>
              <Text size="md" color="muted">
                Jogue inteligente conosco. Crie sua conta
              </Text>
              <Text size="md" color="muted">
                ou entre agora para ganhar recompensas.
              </Text>
            </div>
            <div>
              <Button>
                <Text size="md" weight="semiBold">QUERO ME CADASTRAR</Text>
              </Button>
            </div>
          </div>
        </Banner.Root>

      </main>
      <Carousel.Root>
        <Carousel.Title>
          <Carousel.Title>
            <Carousel.TitleIcon as={Icons.Spades} />
            <Text>Criptomoedas</Text>
            <Text color="muted">Total 24h volume:</Text>
            <Text>$2.27B</Text>
          </Carousel.Title>
        </Carousel.Title>
      </Carousel.Root>
    </div>
  );
}
