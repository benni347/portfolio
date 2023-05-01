import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbFlappyBird from "../public/images/works/flappy_bird.png";
import projectUpdate1 from "../public/images/photo_2023-03-30_13-12-36.jpg";
import projectUpdate2 from "../public/images/20230501_06h37m03s_grim.png";

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Final Poject Update 2"
                        thumbnail={projectUpdate2}
                        href="posts/abschlussarbeit_update_2"
                    ></GridItem>
                    <GridItem
                        title="Final Poject Update 1"
                        thumbnail={projectUpdate1}
                        href="posts/abschlussarbeit_update_1"
                    ></GridItem>
                    <GridItem
                        title="Abschlussarbeit"
                        thumbnail={thumbFlappyBird}
                        href="posts/abschlussarbeit"
                    ></GridItem>
                    <GridItem
                        title="CodeChef"
                        thumbnail={thumbFlappyBird}
                        href="posts/codechef"
                    ></GridItem>

                    <GridItem
                        title="CodeChef"
                        thumbnail={thumbFlappyBird}
                        href="posts/codechef"
                    ></GridItem>

                    <GridItem
                        title="learning"
                        thumbnail={thumbFlappyBird}
                        href="posts/learning"
                    ></GridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
);

export default Posts;
