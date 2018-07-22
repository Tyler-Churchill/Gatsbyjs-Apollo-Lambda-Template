import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled'

export default class AppFooter extends Component {
  render() {
    return (
      <div>
        <Flex
          style={{ textAlign: 'center' }}
          justifyContent={'center'}
          alignItems={'center'}
          flexWrap={'wrap'}
        >
          <Box width={[1, 1 / 2, 1 / 2]} />
          <Box width={[1, 1 / 2, 1 / 2]} />
        </Flex>
      </div>
    )
  }
}
