import { Badge, Container, List, ListItem, Link} from "@chakra-ui/react";
import { Meta, Title } from "../../components/cert";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import DownloadLink from "../../components/download-button";

const Post = () => {
    return (
        <Layout title="Certificates">
            <Container>
                <Title>
                    Python Coding Game <Badge>November/2023</Badge>
                </Title>
                <P>
                    The python coding game was similair to the <Link href="./goCodingGame.js">go coding game</Link>, since it had the same questions.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Certificate</Meta>
                        <Link href="https://www.codingame.com/certification/kIfzRVEzqEh0nxkHTl_O2Q">
                            Certificate on Codingame
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Download</Meta>
                        <DownloadLink imageName="python_coding_game.avif" downloadText="Download Certificate" />
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Post;
