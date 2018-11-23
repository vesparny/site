import React from 'react'
import * as P from '../components/primitives'
import Layout from '../components/layout'

export default ({ location }) => (
  <Layout location={location}>
    <P.Flex
      css={{
        height: 'calc(100vh - 120px)'
      }}
      alignItems="center"
      justifyContent="center">
      <P.Box>
        <P.Card
          fontSize={4}
          as="span"
          pr={2}
          color="near-black"
          borderRight={1}
          borderColor="silver">
          404
        </P.Card>
        <P.Text fontSize={4} as="span" color="silver" pl={2}>
          Ouch, this page does not exist, the sadness 😩
        </P.Text>
      </P.Box>
    </P.Flex>
  </Layout>
)
