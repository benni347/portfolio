import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbFlappyBird from "../public/images/works/flappy_bird.png.avif";
import thumbSnake from "../public/images/works/snake.png.avif";
import thumbEasyOcr from "../public/images/works/easyocr.png.avif";
import Layout from "../components/layouts/article";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" font-size={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="easyocr" title="EasyOcr" thumbnail={thumbEasyOcr}>
              An Ocr implementation using python-easyocr.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="flappybird-ai"
              title="Flappy Bird AI"
              thumbnail={thumbFlappyBird}
            >
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
  );
};

export default Works;
