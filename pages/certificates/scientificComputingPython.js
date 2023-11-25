import { Badge, Container, List, ListItem } from "@chakra-ui/react";
import { Meta, Title } from "../../components/cert";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import DownloadLink from "../../components/download-button";

const Post = () => {
    return (
        <Layout title="Certificates">
            <Container>
                <Title>
                    Scientific Computing Python <Badge>February/2023</Badge>
                </Title>
                <P>
                    The Scientific Computing Python required me to write five
                    projects. The hardest part for me was the vertical text
                    output. The second most hardest thing was right aligning the
                    text for the exercise Arithmetic Formatter.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Websites</Meta>
                        <a href="https://www.freecodecamp.org/certification/benni347/scientific-computing-with-python-v7">
                            Certificate Link + Overview
                        </a>
                    </ListItem>
                    <ListItem>
                        <Meta>Download</Meta>
                        <DownloadLink
                            imageName="scientific_computing_python.avif"
                            downloadText="Download Certificate"
                        />
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Post;
