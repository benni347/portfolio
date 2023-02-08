import { Badge, Container, List, ListItem } from "@chakra-ui/react";
import { Meta, Title } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Snake Ai">
            <Container>
                <Title>
                    Snake Ai <Badge>2020</Badge>
                </Title>
                <P>
                    A snake fork. This snake fork uses ML (Machine Learning) to
                    automatically play the game and matplotlib to draw a graph
                    of his previous score.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Programminglanguage</Meta>
                        <span>Python3</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Pip modules</Meta>
                        <span>
                            torch, torchvision, torchaudio, numpy, IPython,
                            matplotlib, pygame
                        </span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Work;
