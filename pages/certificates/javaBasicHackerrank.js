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
          Java Basic <Badge>December/2023</Badge>
        </Title>
        <P>
          I needed to use Java for my school projects, so I thought acquiring a
          certification in it could be beneficial. However, I would have
          preferred the certification to be in a more recent version of Java,
          rather than Java 7 or 8.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Websites</Meta>
            <Link href="https://www.hackerrank.com/certificates/c8511ae167ed">
              Validate Certificate
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <DownloadLink
              imageName="java_basic_hackerrank.avif"
              downloadText="Download Certificate"
            />
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Post;
