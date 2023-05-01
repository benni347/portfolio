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
                    Currently, I am in the process of devising my final project,
                    utilizing the exclusive design suite known as figma. I have
                    had the pleasure of reviewing a web development tutorial
                    focused on figma, which I have included a link to below. It
                    proved to be quite enlightening and informative; therefore,
                    I highly recommend it. As for my color palette for the
                    messenger, I have decided on the following hues:
                    <List>
                        <ListItem>
                            primary color - a deep shade of blue (#1B2C4D)
                        </ListItem>
                        <ListItem>
                            secondary color - a light blue tone (#5C80BC)
                        </ListItem>
                        <ListItem>accent color - green (#21B372)</ListItem>
                        <ListItem>
                            neutral color 1 - a light grey tint (#F2F2F2)
                        </ListItem>
                        <ListItem>
                            neutral color 2 - a dark grey hue (#2D2D2D).
                        </ListItem>
                    </List>{" "}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Programminglanguages</Meta>
                        <span>Figma </span>
                    </ListItem>
                    <ListItem>
                        <Meta>DATE</Meta>
                        <span>2023-03-30</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Post;
