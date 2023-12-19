import {
    Container,
    Heading,
    Icon,
    Link,
    List,
    ListItem,
    SimpleGrid
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { GridItem } from "../components/grid-item";
import { IoLogoPython } from "react-icons/io5";
import certLpiEssential from "../public/images/certificates/lpi_essential.png.avif";
import certJsAlgorithmsDataStructures from "../public/images/certificates/javascript_algorithms_data_structure_fcc.png.avif";
import certScientificComputingPython from "../public/images/certificates/scientific_computing_python_fcc.png.avif";
import certGoCodingGame from "../public/images/certificates/go_coding_game_cert.png";
import certPythonCodingGame from "../public/images/certificates/python_coding_game.png";
import certPythonBasicHackerrank from "../public/images/certificates/python_basic_hackerrank.avif.png";
import { Meta } from "../components/cert";

const Page = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h1" fontSize={20} mb={4}>
                    My certificates
                </Heading>
                <Heading as="h2" fontSize={16} mb={4}>
                    Current
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <GridItem
                            id="PythonCodingGame-Cert"
                            title="Python3 Coding Game Cert"
                            thumbnail={certPythonCodingGame}
                            href="./certificates/pythonCodingGame"
                        />
                    </Section>
                    <Section>
                        <GridItem
                            id="GoCodingGame-Cert"
                            title="golang Coding Game Cert"
                            thumbnail={certGoCodingGame}
                            href="./certificates/goCodingGame"
                        />
                    </Section>
                    <Section>
                        <GridItem
                            id="PythonBasicHackerrank-Cert"
                            title="Python Basic Hackerrank Cert"
                            thumbnail={certPythonBasicHackerrank}
                            href="./certificates/pythonBasicHackerrank"
                        />
                    </Section>
                    <Section>
                        <GridItem
                            id="JsAlgorithmsDataStructures-Cert"
                            title="JavaScript Algorithms and Data Structures Cert"
                            thumbnail={certJsAlgorithmsDataStructures}
                            href="./certificates/jsAlgorithmsDataStructures"
                        >
                            {/*: TODO: Add an option to download the image and add a description to every cert. */}
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem
                            id="ScientificComputingPython-Cert"
                            title="Scientific Computing Python Cert"
                            thumbnail={certScientificComputingPython}
                            href="./certificates/scientificComputingPython"
                        />
                    </Section>
                    <Section>
                        <GridItem
                            id="LPI-Cert"
                            title="LPI-010-160 Cert"
                            thumbnail={certLpiEssential}
                            href="./certificates/lpi"
                        />
                    </Section>
                </SimpleGrid>
                <Heading as="h2" fontSize={16} mb={4}>
                    Work in progress
                </Heading>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>
                            <Icon as={IoLogoPython} />
                        </Meta>
                        <Link
                            target="_blank"
                            href="https://pythoninstitute.org/pcep"
                            rel="noreferrer"
                        >
                            PCEP-30
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Page;
