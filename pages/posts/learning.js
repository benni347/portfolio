import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/posts'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Post = () => {
    return (
        <Layout title="Learning">
            <Container>
                <Title>
                    Learning <Badge>2022</Badge>
                </Title>
                <P>
                    I&apos;m currently learning python and other programming languages.
                </P>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Websites</Meta>
                    <a href="https://hackerrank.com/">Hackerrank, </a>
                    <a href="https://freecodecamp.org/">freecodecamp</a>

                </ListItem>
                <ListItem>
                    <Meta>Programminglanguages</Meta>
                    <span>Python3 and other</span>
                </ListItem>
                    <ListItem>
                        <Meta>DATE</Meta>
                        <span>2022-01-01 till 2022-04-30</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Post