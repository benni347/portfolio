import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import { BioSection, BioYear } from "../components/bio";
import { IoLogoGithub, IoMailSharp } from "react-icons/io5";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a student from Switzerland!
        </Box>
        <Box display={{ md: "flex" }}>
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
              src="/images/0228.jpg.avif"
              alt="Profile image"
              width={100}
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            As a student and developer hailing from Switzerland, I am driven by
            my passion for crafting digital solutions that fulfill my visions.
            In my free time, I enjoy exploring the great outdoors on my bike.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" legacyBehavior>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2023 to 2027</BioYear>
            Apprentice at{" "}
            <Link href="https://eyevip.com/" target="_blank">
              eyevip
            </Link>
            , as software engineer EFZ
          </BioSection>
          <BioSection>
            <BioYear>2023 to 2027</BioYear>
            Student at{" "}
            <Link href="https://www.bbw.ch/" target="_blank">
              BBW
            </Link>
            , BMS
          </BioSection>
          <BioSection>
            <BioYear>2022 to 2023</BioYear>
            Student at profil., Winterthur
          </BioSection>
          <BioSection>
            <BioYear>2019 to 2022</BioYear>
            Student in SAOst, Felben-Wellhausen, Frauenfeld.
          </BioSection>

          <BioSection>
            <BioYear>2007</BioYear>
            Born In Winterthur, Switzerland.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I &#10084;
          </Heading>
          <Paragraph>
            Mathematics, Physics, Chemistry, Programming, Biking, Machine
            Learning, Learning new stuff
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Contact Options
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/benni347" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @benni347
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:cdrc+portfolio@5y5.one" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMailSharp} />}
                >
                  Mail
                </Button>
              </Link>
            </ListItem>
          </List>
          <SimpleGrid columns={[1, 2, 2]} gap={6}></SimpleGrid>

          <Box align="center" my={4}>
            <NextLink href="/posts" legacyBehavior>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
