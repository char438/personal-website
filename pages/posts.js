import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPlaceholder from '../public/Images/placeholder.png'
const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontsize={20} mb={4}>
                Top Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                </SimpleGrid>
                
                <GridItem title="Coming Soon.." thumbnail={thumbPlaceholder}>
                </GridItem>
            </Section>
        </Container>
    </Layout>
)
export default Posts