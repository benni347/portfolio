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
    IoLogoPython
} from 'react-icons/io5'
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
                        <GridItem id="LPI-Cert" title="LPI-010-160 Cert" thumbnail={certLpiEssential} href="./certificates/lpi">
                        {/*:TODO: Add an option to download the image and add a description to every cert.*/}
                        </GridItem>
                    </Section>
                </SimpleGrid>
                <Heading as="h5" fontSize={16} mb={4}>
                    Work in progress
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <List>
                        <ListItem>
                            <Link href="https://pythoninstitute.org/pcep" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoPython} />}>
                                    PCEP-30
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Page