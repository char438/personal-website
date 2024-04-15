import NextLink from 'next/link'

import { Button, Container, Box, Heading, Image, Link, List, ListItem, SimpleGrid, Icon } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import {ChevronRightIcon} from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
    return (
    <Layout>
    <Container>
        <Box 
            borderRadius = "lg"
            bg="teal" 
            p={3} 
            mb={6} 
            align="center"
        >
            I&apos;m currently studying at the University of Auckland!
        </Box>
        
        <Box display={{md:"flex"}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Cole Harrison

                </Heading>
                <p>BSc Computer Science & Statistics <br/>Working to become a ML Engineer / Software Developer</p>
            </Box>
            <Box  
                flexShrink={0} 
                mt={{base:4, md:0, }} 
                ml={{md:6}} 
                align="center"
                >
                <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2} 
                    borderStyle="solid" 
                    maxWidth="100px" 
                    display="inline-block" 
                    borderRadius="full" 
                    src="/Images/sonia_logo.jpg" 
                    alt="Profile Image" 
                    />
            </Box>
        </Box>

    <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
            Work
        </Heading>
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc pretium nisl neque, eget dapibus magna euismod in. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
            Curabitur a lorem sem.
        </Paragraph>
        <Box align="center" my={4}>
            <NextLink href='/works'>
                <Button rightIcon={<ChevronRightIcon />}>
                    My Portfolio
                </Button>
            </NextLink>
        </Box>
    </Section>

    <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
            Bio
        </Heading>
        <BioSection>
            <BioYear>2004 </BioYear>
            Born in Auckland, New Zealand.
        </BioSection>
        <BioSection>
            <BioYear>2017 - 2022 </BioYear>
            Graduated Westlake Boys High School.
        </BioSection>
        <BioSection>
            <BioYear>2023 - Present </BioYear>
            Enrolled in the University of Auckland.
        </BioSection>
    </Section>

    <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
            Other Links
        </Heading>
        <List>
            <ListItem>
                <Link href="https://github.com/char438" target="_blank">
                    <Button variant="ghost" colourScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>@char438</Button>
                </Link>
            </ListItem>

            <ListItem>
                <Link href="https://www.linkedin.com/in/cole-harrison-b53470291/?trk=opento_sprofile_details" target="_blank">
                    <Button variant="ghost" colourScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>@Cole Harrison</Button>
                </Link>
            </ListItem>
        </List>

    </Section>
    </Container>
    </Layout>
)
}

export default Page