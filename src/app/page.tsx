import { Icons } from "@/components/@shared/icons";
import { Banner } from "@/components/banner";
import { Button } from "@/components/button";
import { Carousel } from "@/components/carousel";
import { Header } from "@/components/header";
import { Tag } from "@/components/tag";
import { Text } from "@/components/text";
import { Flex } from "@/components/ui/flex";

import { cryptoMock } from "@/@shared/crypto.mock";
import { sportsMock } from "@/@shared/sports.mock";
import { Card } from "@/components/card";
import { Divider } from "@/components/divider";
import { HomeLayout } from "@/components/layout/homeLayout";
import { css } from "@styled-system/css";
import Image from "next/image";
import { stack } from "../../styled-system/patterns";

export default function Home() {
  return (
    <HomeLayout>
      <div>
        <Header.Root>
          <Flex direction="row" gap={3}>
            <Image src='/assets/hamburger.svg' alt="hamburger" width={30} height={30} />
            <Image src='/assets/logo.svg' alt="logo" width={100} height={24} />
          </Flex>
          <Flex gap={1} width="auto">
            <Button bg='outline' border="">
              <Text size="h5" weight={700} textTransform="uppercase">login</Text>
            </Button>
            <Button>
              <Text size="h5" weight={700} >REGISTER</Text>
            </Button>
          </Flex>
        </Header.Root>

        <main>
          <Banner.Root>
            <Banner.Image src='/assets/banner.png' alt='banner' />
            <div className={stack({ gap: 8 })}>
              <Flex direction="column" align="start">
                <Text size="h1" weight={700}>Boas vindas ao Pigmo!</Text>
                <Text size="h3" lineHeight="paragraph" color="muted">
                  Jogue inteligente conosco. Crie sua conta <br />
                  ou entre agora para ganhar recompensas.
                </Text>
              </Flex>
              <Flex gap={2}>
                <Button>
                  <Text size="h5" weight={700} lineHeight="xs">QUERO ME REGISTRAR</Text>
                </Button>
                <Button bg='outline' border="outline" aspect="square">
                  <Icons.Google />
                </Button>
                <Button bg='outline' border="outline" aspect="square">
                  <Icons.MetaMask />
                </Button>
                <Button bg='outline' border="outline" aspect="square">
                  <Icons.Solana />
                </Button>
              </Flex>
            </div>
          </Banner.Root>

          <Flex direction='column' gap={14} align='center' css={css.raw({ paddingBlock: '3rem', paddingInline: '16%' })}>
            <Carousel.Root>
              <Carousel.Header>
                <Flex gap={12} width="auto">
                  <Flex gap={1.5} width="auto">
                    <Carousel.HeaderIcon as={Icons.Spades} />
                    <Text weight={700} size="h4">CRIPTMOEDAS</Text>
                  </Flex>

                  <Flex width="auto">
                    <Flex gap={4} width="auto">
                      <Flex gap={1.5} width="auto">
                        <Text color="muted" size="textMedium" textTransform="uppercase">Total 24h volume:</Text>
                        <Text size="textMedium" color="green">$2.27B</Text>
                      </Flex>

                      <Tag padding="pill" radius="md">
                        <Text size="h5" weight={700}>TRADE</Text>
                      </Tag>
                    </Flex>

                    <Flex width="auto">
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
                    <Card.Content gap={3} direction="column">
                      <Flex justify="between">
                        <Flex gap={3}>
                          <Card.Icon>
                            <Image src={`/assets/crypto/${i}.png`} fill objectFit="contain" alt="card-icon" />
                          </Card.Icon>
                          <Text size='h4' textTransform="uppercase">{i}</Text>
                        </Flex>

                        <Tag outline="green" bg="outline" gap={1}>
                          <Icons.ArrowDiagonalUp />
                          <Text color="green" lineHeight="xs">2.13%</Text>
                        </Tag>
                      </Flex>
                      <Flex gap={2} direction="column" align="start">
                        <Divider />
                        <Text size="card">$ 60,390.85</Text>
                        <Divider />
                      </Flex>
                      <Flex direction="column" gap={2.5}>
                        <Flex justify="between">
                          <Text color="muted" size="textMedium" textTransform="uppercase">24 VOL</Text>
                          <Text size="textMedium" textTransform="uppercase">$757M</Text>
                        </Flex>
                        <Flex justify="between">
                          <Text color="muted" size="textMedium" textTransform="uppercase">LEVERAGE</Text>
                          <Text size="textMedium" textTransform="uppercase">1000x</Text>
                        </Flex>
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
                    <Text size="h4" weight={700}>CASSINO</Text>
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
                    <Text size="h4" weight={700}>ESPORTES</Text>
                  </Flex>
                </Flex>
              </Carousel.Header>
              <Flex gap={4}>
                {sportsMock.map((E) => (
                  <Card.Root key={E.title} bg="highlight" align="center" justify="center">
                    <Card.Content direction="column" gap={5} pl={10} pb={7}>
                      <E.icon />
                      <Text>{E.title}</Text>
                    </Card.Content>
                  </Card.Root>
                ))}
              </Flex>
            </Carousel.Root>
          </Flex>
        </main>
      </div>
    </HomeLayout>
  );
}
