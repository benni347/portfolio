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
                    The LPI was an easy cert to get, because the questions where easy to answer.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Websites</Meta>
                        <a href="https://www.lpi.org/our-certifications/linux-essentials-overview">LPI overview</a>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Post