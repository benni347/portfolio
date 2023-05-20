import {
    Button,
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
import { Meta } from "../components/cert";

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
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <GridItem
                            id="JsAlgorithmsDataStructures-Cert"
                            title="JavaScript Algorithms and Data Structures Cert"
                            thumbnail={certJsAlgorithmsDataStructures}
                            href="./certificates/jsAlgorithmsDataStructures"
                        >
                            {/*:TODO: Add an option to download the image and add a description to every cert.*/}
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem
                            id="ScientificComputingPython-Cert"
                            title="Scientific Computing Python Cert"
                            thumbnail={certScientificComputingPython}
                            href="./certificates/scientificComputingPython"
                        >
                            {/*:TODO: Add an option to download the image and add a description to every cert.*/}
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem
                            id="LPI-Cert"
                            title="LPI-010-160 Cert"
                            thumbnail={certLpiEssential}
                            href="./certificates/lpi"
                        >
                            {/*:TODO: Add an option to download the image and add a description to every cert.*/}
                        </GridItem>
                    </Section>
                </SimpleGrid>
                <Heading as="h5" fontSize={16} mb={4}>
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
