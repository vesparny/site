import Link from 'next/link'
import Page from '../layouts/main'
import { Box, Flex, Text } from 'rebass'
import { A } from '../components/ui'

export default () => (
  <Page>
    <Flex
      p={[3, 4, 4]}
      alignItems="center"
      justifyContent="center"
      css={{
        height: 'calc(100vh - 120px)'
      }}
      color="near-black">
      <Flex
        bg="white"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        css={{
          maxWidth: '710px'
        }}>
        <Box css={{ textAlign: 'center' }}>
          <Text
            as="h1"
            fontWeight="normal"
            mb={1}
            fontSize={6}
            color="mid-gray"
            fontFamily="sans">
            Alessandro Arnodo
          </Text>
          <Text
            as="h3"
            fontWeight="normal"
            m={0}
            mb={4}
            fontSize={3}
            color="mid-gray"
            fontFamily="sans">
            Software Engineer - I write code. For fun & food.
          </Text>
          <Text
            as="h3"
            fontWeight="normal"
            m={0}
            mb={3}
            fontSize={3}
            color="mid-gray"
            fontFamily="sans">
            I do things for web and mobile. Mostly in JavaScript.
          </Text>
          <Text
            as="h3"
            fontWeight="normal"
            m={0}
            mb={3}
            fontSize={3}
            color="mid-gray"
            fontFamily="sans">
            Born and raised in Italy 🇮🇹 currently working in Switzerlad 🇨🇭
          </Text>
          <Text
            m={0}
            mb={3}
            mt={5}
            fontSize={3}
            color="mid-gray"
            fontFamily="sans">
            Want to get in touch? Send me an{' '}
            <A fontSize={3} href="mailto:alessandro@arnodo.net">
              email
            </A>{' '}
            ({' '}
            <Link href="/static/alessandro@arnodo.net.asc" passHref>
              <A fontSize={3}>GPG</A>
            </Link>{' '}
            0x55F5F3E3 )
          </Text>
        </Box>
        <Box mt={5}>
          <Link href="/writing" passHref>
            <A fontSize={3} mx={1}>
              writing
            </A>
          </Link>
          <A
            fontSize={3}
            target="_blank"
            href="https://twitter.com/vesparny"
            mx={2}>
            tweets
          </A>
          <A
            fontSize={3}
            target="_blank"
            href="https://github.com/vesparny"
            mx={2}>
            code
          </A>
          <A
            fontSize={3}
            target="_blank"
            href="https://keybase.io/vesparny"
            mx={2}>
            keybase
          </A>
        </Box>
      </Flex>
    </Flex>
  </Page>
)
