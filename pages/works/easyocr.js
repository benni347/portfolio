import { Badge, Container, List, ListItem } from "@chakra-ui/react";
import { Meta, Title } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout title="EasyOCR">
      <Container>
        <Title>
          EasyOCR <Badge>2022</Badge>
        </Title>
        <P>An ocr implementation using python and easyocr.</P>
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
            <span>easyocr, torch, torchvision, torchaudio, matplotlib</span>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <span>
              <a href="https://github.com/benni347/python-easyocr">
                https://github.com/benni347/python-easyocr
              </a>
            </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default Work;
