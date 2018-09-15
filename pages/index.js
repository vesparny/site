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
        height: 'calc(100vh - 60px)'
      }}
      color="near-black">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        css={{
          maxWidth: '650px'
        }}>
        <Box>
          <Text mb={3} fontSize={4} color="mid-gray" fontFamily="sans">
            My name is Alessandro Arnodo & This is my personal website.
          </Text>
          <Text mb={3} fontSize={3} color="mid-gray" fontFamily="sans">
            I’m a software developer living in Italy. I mainly write JavaScript
            & work on web and mobile apps.
          </Text>
          <Text mb={3} fontSize={3} color="mid-gray">
            If you want to get in touch, feel free to send me an{' '}
            <A fontSize={3} href="mailto:alessandro@arnodo.net">
              email
            </A>
          </Text>

          <Link href="/static/alessandro@arnodo.net.asc" passHref>
            <A fontSize={2} mx={1}>
              GPG Public key
            </A>
          </Link>
          <Text mb={3} fontSize={2} color="mid-gray" fontFamily="sans">
            9EDC 42B1 C91B A064 BD27 5A4B 4F6E F705 55F5 F3E3
          </Text>
        </Box>
        <Box mt={5}>
          <Link href="/writing" passHref>
            <A fontSize={2} mx={1}>
              writing
            </A>
          </Link>
          <A
            fontSize={2}
            target="_blank"
            href="https://twitter.com/vesparny"
            mx={2}>
            tweets
          </A>
          <A
            fontSize={2}
            target="_blank"
            href="https://github.com/vesparny"
            mx={2}>
            code
          </A>
          <A
            fontSize={2}
            target="_blank"
            href="https://mastodon.social/@vesparny"
            mx={2}>
            mastodon
          </A>
          <A
            fontSize={2}
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
