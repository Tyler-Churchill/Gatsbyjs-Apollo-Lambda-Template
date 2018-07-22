import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { ApolloProvider } from 'react-apollo'
import AppClient from '../../sources/app'
import AppSpinner from './loading/AppSpinner'

export default class AppQuery extends Component {
  render() {
    return (
      <ApolloProvider client={AppClient}>
        <Query
          query={this.props.query}
          pollInterval={this.props.pollInterval || 0}
          refetch={this.props.refetch}
        >
          {({ loading, error, data, refetch }) => {
            if (loading && !this.props.noSpinner) return <AppSpinner />
            if (error) return <div>Error loading... try again later</div>
            return this.props.render({ loading, error, data, refetch })
          }}
        </Query>
      </ApolloProvider>
    )
  }
}
