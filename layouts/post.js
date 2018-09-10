import Page from './main'
import { Box } from 'rebass'

export default ({ children }) => (
  <Page>
    <Box
      css={{
        maxWidth: '650px',
        margin: 'auto',
        fontSize: '14px'
      }}>
      {children}
    </Box>
  </Page>
)
