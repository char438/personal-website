import {Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Spotify">
            <Container>
                <Title>
                    Spotify Playlist Generator <Badge>March 2024 -</Badge>
                </Title>
                <Paragraph>
                    Software that takes user voice input to generate a spotify playlist tailored to their wants.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Blogpost</Meta>
                        <span>Coming soon..?</span>
                    </ListItem>
                </List>
                
            </Container>
        </Layout>
    )

}

export default Work