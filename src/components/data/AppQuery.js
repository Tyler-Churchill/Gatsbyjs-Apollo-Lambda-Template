import React, { Component } from 'react'
import { Query } from 'react-apollo'
import AppSpinner from './loading/AppSpinner'

export default class AppQuery extends Component {
  render() {
    return (
      <Query
        query={this.props.query}
        pollInterval={this.props.pollInterval || 0}
        fetchPolicy="cache-and-network"
        refetch={this.props.refetch}
      >
        {({ loading, error, data, refetch }) => {
          if (loading && !this.props.noSpinner) return <AppSpinner />
          if (error) return <div>Error loading... try again later</div>
          return this.props.render({ loading, error, data, refetch })
        }}
      </Query>
    )
  }
}
