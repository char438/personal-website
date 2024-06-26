import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'

import { WorkGridItem } from '../components/grid-item'
import thumbSpotify from "../public/Images/spotifythumb.png"
import Layout from '../components/layouts/article'
import thumbAmazon from "../public/Images/amazonthumb.jpg"


const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>

            <Section>
                    <WorkGridItem id="amazonsentiment" title="Sentiment Classifier" thumbnail={thumbAmazon}>
                        Takes a given review and gives it a predicted star rating!
                    </WorkGridItem>
                </Section>


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