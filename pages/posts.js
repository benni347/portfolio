import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItemWithDate } from '../components/grid-item'

import thumbFlappyBird from '../public/images/works/flappy_bird.png'



const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
            Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItemWithDate title="CodeChef" thumbnail={thumbFlappyBird} href="posts/codechef" publishDate="2022-02-03"></GridItemWithDate>
{/*
                    <GridItemWithDate title="learning" thumbnail={thumbFlappyBird} href="posts/learning" publishDate="2022-02-03"></GridItemWithDate>*/}

                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts