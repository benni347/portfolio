import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    Image,
    SimpleGrid,
    Button,
    List,
    ListItem,
    Icon,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear} from '../components/bio'
// import { GridItem } from '../components/grid-item'
import {
    IoLogoTwitter,
    IoLogoGithub,
    IoLogoDiscord,
    IoMailSharp
} from 'react-icons/io5'
import {WorkGridItem} from "../components/grid-item";
import certLpiEssential from "../public/images/certificates/lpi_essential.png";
import thumbFlappyBird from "../public/images/works/flappy_bird.png";
import thumbSnake from "../public/images/works/snake.png";


const Page = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h4" fontSize={20} mb={4}>
                    My certificates
                </Heading>
                <Heading as="h5" fontSize={16} mb={4}>
                    Current
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <Image src={certLpiEssential} alt="Cedric's LPI-010-160 cert"></Image>
                    </Section>
                    <Section>
                        <WorkGridItem id="flappybird-ai" title="Flappy Bird AI" thumbnail={thumbFlappyBird}>
                            A Flappy Bird clone that work with neural networks.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="snake-ai" title="Snake AI" thumbnail={thumbSnake}>
                            A Snake clone that work with neural networks.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Heading as="h5" fontSize={16} mb={4}>
                    Work in progress
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="flappybird-ai" title="Flappy Bird AI" thumbnail={thumbFlappyBird}>
                            A Flappy Bird clone that work with neural networks.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="snake-ai" title="Snake AI" thumbnail={thumbSnake}>
                            A Snake clone that work with neural networks.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
        /*<Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a student from Switzerland!
                </Box>
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Cédric Skwar
                        </Heading>
                        <p>Developer</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/0228.jpg"
                            alt="Profile image"
                        />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>Cédric is a student and a developer from Switzerland with a passion for building digital services/stuff he wants. When not online he loves biking.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My portfolio</Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>
                            2007
                        </BioYear>
                        Born In Winterthur, Switzerland.
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2019 to 2022
                        </BioYear>
                        Student in SAOst, Felben-Wellhausen, Frauenfeld.
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2022 to 2023
                        </BioYear>
                        Student at profil., Winterthur
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I &#10084;
                    </Heading>
                    <Paragraph>
                        Mathematics, Physics, Chemistry, Programming, Biking, Machine Learning, Learning new stuff
                    </Paragraph>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Contact Options
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/benni347" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @benni347
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/benni347" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                                    @benni347
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="mailto:cdrc+portfolio@skwar.me" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoMailSharp} />}>
                                    Mail
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://discord.gg/eU3MW2J" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>
                                    Discord
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                    <SimpleGrid columns={[1, 2, 2]} gap={6}>
                        {/!* <GridItem
            href="https://www.youtube.com/https://www.youtube.com/channel/UCGIr66J0NLSZ6PzH-PWWSvw"
            title="YouTube"
            thumbnail={<Icon as={IoLogoYoutube} />}
          >
            My YouTube channel
          </GridItem> *!/}
                        {/!* <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem> *!/}
                    </SimpleGrid>

                    <Box align="center" my={4}>
                        <NextLink href="/posts">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                Popular posts
                            </Button>
                        </NextLink>
                    </Box>

                </Section>
            </Container>
        </Layout>*/
    )
}

export default Page