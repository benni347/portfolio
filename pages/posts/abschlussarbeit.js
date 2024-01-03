import { Badge, Container, List, ListItem } from "@chakra-ui/react";
import { Meta, Title } from "../../components/posts";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Post = () => {
  return (
    <Layout title="Final Project">
      <Container>
        <Title>
          Final Project <Badge>2023</Badge>
        </Title>
        <P>
          My present primary focus in school pertains to my culminating project.
          Said project manifests as a cross-platform, decentralized messenger
          prioritizing privacy and security. The user interface for the desktop
          variant is composed in HTML and CSS through implementation of the
          Wails framework.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <a href="https://github.com/benni347/abschluss_arbeit">Github </a>
          </ListItem>
          <ListItem>
            <Meta>Programminglanguages</Meta>
            <span>Go, JS, HTML and CSS</span>
          </ListItem>
          <ListItem>
            <Meta>DATE</Meta>
            <span>2023-03-01 still ongoing</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Post;
