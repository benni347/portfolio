import { Badge, Container, List, ListItem, Link } from "@chakra-ui/react";
import { Meta, Title } from "../../components/cert";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import DownloadLink from "../../components/download-button";

const Post = () => {
    return (
        <Layout title="Certificates">
            <Container>
                <Title>
                    Python Basic <Badge>September/2023</Badge>
                </Title>
                <P>
                    I just wanted a python cert thats why I took the exam from
                    hackerrank. The exam was really easy.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Websites</Meta>
                        <Link href="https://www.hackerrank.com/certificates/65154cd4b6e3">
                            Validate Certificate
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Download</Meta>
                        <DownloadLink
                            imageName="python_basic_hackerrank.avif.png"
                            downloadText="Download Certificate"
                        />
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Post;
