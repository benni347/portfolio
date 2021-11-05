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

const Page = () => {
  return ( 
    <Layout>
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
              2010 to present
            </BioYear>
            Student in SAOst, Felben-Wellhausen, Frauenfeld.
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
      </Container>
    </Layout>
  )
}

export default Page

