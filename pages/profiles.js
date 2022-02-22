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
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoDiscord,
  IoMailSharp,
  IoLogoYoutube
} from 'react-icons/io5'
// import { Icon } from '@iconify/react'


const Profiles = () => (
    <Layout title="Profiles">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
            Profiles
            </Heading>
            {/* <Section delay={0.1}> */}
                {/* <SimpleGrid columns={[1,2,2]} gap={6}> */}
                    {/* <GridItem title="learning" href="posts/learning"></GridItem> */}
                {/* </SimpleGrid> */}
            {/* </Section> */}
            <List>
                <Heading as="h5" fontSize={17} mb={4}>
                Social / Programming
                </Heading>
                    <ListItem>
                    <Link href="mailto:cdrc+portfolio@skwar.me" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoMailSharp} />}>
                        Mail
                        </Button>
                    </Link>
                    </ListItem>
                {/* <Heading as="h5" fontSize={17} mb={4}>
                Programming
                </Heading> */}
                    <ListItem>
                        <Link href="https://www.github.com/benni347" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                            GitHub
                            </Button>
                        </Link>
                    </ListItem>
                <Heading as="h5" fontSize={17} mb={4}>
                Learning
                </Heading>
                    <ListItem>
                    <Link href="https://www.hackerrank.com/cdrc1" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256s192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69c.87-.87 6.26-1.48 17.55-1.83c0-26.23.59-68.59.94-86.32c0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88c.23 4.54-1.58 6-5.74 5.94c-10.13 0-20.27-.11-30.41-.08c-4.1 0-5.87-1.53-5.74-6.11c.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84c-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64c-.1-3.39.95-5.17 4.21-5.2c11.07-.08 22.15-.13 33.23-.06c3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84c2.88 2.91-33.62 38.69-37.58 38.69z"/></svg>}>
                        Hackerrank
                        </Button>
                    </Link>
                    </ListItem>
                    <ListItem>
                    <Link href="https://www.freecodecamp.org/benni347" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19.885 3.906a.621.621 0 0 0-.354.12c-.08.08-.161.196-.161.313c0 .2.236.474.673.923c1.822 1.754 2.738 3.903 2.732 6.494c-.007 2.867-.97 5.17-2.844 6.954c-.394.353-.556.63-.557.867c0 .116.08.237.16.353a.58.58 0 0 0 .353.162c.434 0 1.04-.512 1.833-1.509c1.542-1.89 2.24-3.978 2.279-6.824c.036-2.847-.857-4.777-2.603-6.77c-.63-.712-1.153-1.082-1.511-1.083zm-15.769.002c-.358 0-.882.37-1.51 1.083C.858 6.984-.035 8.914.001 11.761c.04 2.846.737 4.933 2.28 6.824c.791.997 1.398 1.51 1.832 1.509a.573.573 0 0 0 .352-.162c.08-.116.16-.237.16-.353c0-.237-.162-.514-.556-.866c-1.873-1.785-2.837-4.087-2.844-6.955c-.006-2.591.91-4.74 2.732-6.494c.437-.449.674-.722.673-.923c0-.117-.08-.233-.161-.313a.621.621 0 0 0-.354-.12zm7.056.895s.655 2.081-2.649 6.727c-3.156 4.433 1.045 7.15 1.432 7.386c-.281-.18-2.001-1.5.402-5.423c.466-.77 1.076-1.47 1.834-3.041c0 0 .67.946.32 2.998c-.523 3.101 2.271 2.214 2.314 2.257c.976 1.15-.808 3.17-.917 3.233c-.108.061 5.096-3.13 1.399-7.935c-.253.253-.582 1.442-1.267 1.266c-.684-.174 2.125-3.494-2.868-7.468zM9.955 18.916c.023.016.038.024.038.024l-.038-.024z"/></svg>}>
                        FreeCodeCamp
                        </Button>
                    </Link>
                    </ListItem>
            </List>

        </Container>
    </Layout>
)

export default Profiles