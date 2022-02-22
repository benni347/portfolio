import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
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
                    I'm currently learning python and other programming languages.
                </P>
                <List ml={4} my={4}>
                <ListItem>
                    <Meta>Websites</Meta>
                    <a href="https://hackerrank.com/">Hackerrank, </a>
                    <a href="https://freecodecamp.org/">freecodecamp</a>

                </ListItem>
                <ListItem>
                    <Meta>Programminglanguage</Meta>
                    <span>Python3 and other</span>
                </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Post