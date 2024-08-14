import { Icons } from "@/components/@shared/icons";
import { Banner } from "@/components/banner";
import { Button } from "@/components/button";
import { Carousel } from "@/components/carousel";
import { Header } from "@/components/header";
import { Tag } from "@/components/tag";
import { Text } from "@/components/text";
import { Flex } from "@/components/utils/flex";

import { cryptoMock } from "@/@shared/crypto.mock";
import { sportsMock } from "@/@shared/sports.mock";
import { Card } from "@/components/card";
import { Divider } from "@/components/divider";
import { css } from "@styled-system/css";
import Image from "next/image";
import { stack } from "../../styled-system/patterns";

export default function Home() {
  return (
    <div>
      <Header.Root>
        <Flex direction="row" gap={3}>
          <Image src='/assets/hamburger.svg' alt="hamburger" width={30} height={30} />
          <Image src='/assets/logo.svg' alt="logo" width={100} height={24} />
        </Flex>
        <Flex gap={1}>
          <Button bg='outline' border="">
            <Text size="h4" weight="semiBold" textTransform="uppercase">login</Text>
          </Button>
          <Button>
            <Text size="h4" weight="semiBold">REGISTER</Text>
          </Button>
        </Flex>
      </Header.Root>

      <main>
        <Banner.Root>
          <Banner.Image src='/assets/banner.png' alt='banner' />
          <div className={stack({ gap: 8 })}>
            <div>
              <Text size="h1">Boas vindas  ao Pigmo!</Text>
              <Text size="h3" color="muted">
                Jogue inteligente conosco. Crie sua conta
              </Text>
              <Text size="h3" color="muted">
                ou entre agora para ganhar recompensas.
              </Text>
            </div>
            <Flex gap={2}>
              <Button>
                <Text size="h4" weight="semiBold">QUERO ME CADASTRAR</Text>
              </Button>
              <Button bg='outline' border="outline" aspect="square">
                <Text size="h4" weight="semiBold" textTransform="uppercase">
                  <Icons.Google />
                </Text>
              </Button>
              <Button bg='outline' border="outline" aspect="square">
                <Text size="h4" weight="semiBold" textTransform="uppercase">
                  <Icons.MetaMask />
                </Text>
              </Button>
              <Button bg='outline' border="outline" aspect="square">
                <Text size="h4" weight="semiBold" textTransform="uppercase">
                  <Icons.Solana />
                </Text>
              </Button>
            </Flex>
          </div>
        </Banner.Root>

        <div className={css({ display: 'flex', flexDirection: 'column', gap: '14', alignItems: 'center', paddingBlock: '8' })}>
          <Carousel.Root>
            <Carousel.Header>
              <Flex gap={12}>
                <Flex gap={1.5}>
                  <Carousel.HeaderIcon as={Icons.Spades} />
                  <Text size="h4">CRIPTMOEDAS</Text>
                </Flex>

                <Flex>
                  <Flex gap={4}>
                    <Flex gap={1.5}>
                      <Text color="muted" size="textMedium" textTransform="uppercase">Total 24h volume:</Text>
                      <Text size="textMedium" color="green">$2.27B</Text>
                    </Flex>

                    <Tag padding="pill" radius="md">
                      <Text size="h5">TRADE</Text>
                    </Tag>
                  </Flex>

                  <Flex>
                    <Button bg="outline" border="">
                      <Icons.ChevronLeft />
                    </Button>
                    <Button bg="outline" border="">
                      <Icons.ChevronRight />
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Carousel.Header>
            <Carousel.Content gap={4}>
              {cryptoMock.map((i) => (
                <Card.Root key={i}>
                  <Card.Content gap={4} direction="column">
                    <Flex gap={10}>
                      <Flex gap={3}>
                        <Card.Icon>
                          <Image src={`/assets/crypto/${i}.png`} fill alt="card-icon" />
                        </Card.Icon>
                        <Text size='h4' textTransform="uppercase">{i}</Text>
                      </Flex>

                      <Tag outline="green" bg="outline" gap={1}>
                        <Icons.ArrowDiagonalUp />
                        <Text color="green">2.13%</Text>
                      </Tag>
                    </Flex>
                    <Flex gap={2} direction="column" align="start" width="full">
                      <Divider />
                      <Text size="card">$ 60,390.85</Text>
                      <Divider />
                    </Flex>
                    <Flex justify="between" width="full">
                      <Text color="muted" size="textMedium" textTransform="uppercase">24 VOL</Text>
                      <Text size="textMedium" textTransform="uppercase">$757M</Text>
                    </Flex>
                    <Flex justify="between" width="full">
                      <Text color="muted" size="textMedium" textTransform="uppercase">LEVERAGE</Text>
                      <Text size="textMedium" textTransform="uppercase">1000x</Text>
                    </Flex>
                  </Card.Content>
                </Card.Root>
              ))}
            </Carousel.Content>
          </Carousel.Root>

          <Carousel.Root>
            <Carousel.Header>
              <Flex gap={12}>
                <Flex gap={1.5}>
                  <Carousel.HeaderIcon as={Icons.CassinoSeven} />
                  <Text size="h4">CRIPTMOEDAS</Text>
                </Flex>
              </Flex>
            </Carousel.Header>
            <Flex gap={4}>
              {Array(7).fill('').map((i) => (
                <Card.Root key={i}>
                  <Card.Image src='/assets/cards/originals.png' alt='image' />
                </Card.Root>
              ))}
            </Flex>
          </Carousel.Root>

          <Carousel.Root>
            <Carousel.Header>
              <Flex gap={12}>
                <Flex gap={1.5}>
                  <Carousel.HeaderIcon as={Icons.Sport} />
                  <Text size="h4">CRIPTMOEDAS</Text>
                </Flex>
              </Flex>
            </Carousel.Header>
            <Flex gap={4} width="full">
              {sportsMock.map((E) => (
                <Card.Root key={E.title} bg="highlight" width="full">
                  <Card.Content direction="column" gap={5}>
                    <E.icon />
                    <Text>{E.title}</Text>
                  </Card.Content>
                </Card.Root>
              ))}
            </Flex>
          </Carousel.Root>
        </div>
      </main>
    </div>
  );
}
