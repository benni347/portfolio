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
          JS Algorithms and Data Structures <Badge>February/2023</Badge>
        </Title>
        <P>
          The JavaScript Algorithms and Data Structures required me to program
          four simple programs and one hard one. The hard one was the last one.
          The thing I found difficult about it was understanding the exercise.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Websites</Meta>
            <a href="https://www.freecodecamp.org/certification/benni347/javascript-algorithms-and-data-structures">
              Certificate Link + Overview
            </a>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <DownloadLink
              imageName="js_algorithms_data_structures.avif"
              downloadText="Download Certificate"
            />
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Post;
