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
                    Software Engineer <Badge>December/2023</Badge>
                </Title>
                <P>
                    I wanted more certs.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Websites</Meta>
                        <Link href="https://www.hackerrank.com/certificates/dbd09cd3f174">
                            Validate Certificate
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Download</Meta>
                        <DownloadLink
                            imageName="software_engineer.png"
                            downloadText="Download Certificate"
                        />
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Post;
