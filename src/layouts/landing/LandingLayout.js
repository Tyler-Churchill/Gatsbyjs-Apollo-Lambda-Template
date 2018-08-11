import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import AppClient from '../../sources/app'
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
        <ApolloProvider client={AppClient}>
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
        </ApolloProvider>
      </ThemeProvider>
    )
  }
}
