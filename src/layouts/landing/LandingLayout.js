import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { Flex, Box } from 'grid-styled'

import AppContainer from './AppContainer'
import AppNavBar from './AppNavBar'
import AppFooter from './AppFooter'

const theme = {
  space: [0, 6, 12, 18, 24],
  breakpoints: ['32em', '48em', '64em'],
}

export default class LandingLayout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            defaultTitle={`EXAMPLE SITE`}
            titleTemplate={`%s | EXAMPLE SITE`}
          >
            <meta name="twitter:site" content="@EXAMPLESITE" />
            <meta name="og:type" content="website" />
            <meta name="og:site_name" content="EXAMPLESITE" />
            <html lang="en" />
          </Helmet>
          <AppNavBar />
          <AppContainer>
            <div>{this.props.children}</div>
            <AppFooter />
          </AppContainer>
        </div>
      </ThemeProvider>
    )
  }
}
