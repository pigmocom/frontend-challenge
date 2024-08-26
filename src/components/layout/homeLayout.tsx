'use client'

import { css } from "@styled-system/css";
import { box, divider } from "@styled-system/patterns";
import { PropsWithChildren, useState } from "react";
import { Icons } from "../@shared/icons";
import { Avatar } from "../avatar";
import { Footer } from "../footer";
import { SideBar } from "../sidebar";
import { MockSidebar } from "../sidebar/mock.sidebar";
import { SolidCard } from "../solid-card";
import { Tag } from "../tag";
import { Text } from "../text";
import { ToggleMenu } from "../toggle-menu";
import { Box } from "../ui/box";
import { Flex } from "../ui/flex";
import { defaultLayoutStyle } from "./styles";

export function HomeLayout({ children }: PropsWithChildren) {
  const [selectedMenu, setSelectedMenu] = useState<'cassino' | 'trade' | 'esportes' | null>(null)

  const handleSelectMenu = (menu: 'cassino' | 'trade' | 'esportes') => () => {
    if (selectedMenu === menu) setSelectedMenu(null)
    else setSelectedMenu(menu)
  }

  return (
    <div className={defaultLayoutStyle}>
      <SideBar.Root gap={4}>
        <Box paddingBlock={2} paddingInline={6} width="full">
          <ToggleMenu.Root>
            <ToggleMenu.Item icon="Spades" title="cassino" />
            <ToggleMenu.Item icon="Trophy" title="awards" />
            <ToggleMenu.Item icon="Spades" title="criptos" />
          </ToggleMenu.Root>
        </Box>
        <Flex direction="column">
          <Box paddingBlock={2} paddingInline={6} width="full">
            <Flex justify="between" align="end">
              <Flex gap={2.5} align="start">
                <Avatar title="Pigmo" />
                <Flex direction="column" align="start">
                  <Text size="h5" weight={700}>Pigmo Coin</Text>
                  <Flex direction="row" align="center" justify="between">
                    <Text color="muted" size="h5" weight={400}>$0.0000</Text>
                    <Tag outline="green" bg="outline" gap={1}>
                      <Icons.ArrowDiagonalUp />
                      <Text color="green" lineHeight="xs">2.13%</Text>
                    </Tag>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <Box paddingBlock={3} paddingInline={5} width="full">
            <Flex direction="column" align="start" gap={2}>
              <SideBar.Item icon="Airdrop" iconPosition="left" hover="highlight">
                <Text size="h5" color="muted">$PIG Airdrop</Text>
              </SideBar.Item>
              <SideBar.Item icon="Start" iconPosition="left" hover="highlight">
                <Text size="h5" color="muted">NFT Staking</Text>
              </SideBar.Item>
            </Flex>
          </Box>
        </Flex>
        <Flex direction="column">
          <SideBar.Group
            onClick={handleSelectMenu('cassino')}
            title="CASSINO"
            selected={selectedMenu === 'cassino' ? 'active' : 'default'}
          >
            {MockSidebar.map(({ title, icon }) => (
              <li
                className={box({ display: 'block', margin: '0 15px', padding: '5px 0' })}
                key={`sidebar-${title}`}
              >
                <SideBar.Item icon={icon as keyof typeof Icons} iconPosition="left" key={`sidebar-${title}`} hover="highlight">
                  <Text color="muted">{title}</Text>
                </SideBar.Item>
              </li>
            ))}
          </SideBar.Group>
          <SideBar.Group
            onClick={handleSelectMenu('trade')}
            title="TRADE"
            selected={selectedMenu === 'trade' ? 'active' : 'default'}
          >
            {MockSidebar.map(({ title, icon }) => (
              <li
                className={box({ display: 'block', margin: '0 15px', padding: '5px 0' })}
                key={`sidebar-${title}`}
              >
                <SideBar.Item icon={icon as keyof typeof Icons} iconPosition="left" key={`sidebar-${title}`} hover="highlight">
                  <Text color="muted">{title}</Text>
                </SideBar.Item>
              </li>
            ))}
          </SideBar.Group>
          <SideBar.Group
            onClick={handleSelectMenu('esportes')}
            title="ESPORTES"
            selected={selectedMenu === 'esportes' ? 'active' : 'default'}
          >
            {MockSidebar.map(({ title, icon }) => (
              <li
                className={box({ display: 'block', margin: '0 15px', padding: '5px 0' })}
                key={`sidebar-${title}`}
              >
                <SideBar.Item icon={icon as keyof typeof Icons} iconPosition="left" key={`sidebar-${title}`} hover="highlight">
                  <Text color="muted">{title}</Text>
                </SideBar.Item>
              </li>
            ))}
          </SideBar.Group>
        </Flex>
      </SideBar.Root>

      <div>
        {children}
        <div className={divider({ orientation: 'horizontal', color: 'border' })} />
        <Footer.Root
          align="center"
          direction="column"
          css={css.raw({ bg: 'hsla(285, 30%, 6%, 1)' })}
        >
          <Flex
            gap={11}
            direction="column"
            css={css.raw({ paddingInline: '56', paddingBlock: '8' })}
          >
            <Flex>
              <Flex gap={6}>
                <Icons.WhiteLogo />
                <Flex gap={8} align="center">
                  <Icons.Android />
                  <Text color="muted" weight={400} letterSpace="logo">BEYOND</Text>
                  <Text weight={400} letterSpace="logo">LUCK</Text>
                  <Icons.Android />
                </Flex>
              </Flex>
              <Flex align="start" justify="around">
                <ul>
                  <Flex gap={6} direction="column" align="start">
                    <li>
                      <Text textTransform="uppercase" size="h4" weight={700}>Plataform</Text>
                    </li>
                    <Flex gap={4} align="start" direction="column">
                      <li>
                        <Text color="muted" weight={400}>About</Text>
                      </li>
                      <li>
                        <Text color="muted" weight={400}>Support</Text>
                      </li>
                      <li>
                        <Text color="muted" weight={400}>Provably Fair</Text>
                      </li>
                    </Flex>
                  </Flex>
                </ul>
                <ul>
                  <Flex gap={6} direction="column" align="start">
                    <li>
                      <Text textTransform="uppercase" weight={700} size="h4">Policy</Text>
                    </li>
                    <Flex gap={4} align="start" direction="column">
                      <li>
                        <Text color="muted" weight={400}>Terms of Service</Text>
                      </li>
                      <li>
                        <Text color="muted" weight={400}>Privacy Policy</Text>
                      </li>
                      <li>
                        <Text color="muted" weight={400}>License</Text>
                      </li>
                    </Flex>
                  </Flex>
                </ul>
                <ul>
                  <Flex gap={6} direction="column" align="start">
                    <li>
                      <Text textTransform="uppercase" weight={700} size="h4">Community</Text>
                    </li>
                    <Flex gap={4} align="start" direction="column">
                      <li>
                        <Text color="muted" weight={400}>About</Text>
                      </li>
                      <li>
                        <Text color="muted" weight={400}>Support</Text>
                      </li>
                      <li>
                        <Text color="muted" weight={400}>Provably Fair</Text>
                      </li>
                    </Flex>
                  </Flex>
                </ul>
              </Flex>
            </Flex>

            <Flex gap={4}>
              <SolidCard.Root gap={5} direction="row" background="pink">
                <Icons.DiscordLogo />
                <Text weight={400}>Join <Text weight={700}>{"Discord's"} largest community</Text> of players now!</Text>
              </SolidCard.Root>
              <SolidCard.Root gap={5} direction="row">
                <Icons.Telegram />
                <Text weight={400}>Pigmo is also on Telegram. <Text weight={700}>Discover more now</Text></Text>
              </SolidCard.Root>
              <SolidCard.Root gap={5} direction="row" background="dark">
                <Icons.X />
                <Text weight={400}><Text weight={700}>Follow us on X</Text> and keep up everything about us</Text>
              </SolidCard.Root>
            </Flex>
          </Flex>

          <div className={divider({ orientation: 'horizontal', color: 'border' })} />

          <Flex
            justify="between"
            css={css.raw({
              paddingLeft: '10',
              paddingBlock: "5",
              paddingRight: '16%',
              bg: 'linear-gradient(270deg, hsla(287, 29%, 6%, 1), hsla(287, 28%, 10%, 1))'
            })}
          >
            <Flex gap={1}>
              <Text weight={700}>@2024 Pigmo</Text>
              <Text color="muted" weight={400}>- All rights reserved. Pigmo is licensed and authorized, operating under the Game Service Provider Master License.</Text>
            </Flex>
            <Flex gap={4} width="auto">
              <Icons.Mail />
              <Text textTransform="uppercase" weight={700} color="muted" wrap="nowrap">
                Contact Us
              </Text>
            </Flex>
          </Flex>
        </Footer.Root>
      </div>
    </div>
  )
}