import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

class Icons extends Component {
  render() {
    return (
      <div className='flex flex-wrap justify-center pa3'>
        <Icon className='grow-large mt1'
        size='huge' bordered inverted color='green' name='js' />
        <Icon className='grow-large mt1'
        size='huge' bordered inverted color='green' name='react' />
        <Icon className='grow-large mt1'
        size='huge' bordered inverted color='green' name='node' />
        <Icon className='grow-large mt1'
        size='huge' bordered inverted color='green' name='sass' />
      </div>
    )
  }
}

export default Icons
