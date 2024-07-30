import React from 'react'
import { HeaderContent, Header, Icon } from 'semantic-ui-react'

const mainHeader = () => (
  <Header as='h1' block color='teal'>
    <Icon name='heartbeat' />
    <HeaderContent> Pet Adoption Application</HeaderContent>
  </Header>
)

export default mainHeader