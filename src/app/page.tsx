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
import { Avatar } from "@/components/avatar";
import { Card } from "@/components/card";
import { Divider } from "@/components/divider";
import { Footer } from "@/components/footer";
import { DefaultLayout } from "@/components/layout/default";
import { SideBar } from "@/components/sidebar";
import { MockSidebar } from "@/components/sidebar/mock.sidebar";
import { SolidCard } from "@/components/solid-card";
import { ToggleMenu } from "@/components/toggle-menu";
import { Box } from "@/components/ui/box";
import { css } from "@styled-system/css";
import Image from "next/image";
import { box, stack } from "../../styled-system/patterns";

export default function Home() {
  return (
    <DefaultLayout>
      <SideBar.Root gap={6}>
        <Box paddingBlock={2} paddingInline={4} width="full">
          <ToggleMenu.Root>
            <ToggleMenu.Item icon="Spades" title="spades" />
            <ToggleMenu.Item icon="Spades" title="espadas" />
            <ToggleMenu.Item icon="Spades" title="katanas" />
          </ToggleMenu.Root>
        </Box>
        <Flex direction="column">
          <Box paddingBlock={2} paddingInline={4} width="full">
            <Flex justify="between" align="end">
              <Flex gap={2.5}>
                <Avatar title="Pigmo" />
                <Flex direction="column" align="start" gap={1}>
                  <Text size="h5">Pigmo Coin</Text>
                  <Text color="muted" size="h5">$0.0000</Text>
                </Flex>
              </Flex>
              <Flex justify="end" width="auto">
                <Tag outline="green" bg="outline" gap={1}>
                  <Icons.ArrowDiagonalUp />
                  <Text color="green">2.13%</Text>
                </Tag>
              </Flex>
            </Flex>
          </Box>
          <Box paddingBlock={2} paddingInline={4} width="full">
            <Flex direction="column" align="start">
              <SideBar.Item icon="Airdrop" iconPosition="left" hover="highlight">
                <Text size="h5" color="muted">$PIG Airdrop</Text>
              </SideBar.Item>
              <SideBar.Item icon="Start" iconPosition="left" hover="highlight">
                <Text size="h5" color="muted">NFT Staking</Text>
              </SideBar.Item>
            </Flex>
          </Box>
        </Flex>
        <>
          <SideBar.Group title="CASSINO" selected="active">
            {MockSidebar.map(({ title, icon }) => (
              <li
                className={box({ display: 'block', margin: '0 15px', padding: '5px 0' })}
                key={`sidebar-${title}`}
              >
                <SideBar.Item icon={icon} iconPosition="left" key={`sidebar-${title}`} hover="highlight">
                  <Text color="muted">{title}</Text>
                </SideBar.Item>
              </li>
            ))}
          </SideBar.Group>
          <SideBar.Item border="top" icon="ChevronTop" iconPosition="right">
            <Text size="h5" textTransform="uppercase" color="muted">TRADE</Text>
          </SideBar.Item>
          <SideBar.Item border="top" icon="ChevronTop" iconPosition="right">
            <Text size="h5" textTransform="uppercase" color="muted">ESPORTES</Text>
          </SideBar.Item>
        </>
      </SideBar.Root>
      <div>
        <Header.Root>
          <Flex direction="row" gap={3}>
            <Image src='/assets/hamburger.svg' alt="hamburger" width={30} height={30} />
            <Image src='/assets/logo.svg' alt="logo" width={100} height={24} />
          </Flex>
          <Flex gap={1} width="auto">
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

          <Flex direction='column' gap={14} align='center' css={css.raw({ paddingBlock: '3rem', paddingInline: '16%' })}>
            <Carousel.Root>
              <Carousel.Header>
                <Flex gap={12} width="auto">
                  <Flex gap={1.5} width="auto">
                    <Carousel.HeaderIcon as={Icons.Spades} />
                    <Text size="h4">CRIPTMOEDAS</Text>
                  </Flex>

                  <Flex width="auto">
                    <Flex gap={4} width="auto">
                      <Flex gap={1.5} width="auto">
                        <Text color="muted" size="textMedium" textTransform="uppercase">Total 24h volume:</Text>
                        <Text size="textMedium" color="green">$2.27B</Text>
                      </Flex>

                      <Tag padding="pill" radius="md">
                        <Text size="h5">TRADE</Text>
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
                      <Flex gap={2} direction="column" align="start">
                        <Divider />
                        <Text size="card">$ 60,390.85</Text>
                        <Divider />
                      </Flex>
                      <Flex justify="between">
                        <Text color="muted" size="textMedium" textTransform="uppercase">24 VOL</Text>
                        <Text size="textMedium" textTransform="uppercase">$757M</Text>
                      </Flex>
                      <Flex justify="between">
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
        <Footer.Root
          align="center"
          direction="column"
          gap={8}

        >
          <Flex
            gap={11}
            direction="column"
            css={css.raw({ paddingBlock: '3rem', paddingInline: '16%' })}
          >
            <Flex direction="row">
              <Flex justify="center" align="center">
                <Icons.WhiteLogo />
                <Flex gap={8} align="center">
                  <Icons.Android />
                  <Text color="muted" letterSpace="logo">BEYOND</Text>
                  <Text letterSpace="logo">LUCK</Text>
                  <Icons.Android />
                </Flex>
              </Flex>
              <Flex align="start" justify="around">
                <ul>
                  <Flex gap={6} direction="column">
                    <li>
                      <Text textTransform="uppercase" size="h4">Plataform</Text>
                    </li>
                    <Flex gap={4} align="start" direction="column">
                      <li>
                        <Text color="muted">About</Text>
                      </li>
                      <li>
                        <Text color="muted">Support</Text>
                      </li>
                      <li>
                        <Text color="muted">Provably Fair</Text>
                      </li>
                    </Flex>
                  </Flex>
                </ul>
                <ul>
                  <Flex gap={6} direction="column">
                    <li>
                      <Text textTransform="uppercase" size="h4">Plataform</Text>
                    </li>
                    <Flex gap={4} align="start" direction="column">
                      <li>
                        <Text color="muted">Terms of Service</Text>
                      </li>
                      <li>
                        <Text color="muted">Privacy Policy</Text>
                      </li>
                      <li>
                        <Text color="muted">License</Text>
                      </li>
                    </Flex>
                  </Flex>
                </ul>
                <ul>
                  <Flex gap={6} direction="column">
                    <li>
                      <Text textTransform="uppercase" size="h4">Plataform</Text>
                    </li>
                    <Flex gap={4} align="start" direction="column">
                      <li>
                        <Text color="muted">About</Text>
                      </li>
                      <li>
                        <Text color="muted">Support</Text>
                      </li>
                      <li>
                        <Text color="muted">Provably Fair</Text>
                      </li>
                    </Flex>
                  </Flex>
                </ul>
              </Flex>
            </Flex>
            <Flex gap={4}>
              <SolidCard.Root gap={5} direction="row" background="pink">
                <Icons.DiscordLogo />
                <Text>Join Discord's largest community of players now!</Text>
              </SolidCard.Root>
              <SolidCard.Root gap={5} direction="row">
                <Icons.Telegram />
                <Text>Pigmo is also on Telegram. Discover more now</Text>
              </SolidCard.Root>
              <SolidCard.Root gap={5} direction="row" background="dark">
                <Icons.X />
                <Text>Follow us on X and keep up everything about us</Text>
              </SolidCard.Root>
            </Flex>
          </Flex>
          <Flex
            justify="between"
            css={css.raw({
              paddingLeft: '10',
              paddingBlock: "5",
              borderTop: '1px solid',
              borderColor: "linear-gradient(180deg, hsla(287, 29%, 6%, 1) hsla(287, 28%, 10%, 1))",
              paddingRight: '16%',
            })}
          >
            <Text>@2024 Pigmo - All rights reserved. Pigmo is licensed and authorized, operating under the Game Service Provider Master License. </Text>
            <Flex gap={4} width="auto">
              <Icons.Mail />
              <Text textTransform="uppercase">
                Contact Us
              </Text>
            </Flex>
          </Flex>
        </Footer.Root>
      </div>
    </DefaultLayout>
  );
}
