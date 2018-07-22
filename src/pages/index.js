import React, { Component } from 'react'
import LandingLayout from '../layouts/landing/LandingLayout'
import AppQuery from '../components/data/AppQuery'
import { Flex, Box } from 'grid-styled'
import gql from 'graphql-tag'

import Event from '../components/Event'

export default class Landing extends Component {
  render() {
    return (
      <LandingLayout>
        <div>
          <p>Let's query our lambda server to see if it is working</p>
          <AppQuery
            query={gql`
              query {
                serverReady
              }
            `}
            render={({ data }) => (
              <span style={{ color: data && 'green' }}>
                Server response: "{data.serverReady}"
              </span>
            )}
          />
        </div>
        {'\u00A0'}
        {'\u00A0'}
        <p>
          Now lets access data from an external api through our lambda server.
        </p>
        <p>
          Events happening in Calgary Alberta (Data from https://showpass.com)
        </p>
        <AppQuery
          query={gql`
            query {
              getCurrentCalgaryEvents {
                id
                name
                image
              }
            }
          `}
          render={({ data }) =>
            data.getCurrentCalgaryEvents.map(({ id, name, image }) => {
              return <Event name={name} image={image} key={id} />
            })
          }
        />
      </LandingLayout>
    )
  }
}
