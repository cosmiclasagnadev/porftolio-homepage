import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        mt={{ sm: '8', md: '16' }}
        display={'flex'}
        flexDirection={{ sm: 'column', md: 'row' }}
      >
        <Box order={{ sm: 2, md: 1 }} flexGrow={{ md: 1 }}>
          <Heading as="h2" variant="page-title">
            Allen Ponce de Leon
          </Heading>
          <p>Software Engineer ☕️ and Freelance Web Developer</p>
          <Box align="left" my={4}>
            <NextLink
              href="mailto:allenpdl75@gmail.com"
              passHref
              scroll={false}
            >
              <Button rightIcon={<EmailIcon />} colorScheme="blue">
                Send Me an Email!
              </Button>
            </NextLink>
          </Box>
        </Box>
        <Box
          order={{ sm: 1, md: 2 }}
          flexShrink={0}
          mt={{ base: 2, md: 0 }}
          ml={{ md: 6 }}
          mb={{ base: 6, md: 0 }}
          textAlign={{ md: 'left' }}
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/allen.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Allen is a full-time front-end developer who likes to build and learn
          along the way. I&apos;ve worked as a front end web developer for
          digital marketing agencies with international clients and local
          companies for nearly 3 years now. Currently I&apos;m trying to learn
          as much as I can about Java and SpringBoot for a project I&apos;m
          assigned in (Stack: React, Azure, SpringBoot).
        </Paragraph>
        <Box align="left" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Dasmariñas, Cavite.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Started working as a Web Developer in AffinityX, Small Business
          Solutions, and as a Front-End Developer for 25SQM
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed the Bachelor of Science in Computer Science in The
          University of The Philippines Los Baños.
        </BioSection>
        <BioSection>
          <BioYear>Present</BioYear>
          Working as a Software Engineer for Optum.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>
          Valorant, RPGs, and NBA 2k. I also love playing basketball, hanging
          out with friends, and travelling with them.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List display={{ md: 'flex' }}>
          <ListItem>
            <Link href="https://github.com/cosmiclasagnadev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoGithub />}
              >
                @cosmiclasagnadev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/allenponsiii" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoTwitter />}
              >
                @allenponsiii
              </Button>
            </Link>
          </ListItem>
          <ListItem style={{ marginBottom: '20px' }}>
            <Link
              href="https://www.linkedin.com/in/aoponcedeleon/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoLinkedin />}
              >
                Allen Ponce de Leon
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        {/* <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
