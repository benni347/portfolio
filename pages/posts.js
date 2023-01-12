import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import {GridItem} from "../components/grid-item";

import thumbFlappyBird from "../public/images/works/flappy_bird.png";

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
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
