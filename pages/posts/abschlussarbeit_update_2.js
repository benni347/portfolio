import { Badge, Container, List, ListItem } from "@chakra-ui/react";
import { Meta, Title } from "../../components/posts";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Post = () => {
    return (
        <Layout title="Final Project">
            <Container>
                <Title>
                    Final Project Update 2 <Badge>2023-04-30</Badge>
                </Title>
                <P>
                    At present, I am contemplating the transition of my network
                    stack from WebSockets to WebRTC. This consideration arises
                    due to the numerous glitches and anomalies encountered
                    during message transmission, yet their origins remain
                    elusive despite my efforts to employ print statements
                    ubiquitously, which have proven futile.
                </P>
                <br></br>
                <P>
                    Utilizing WebRTC data channels would facilitate message
                    transmission, while simultaneously enabling the effortless
                    incorporation of calling capabilities. This supposition is
                    grounded in the frequent employment of WebRTC for video and
                    audio communication applications.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Programminglanguages</Meta>
                        <span>Go, JS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>DATE</Meta>
                        <span>2023-04-30</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Post;
