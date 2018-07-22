import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-style: outset;
`

const Image = styled.img`
  width: 125px;
  height: auto;
`

const Event = ({ name, image, id }) => {
  return (
    <Container>
      <Image src={image} key={id} />
      <h3>{name}</h3>
    </Container>
  )
}

export default Event
