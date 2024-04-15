import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Spade from '../public/spades'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &hover img{
        transform: rotate(20deg);
    }
`

const Logo = () => {
    return (
      (<Link href="/" scroll={false}>
  
        <LogoBox>
          <Spade />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            ml={3}
          >
            Cole Harrison
          </Text>
        </LogoBox>
  
      </Link>)
    );
  }
  

export default Logo