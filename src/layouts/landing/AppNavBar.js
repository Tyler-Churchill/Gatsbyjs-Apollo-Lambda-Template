import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import Link from 'gatsby-link'

import AppContainer from './AppContainer'

const Nav = styled.nav`
  width: 100%;
  background: #eee;
`
const NavItem = styled.div``

export default class AppNavBar extends Component {
  render() {
    return (
      <Nav>
        <AppContainer>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            flexWrap={'wrap'}
          >
            <Box width={1 / 2}>
              <NavItem>
                <Link to={'/'}>|MySite|</Link>
              </NavItem>
            </Box>
            <Box width={1 / 2}>
              <NavItem>
                <Link to={'/about'}>about</Link>
              </NavItem>
            </Box>
          </Flex>
        </AppContainer>
      </Nav>
    )
  }
}
