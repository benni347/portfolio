import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

let solutionUrl = "https://github.com/benni347/codechef_solutions"

const Post = () => {
    return (
        <Layout title="Learning">
            <Container>
                <Title>
                    Learning <Badge>2022</Badge>
                </Title>
                <P>
                    I&apos;m currently learning python on code chef it&apos;s a platform which I kinda don&apos;t like to much because their solutions to some problems are wrong.
                    I also always write up my solution you can find it here: <a href={solutionUrl}>Solutions</a>, but that are just the solutions for the problems that I already solved in python3.
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