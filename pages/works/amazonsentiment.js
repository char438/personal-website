import {Container, Badge, List, ListItem, Link} from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Amazon">
            <Container>
                <Title>
                    Sentiment Classifier <Badge>April 2024 -</Badge>
                </Title>
                <Paragraph>
                    Sentiment Analysis and Random Forest Classifier project that classifies a given review to a star rating. 
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
                        <Meta>Github</Meta>
                        <span><Link href="https://github.com/char438/Amazon-Review-Classifier" target="_blank">https://github.com/char438/Amazon-Review-Classifier</Link></span>
                    </ListItem>
                </List>
                
            </Container>
        </Layout>
    )

}

export default Work