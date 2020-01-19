import React from 'react'
import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../components/Grid'
import Admin from '../utils/socket/admin'
import Parents from '../utils/socket/parents'

function Database(props) {
  return (
    <>
      <Container>
        <Row styling='row align-self-center'>
          <Column>
            <Jumbotron title='Welcome to Harmony' lead='Parents Landing Page'></Jumbotron>
          </Column>
        </Row>
        <Admin { ...props}/>
        <Parents { ...props}/>
      </Container>
    </>
  )
}

export default Database
