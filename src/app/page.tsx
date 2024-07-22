import { Icons } from "@/components/@shared/icons";
import { Banner } from "@/components/banner";
import { Button } from "@/components/button";
import { Carousel } from "@/components/carousel";
import { Header } from "@/components/header";
import { Tag } from "@/components/tag";
import { Text } from "@/components/text";
import { Flex } from "@/components/utils/flex";

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
              <Button bg='outline' border="outline">
                <Text size="h4" weight="semiBold" textTransform="uppercase">G</Text>
              </Button>
              <Button bg='outline' border="outline">
                <Text size="h4" weight="semiBold" textTransform="uppercase">M</Text>
              </Button>
              <Button bg='outline' border="outline">
                <Text size="h4" weight="semiBold" textTransform="uppercase">S</Text>
              </Button>
            </Flex>
          </div>
        </Banner.Root>

        <div className={css({ display: 'flex', justifyContent: 'center', paddingBlock: '8' })}>
          <Carousel.Root>
            <Carousel.Title>
              <Flex gap={12}>
                <Flex gap={1.5}>
                  <Carousel.TitleIcon as={Icons.Spades} />
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
                      <Text>{'<'}</Text>
                    </Button>
                    <Button bg="outline" border="">
                      <Text>{'>'}</Text>
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Carousel.Title>
            <Carousel.Content gap={4}>
              {Array(5).fill('').map((i) => (
                <Card.Root key={i}>
                  <Card.Content gap={4} direction="column">
                    <Flex gap={10}>
                      <Flex gap={3}>
                        <Card.Icon test="test">
                          <Text size="h3">B</Text>
                        </Card.Icon>
                        <Text size='h4' textTransform="uppercase">btc</Text>
                      </Flex>

                      <Tag outline="green" bg="outline" gap={1}>
                        <Icons.ArrowDiagonalUp />
                        <Text color="green">2.13%</Text>
                      </Tag>
                    </Flex>
                    <Flex gap={2} direction="column" width="full">
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
        </div>
      </main>
    </div>
  );
}
