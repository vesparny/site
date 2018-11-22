import React from 'react'
import { withPrefix } from 'gatsby'
import * as P from '../components/primitives'

export default () => (
  <P.Flex
    p={[3, 4, 4]}
    alignItems="center"
    justifyContent="center"
    css={{
      height: 'calc(100vh - 60px)'
    }}
    color="near-black">
    <P.Flex
      bg="white"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      css={{
        maxWidth: '800px'
      }}>
      <P.Box css={{ textAlign: 'center' }}>
        <P.Text mb={3} fontSize={5} color="mid-gray" fontFamily="sans">
          Alessandro Arnodo
        </P.Text>
        <P.Text mb={3} fontSize={3} color="mid-gray" fontFamily="sans">
          I write code. For fun & food.
        </P.Text>
        <P.Text mb={3} fontSize={1} color="mid-gray" fontFamily="sans">
          If you want to get in touch, feel free to send me an{' '}
          <P.A fontSize={2} href="mailto:alessandro@arnodo.net">
            email
          </P.A>{' '}
          ({' '}
          <P.Link href={withPrefix('/alessandro@arnodo.net.asc')} passHref>
            GPG
          </P.Link>{' '}
          0x784358031C8E1716 )
        </P.Text>
      </P.Box>
      <P.Box mt={5}>
        <P.Link href="/writing" passHref>
          <P.A fontSize={2} mx={1}>
            writing
          </P.A>
        </P.Link>
        <P.A
          fontSize={2}
          target="_blank"
          href="https://twitter.com/vesparny"
          mx={2}>
          tweets
        </P.A>
        <P.A
          fontSize={2}
          target="_blank"
          href="https://github.com/vesparny"
          mx={2}>
          code
        </P.A>
        <P.A
          fontSize={2}
          target="_blank"
          href="https://keybase.io/vesparny"
          mx={2}>
          keybase
        </P.A>
      </P.Box>
    </P.Flex>
  </P.Flex>
)
