import NextLink from 'next/link'
import {
    Box,
    Heading,
    Container,
    Divider,
    Button,
    Text
} from '@chakra-ui/react'

const NotFound = () => {
    return(
        <Container>
            <Heading as='h1' align='center'>Not Found</Heading>
            <Text align='center'>The page you&apos;re looking for was not found.<br>
            </br>If you&apos;re a recruiter seeing this, I assure you it was intentional :)</Text>
            <Divider my={6} />
            
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Return to Home</Button>
                </NextLink>

            </Box>
        </Container>
    )
}
export default NotFound