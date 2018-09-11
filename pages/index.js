import Link from 'next/link'
import Page from '../layouts/main'
import { Box, Flex } from 'rebass'

export default () => (
  <Page>
    <Flex
      alignItems="center"
      justifyContent="center"
      fontSize={2}
      p={2}
      color="red">
      <Box flex="1 1 auto">
        <Link href="/writing">
          <a>writing</a>
        </Link>
        <div>I tweet</div>
        <div>I blog </div>
        <div>I care about privacy </div>
        <div>I write code </div>
        <div>I am also on linkedin </div>
      </Box>
    </Flex>
  </Page>
)
