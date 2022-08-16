import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear} from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoDiscord,
  IoMailSharp,
  IoLogoYoutube
} from 'react-icons/io5'
// import { Icon } from '@iconify/react'

// Icon sources:
// - https://iconify.design/
// - https://fontawesome.com/icons

// svg example
// <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d=""></path></svg>

const Profiles = () => (
    <Layout title="Profiles">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
            Profiles
            </Heading>
            {/* <Section delay={0.1}> */}
                {/* <SimpleGrid columns={[1,2,2]} gap={6}> */}
                    {/* <GridItem title="learning" href="posts/learning"></GridItem> */}
                {/* </SimpleGrid> */}
            {/* </Section> */}
            <List>
                <Heading as="h5" fontSize={17} mb={4}>
                Social / Programming
                </Heading>
                    <ListItem>
                    <Link href="mailto:cdrc+portfolio@skwar.me" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoMailSharp} />}>
                        Mail
                        </Button>
                    </Link>
                    </ListItem>
                {/* <Heading as="h5" fontSize={17} mb={4}>
                Programming
                </Heading> */}
                    <ListItem>
                        <Link href="https://www.github.com/benni347" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                            GitHub
                            </Button>
                        </Link>
                    </ListItem>
                <Heading as="h5" fontSize={17} mb={4}>
                Learning
                </Heading>
                    <ListItem>
                    <Link href="https://www.hackerrank.com/cdrc1" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256s192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69c.87-.87 6.26-1.48 17.55-1.83c0-26.23.59-68.59.94-86.32c0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88c.23 4.54-1.58 6-5.74 5.94c-10.13 0-20.27-.11-30.41-.08c-4.1 0-5.87-1.53-5.74-6.11c.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84c-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64c-.1-3.39.95-5.17 4.21-5.2c11.07-.08 22.15-.13 33.23-.06c3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84c2.88 2.91-33.62 38.69-37.58 38.69z"/></svg>}>
                        Hackerrank
                        </Button>
                    </Link>
                    </ListItem>
                    <ListItem>
                    <Link href="https://www.freecodecamp.org/benni347" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19.885 3.906a.621.621 0 0 0-.354.12c-.08.08-.161.196-.161.313c0 .2.236.474.673.923c1.822 1.754 2.738 3.903 2.732 6.494c-.007 2.867-.97 5.17-2.844 6.954c-.394.353-.556.63-.557.867c0 .116.08.237.16.353a.58.58 0 0 0 .353.162c.434 0 1.04-.512 1.833-1.509c1.542-1.89 2.24-3.978 2.279-6.824c.036-2.847-.857-4.777-2.603-6.77c-.63-.712-1.153-1.082-1.511-1.083zm-15.769.002c-.358 0-.882.37-1.51 1.083C.858 6.984-.035 8.914.001 11.761c.04 2.846.737 4.933 2.28 6.824c.791.997 1.398 1.51 1.832 1.509a.573.573 0 0 0 .352-.162c.08-.116.16-.237.16-.353c0-.237-.162-.514-.556-.866c-1.873-1.785-2.837-4.087-2.844-6.955c-.006-2.591.91-4.74 2.732-6.494c.437-.449.674-.722.673-.923c0-.117-.08-.233-.161-.313a.621.621 0 0 0-.354-.12zm7.056.895s.655 2.081-2.649 6.727c-3.156 4.433 1.045 7.15 1.432 7.386c-.281-.18-2.001-1.5.402-5.423c.466-.77 1.076-1.47 1.834-3.041c0 0 .67.946.32 2.998c-.523 3.101 2.271 2.214 2.314 2.257c.976 1.15-.808 3.17-.917 3.233c-.108.061 5.096-3.13 1.399-7.935c-.253.253-.582 1.442-1.267 1.266c-.684-.174 2.125-3.494-2.868-7.468zM9.955 18.916c.023.016.038.024.038.024l-.038-.024z"/></svg>}>
                        FreeCodeCamp
                        </Button>
                    </Link>
                    </ListItem>
                <ListItem>
                    <Link href="https://www.codechef.com/users/benni347" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M11.257.004c-.37.01-.735.04-1.1.095c-.54.054-1.08.325-1.675.595c-.757.324-1.515.649-2.218.703c-1.19.378-1.568.919-1.892 1.351c0 .054-.054.108-.054.108c-.433.865-.487 1.73-.325 2.595c.162.541.378 1.029.54 1.515c.38 1.028.758 2 .92 3.136c.163.325.324.757.432 1.19c.27.865.542 1.838 1.353 2.595l.006-.003c.017.019.03.04.048.057l.021-.01l-.02-.584c.648-.974 1.566-1.623 2.864-1.893c.52-.11 1.081-.15 1.663-.128a8.773 8.773 0 0 1 1.798.236c1.46.378 2.595 1.136 2.65 1.785c.027.354.04.695.032 1.036c0 .064-.004.128-.007.193l.136.068a.639.639 0 0 0 .206-.19l.003-.003l.006-.008c.04-.054.075-.124.11-.194c.02-.037.038-.086.056-.129c.205-.462.362-1.153.538-1.963c.054-.27.11-.487.163-.703c.433-.973 1.027-1.838 1.622-2.65c.973-1.35 1.892-2.595 1.784-4.055c-1.784-3.461-4.272-4.002-5.57-4.272c-.216-.054-.323-.054-.485-.108c-1.338-.244-2.494-.396-3.605-.365zM16.3 14.383a9.86 9.86 0 0 0-.032-.983c-.054-.703-1.19-1.46-2.704-1.838a9.536 9.536 0 0 0-1.744-.236a6.761 6.761 0 0 0-1.555.128c-1.244.27-2.216.92-2.811 1.892l.051 1.431c.667-.355 1.733-.874 3.14-1c.065-.005.136-.005.204-.009c.117-.013.266-.044.444-.044c1.607 0 3.268.534 4.877 1.648c.039-.274.06-.549.07-.823l.045.023c.002-.063.014-.127.015-.19zM11.256.058c.124-.004.254.01.379.011c-.23-.002-.459.003-.687.016c.103-.006.205-.024.308-.027zm.498.015zM10.44.13c-.076.009-.153.013-.229.024c-.817.117-1.774.701-2.75 1.045c.355-.132.714-.296 1.075-.45c.54-.27 1.135-.541 1.621-.595c.094-.014.189-.013.283-.024zm-.229.24c.162 0 .379 0 .541.054a.995.995 0 0 0-.37-.014a1.174 1.174 0 0 1 .316.068c.58 1-.426 5.279-.679 8.149a57.37 57.37 0 0 0 .463 2.72c-.703-1.784-1.406-4.921-1.515-7.354c-.054-.973.001-1.839.218-2.487C9.4.855 9.725.423 10.21.369zm3.136.27c-.81 2.11-.918 6.11-.972 7.354c-.054.54 0 1.73.054 2.595c0 .216.054.432.054.649c0-.217-.054-.379-.054-.595c-.433-3.244-.974-7.136.918-10.002zm3.352.379c-.27 2.162-1.405 3.19-1.783 5.3c-.108 1.676-.325 3.622-.379 5.298c-.054-1.676 0-3.46.27-5.245c.27-1.838.865-3.677 1.892-5.353zM6.32 1.45zm.21.197a.856.856 0 0 1 .6.236l-.014-.007c.133.092.266.209.393.384c-.204.968.255 3.032.04 4.67c.076 1.548.071 3.18.849 4.459c-.98-1.51-1.176-3.438-1.322-5.236c-.113-1.09-.204-2.097-.464-2.903c-.144-.305-.269-.575-.384-.822c-.024-.037-.044-.079-.07-.114a.582.582 0 0 1-.162-.377c0-.054.053-.162.108-.162c.054-.054.161-.056.215-.11a1.013 1.013 0 0 1 .21-.018zm-1.347.613c-.06.02-.092.041-.14.061c.177-.034.362.034.52.318c-.188.892.436 3.369.428 5.104c.313 1.848.55 3.85 1.572 5.115c-1.19-1.351-1.676-3.73-2.054-5.731c-.325-1.568-.596-2.92-1.136-3.352c-.054-.108-.108-.163-.108-.271c0-.162 0-.379.108-.595c-.277.634-.405 1.267-.37 1.901a3.844 3.844 0 0 1 .37-1.901c0-.054.054-.054.054-.108c.012-.016.031-.035.044-.051a.878.878 0 0 1 .226-.257c.055-.061.096-.12.159-.182c-.053.056-.088.11-.134.165c.027-.018.052-.037.084-.052a.49.49 0 0 1 .377-.164zm-.377.164c-.004.007-.008.01-.012.018l.037-.03l-.025.012zm14.76 1.134l-.005.015c.038-.005.075-.017.113-.015c-.037-.002-.076.01-.115.02c-.863 2.642-1.887 5.284-2.911 7.926a.018.018 0 0 1-.002.003c-.087.465-.234.884-.54 1.19c.433-.487.486-1.191.54-2.056c.054-.811.054-1.676.487-2.542c0-.053.001-.105.053-.159l.001-.002c.097-.353.202-.689.317-1.018c.418-1.29 1.14-3.166 2.013-3.34c.016-.006.034-.019.05-.022zM8.374 16.21l-.324.108c.162.217.27.38.378.433a.784.784 0 0 0 .379.108c.054 0 .161 0 .215-.054l.812-.27c.054 0 .108-.054.162-.054c.108 0 .162 0 .27.054l.271.27l.27-.054c-.108-.162-.27-.323-.378-.377c-.108-.054-.217-.11-.379-.11h-.108l-.866.325h-.161c-.109 0-.216 0-.27-.054c-.054-.054-.163-.162-.271-.325zm-2.596.541c-.27.162-.649.433-1.19.649c-.54.216-.973.433-1.19.649c-.215.216-.323.432-.323.649c0 .108.054.163.162.217c.054.054.163.054.217.108a27.9 27.9 0 0 1 2.216 1.08c.109.054.217.163.272.217c.054.054.107.054.161.054c.109 0 .27-.053.378-.162c.108-.108.163-.217.163-.325c0-.108-.055-.161-.163-.215c0 0-.433-.217-1.19-.541a11.967 11.967 0 0 1-1.188-.595c.162-.27.486-.487.973-.703c.54-.216.92-.433 1.081-.595c.054-.054.054-.108.054-.162a.412.412 0 0 0-.108-.217a.415.415 0 0 0-.27-.108zm11.247 0a.408.408 0 0 0-.216.108c-.054.108-.109.163-.109.217v.054c.162.162.38.27.704.378c.27.054.54.163.811.217c.324.108.54.27.649.486v.055c0 .054-.109.162-.325.27c-.108.054-.325.217-.595.433c-.27.162-.433.323-.595.377c-.216.109-.378.217-.432.326c-.054.054-.054.107-.054.161c0 .108.054.108.108.216s.162.11.216.11c.054 0 .108-.056.162-.056c.27-.162.65-.378 1.082-.757c.486-.378.865-.648 1.082-.81c.216-.108.323-.217.323-.38c0-.053 0-.161-.108-.215c-.378-.433-.918-.702-1.567-.919c-.108-.054-.27-.109-.595-.163c-.162-.054-.325-.108-.433-.108zm-2.974.81c-.27 0-.487.056-.649.218c-.216.162-.27.432-.216.757c0 .27.108.486.27.703c.162.216.379.325.595.325c.162 0 .27-.056.433-.11c.27-.162.379-.432.379-.918c0-.379-.109-.649-.271-.81a.915.915 0 0 0-.541-.164zm-4.488.055c-.27 0-.486.055-.648.217c-.217.162-.27.432-.216.757c0 .27.107.486.27.702s.378.326.594.326c.163 0 .271-.056.433-.11c.27-.162.378-.432.378-.918c0-.433-.108-.703-.27-.81a.915.915 0 0 0-.54-.164zm0 .65c.163 0 .271.108.271.27c0 .162-.163.27-.27.27c-.163 0-.27-.108-.27-.27s.107-.27.27-.27zm4.38.054c.162 0 .271.107.271.27c0 .108-.109.27-.27.27c-.163 0-.27-.108-.27-.27c0-.163.107-.27.27-.27zm-2.703 2.108l.162.324a.947.947 0 0 0 .216.271c.054.054.163.162.27.162h.109c.108 0 .161 0 .215-.054c.054-.054.164-.054.218-.108l.161-.162c.054-.054.108-.109.108-.163c.054-.054.054-.108.108-.162c0-.054.054-.108.054-.108c-.054.108-.162.216-.216.324c-.108.054-.161.163-.27.163c-.107.054-.216.054-.324.054s-.216 0-.27-.054c-.108 0-.163-.054-.217-.108l-.162-.163c-.054-.054-.108-.162-.162-.216zm-.866 1.028c-1.136 0-1.838 1.514-3.46.162c-.432 2.65 2.758 2.866 4.11 1.73c.92-.81.648-1.946-.65-1.892zm2.866 0c-1.297-.054-1.568 1.082-.648 1.893c1.351 1.135 4.54.918 4.108-1.731c-1.622 1.352-2.27-.162-3.46-.162z"/></svg>}>
                            CodeChef
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://exercism.org/profiles/benny347" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path
                                fill="currentColor" d="M4.35 1.66c-.959 0-1.686.298-2.181.893-.496.595-.744 1.464-.744 2.605v3.474c0 .805-.086 1.424-.259 1.858-.173.434-.493.84-.96 1.218-.138.113-.206.206-.206.278 0 .072.068.165.205.277.476.386.798.794.967 1.225.17.43.253 1.047.253 1.851v3.462c0 1.15.25 2.023.75 2.618.5.595 1.224.892 2.174.892h.882c.379 0 .618-.018.72-.054.1-.036.15-.127.15-.271 0-.201-.133-.334-.399-.398l-.483-.109c-1.063-.241-1.595-1.29-1.595-3.148v-3.293c0-1.247-.302-2.127-.906-2.642l-.23-.193c-.112-.096-.168-.169-.168-.217 0-.056.056-.129.169-.217l.23-.193c.603-.515.905-1.395.905-2.642V5.641c0-1.11.135-1.88.405-2.31.27-.43.832-.762 1.685-.995.258-.073.387-.19.387-.35 0-.217-.29-.326-.87-.326zm14.419.029c-.58 0-.87.108-.87.325 0 .161.128.278.386.35.854.233 1.416.565 1.686.995.27.43.405 1.2.405 2.31v3.294c0 1.246.302 2.126.906 2.641l.229.193c.113.089.17.161.17.217 0 .049-.057.121-.17.217l-.23.193c-.603.515-.905 1.396-.905 2.642v3.293c0 1.858-.532 2.907-1.595 3.149l-.484.108c-.266.064-.398.197-.398.398 0 .145.05.235.15.272.102.036.341.054.72.054h.882c.95 0 1.675-.298 2.174-.893.5-.595.75-1.467.75-2.617v-3.462c0-.805.084-1.422.253-1.852.17-.43.491-.838.967-1.224.137-.113.205-.205.205-.278 0-.072-.068-.165-.205-.277-.468-.378-.788-.784-.961-1.218-.173-.435-.26-1.054-.26-1.858V5.187c0-1.142-.247-2.01-.743-2.606-.495-.595-1.222-.892-2.18-.892zM7.683 9.735c-1.456 0-2.64 1.111-2.64 2.478h1.02c0-.838.727-1.52 1.62-1.52.892 0 1.619.682 1.619 1.52h1.02c0-1.367-1.183-2.478-2.64-2.478zm8.406 0c-1.456 0-2.639 1.111-2.639 2.478h1.02c0-.838.727-1.52 1.62-1.52.892 0 1.62.682 1.62 1.52h1.02c0-1.367-1.185-2.478-2.64-2.478zM9.71 14.36v.561c0 1.277 1.062 2.316 2.366 2.316 1.305 0 2.367-1.039 2.367-2.316v-.56h-.934v.56c0 .877-.76 1.426-1.433 1.426s-1.48-.273-1.48-1.426v-.56z"></path></svg>}>
                            Excercism
                        </Button>

                    </Link>
                </ListItem>
                <Heading as="h6" fontSize={17} mb={4}>
                    Learning - Hacking
                </Heading>
                <ListItem>
                    <Link href="https://www.hackerrank.com/cdrc1" target="_blank">
                        <Button variant="ghost" colorScheme="teal" leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M11.996 0a1.119 1.119 0 0 0-.057.003a.9.9 0 0 0-.236.05a.907.907 0 0 0-.165.079L1.936 5.675a.889.889 0 0 0-.445.77v11.111a.889.889 0 0 0 .47.784l9.598 5.541l.054.029v.002a.857.857 0 0 0 .083.035l.012.004c.028.01.056.018.085.024c.01.001.011.003.016.004a.93.93 0 0 0 .296.015a.683.683 0 0 0 .086-.015c.01 0 .011-.002.016-.004a.94.94 0 0 0 .085-.024l.012-.004a.882.882 0 0 0 .083-.035v-.002a1.086 1.086 0 0 0 .054-.029l9.599-5.541a.889.889 0 0 0 .469-.784V6.48l-.001-.026v-.008a.889.889 0 0 0-.312-.676l-.029-.024c0-.002-.01-.005-.01-.007a.899.899 0 0 0-.107-.07L12.453.127A.887.887 0 0 0 11.99 0zm.01 2.253c.072 0 .144.019.209.056l6.537 3.774a.418.418 0 0 1 0 .724l-6.537 3.774a.418.418 0 0 1-.418 0L5.26 6.807a.418.418 0 0 1 0-.724l6.537-3.774a.42.42 0 0 1 .209-.056zm-8.08 6.458a.414.414 0 0 1 .215.057l6.524 3.766a.417.417 0 0 1 .208.361v7.533a.417.417 0 0 1-.626.361l-6.523-3.766a.417.417 0 0 1-.209-.362V9.13c0-.241.196-.414.41-.418zm16.16 0c.215.004.41.177.41.418v7.532a.42.42 0 0 1-.208.362l-6.524 3.766a.417.417 0 0 1-.626-.361v-7.533c0-.149.08-.286.209-.36l6.523-3.767a.415.415 0 0 1 .216-.057z"/></svg>}>
                            HackTheBox
                        </Button>
                    </Link>
                </ListItem>
            </List>

        </Container>
    </Layout>
)

export default Profiles