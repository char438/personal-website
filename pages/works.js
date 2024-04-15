import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'

import { WorkGridItem } from '../components/layouts/grid-item'
import thumbSpotify from "../public/Images/spotifythumb.png"
import Layout from '../components/layouts/article'


const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="vtsp" title="Voice to Spotify Playlist" thumbnail={thumbSpotify}>
                        Software that uses your voice to generate a spotify playlist!
                    </WorkGridItem>
                </Section>

            </SimpleGrid>

        </Container>
        </Layout>
    )
}

export default Works