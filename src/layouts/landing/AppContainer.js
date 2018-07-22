import React from 'react'
import { Box } from 'grid-styled'

const AppContainer = props => (
  <Box
    {...props}
    mx="auto"
    css={{
      padding: '15px',
      maxWidth: '1024px',
    }}
  />
)
export default AppContainer
