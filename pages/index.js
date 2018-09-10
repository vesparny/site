import Link from 'next/link'
import Page from '../layouts/main'
import { Box } from 'rebass'

export default () => (
  <Page>
    <Box fontSize={2} p={2} color="red">
      ciaoaassss
    </Box>
    <Link href="/writing">
      <a>writing</a>
    </Link>
    <div>I tweet</div>
    <div>I blog </div>
    <div>I care about privacy </div>
    <div>I write code </div>
    <div>I am also on linkedin </div>
  </Page>
)
