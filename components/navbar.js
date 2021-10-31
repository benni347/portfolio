import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HumburgerIcon} from '@chakra-ui/icons'

const LinkItem = ({ href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'grassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
                _target={_target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const NavBar = props => {
    const { path } = props

    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{ backdropFilter: 'blur(10px)' }}
        zIndex={1}
        {...props}
        >
            <Container display="flex" p={2} maxW="container.md" wrap="wrap">

            </Container>
        </Box>
    )
}

export default NavBar