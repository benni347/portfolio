import {Badge, Container, List, ListItem} from "@chakra-ui/react";
import {Meta, Title} from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Flappy Bird Ai">
            <Container>
                <Title>
                    Flappy Bird Ai <Badge>2020</Badge>
                </Title>
                <P>
                    A Flappy Bird fork. This Flappy Bird fork uses ML (Machine
                    Learning) to automatically play the game.
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
                            numpy, pygame, neat-python, graphviz, matplotlib
                        </span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Work;
