/*
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDC/VVI5K2lOoA7UyI8jq1uLvk15Sv3nlwHCiWQjE0mUgk2rsf1dC/xI6X+rIvQC+tNlXLin017f30Zo3OnvCkk7rK18Q+AMoeNClWBSUQlrvHJsCFSqRz+q7FL8qGd9/csz9sXO23634cUVQs7udwbD1XIr69IU9/LereTarMgwHtqMg3PzSiUB6T5KvZsSxfwvfj3CKAQE/BJnHlnPgttBV/6cLHm373gMesiFulIZLAD4OtHV6nqZqXaJKGw64ZBM0iHJ/alOWZnTq/73s0gqWqxo2c7j36hKvCu6t8uxzaFQRsRSSFOqQozIlDU74TZqINSRE9l92TuyBbCEMDy2olZdQXRzzkuyJPSorMfqsOPIFxkLcMGyfSs8vPmjEGaYm+lxJGO+b6ed6ZuayF+UAWWhvJdiiK4jj9r2T2BhbnhThqb0glzFQ+VkEuqBoQtovbBi9A4ZlqPdeihGFQimf9IYxQI+4s36EdwJv5s4GGP4cag5ChA10tHiE4t4ME= cedric@pop-os*/
import NextLink from 'next/link'
import React from "react";
import {
    Container,
    Heading,
    SimpleGrid,
    useClipboard
} from '@chakra-ui/react'
import Section from '../../components/section'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { GridItem } from '../../components/grid-item'


const ssh_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDC/VVI5K2lOoA7UyI8jq1uLvk15Sv3nlwHCiWQjE0mUgk2rsf1dC/xI6X+rIvQC+tNlXLin017f30Zo3OnvCkk7rK18Q+AMoeNClWBSUQlrvHJsCFSqRz+q7FL8qGd9/csz9sXO23634cUVQs7udwbD1XIr69IU9/LereTarMgwHtqMg3PzSiUB6T5KvZsSxfwvfj3CKAQE/BJnHlnPgttBV/6cLHm373gMesiFulIZLAD4OtHV6nqZqXaJKGw64ZBM0iHJ/alOWZnTq/73s0gqWqxo2c7j36hKvCu6t8uxzaFQRsRSSFOqQozIlDU74TZqINSRE9l92TuyBbCEMDy2olZdQXRzzkuyJPSorMfqsOPIFxkLcMGyfSs8vPmjEGaYm+lxJGO+b6ed6ZuayF+UAWWhvJdiiK4jj9r2T2BhbnhThqb0glzFQ+VkEuqBoQtovbBi9A4ZlqPdeihGFQimf9IYxQI+4s36EdwJv5s4GGP4cag5ChA10tHiE4t4ME= cedric@pop-os";

function Copy() {
    const [value, setValue] = React.useState("ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDC/VVI5K2lOoA7UyI8jq1uLvk15Sv3nlwHCiWQjE0mUgk2rsf1dC/xI6X+rIvQC+tNlXLin017f30Zo3OnvCkk7rK18Q+AMoeNClWBSUQlrvHJsCFSqRz+q7FL8qGd9/csz9sXO23634cUVQs7udwbD1XIr69IU9/LereTarMgwHtqMg3PzSiUB6T5KvZsSxfwvfj3CKAQE/BJnHlnPgttBV/6cLHm373gMesiFulIZLAD4OtHV6nqZqXaJKGw64ZBM0iHJ/alOWZnTq/73s0gqWqxo2c7j36hKvCu6t8uxzaFQRsRSSFOqQozIlDU74TZqINSRE9l92TuyBbCEMDy2olZdQXRzzkuyJPSorMfqsOPIFxkLcMGyfSs8vPmjEGaYm+lxJGO+b6ed6ZuayF+UAWWhvJdiiK4jj9r2T2BhbnhThqb0glzFQ+VkEuqBoQtovbBi9A4ZlqPdeihGFQimf9IYxQI+4s36EdwJv5s4GGP4cag5ChA10tHiE4t4ME= cedric@pop-os\"")
    const { hasCopied, onCopy } = useClipboard(value)
    return onCopy

    // return (
    //     <>
    //         <Flex mb={2}>
    //             <Input value={value} isReadOnly placeholder='Welcome' />
    //             <Button onClick={onCopy} ml={2}>
    //                 {hasCopied ? 'Copied' : 'Copy'}
    //             </Button>
    //         </Flex>
    //         <Editable placeholder='Paste here'>
    //             <EditablePreview width='100%' />
    //             <EditableInput />
    //         </Editable>
    //     </>
    // )
}

const Page = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h4" fontSize={20} mb={4}>
                    My Public SSH Key
                </Heading>
                <Heading as="h5" fontSize={16} mb={4}>
                    Current
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>

                    <Section>
                        <GridItem id="ssh-key" title="ssh-key" onclick="Copy()">
                            <Paragraph>{ssh_key}</Paragraph>
                            {/*:TODO: Add an on click copy function so you dont have to select the text.*/}
                        </GridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Page