import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbFlappyBird from '../public/images/works/flappy_bird.png'
import thumbSnake from '../public/images/works/snake.png'
import Layout from '../components/layouts/article'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" font-size={20} mb={4}>
                    Works
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
    )
}

export default Works