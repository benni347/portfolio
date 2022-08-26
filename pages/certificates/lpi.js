import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/cert'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Post = () => {
    return (
        <Layout title="cert">
            <Container>
                <Title>
                    LPI-010-160 <Badge>July/2021</Badge>
                </Title>
                <P>
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Websites</Meta>
                        <a href="https://www.codechef.com/users/benni347">Code-chef, </a>
                    </ListItem>
                    <ListItem>
                        <Meta>Programminglanguages</Meta>
                        <span>Python3</span>
                    </ListItem>
                    <ListItem>
                        <Meta>DATE</Meta>
                        <span>2022-05-01 still ongoing</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Post