import { Badge, Container, List, ListItem } from "@chakra-ui/react";
import { Meta, Title } from "../../components/cert";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Post = () => {
    return (
        <Layout title="Certificates">
            <Container>
                <Title>
                    go Coding Game <Badge>November/2023</Badge>
                </Title>
                <P>
                    Overall, I found the exam straightforward to ace, achieving
                    a perfect score. Nonetheless, a few questions necessitated a
                    moment of contemplation prior to coding the solutions.
                    Despite this, the allotted time was more than sufficient.
                    Personally, I would consider reducing the time by 5-10
                    minutes, but overall, the certification exam was reasonable.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Certificate URL</Meta>
                        <a href="https://www.codingame.com/certification/gBSA6NXHph5C8zNW6fYJvQ">
                            To verify the cert
                        </a>
                    </ListItem>
                    <ListItem>
                        <Meta>Download</Meta>
                        <DownloadLink
                            imageName="go_coding_game_cert.avif"
                            downloadText="Download Certificate"
                        />
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Post;
