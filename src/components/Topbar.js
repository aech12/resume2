import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Topbar extends Component {
  state = {
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  // goToSection = (input) => {
  //   switch(input) {
  //     case 'me':
  //       window.location.href='#me';
  //       break;
  //     case 'projects':
  //       window.location.href='#projects';
  //       break;
  //     case 'bio':
  //       window.location.href='#bio';
  //       break;
  //     default:
  //       console.log('Error on placing >_>')
  //   }
  // }

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='huge' fixed inverted stackable fluid 
      style={{background: '#563B3A', margin: '0px',
      borderBottom: 'solid black 5px'}}
      >
      
        <Menu.Item href='#sectionMe'
          name='Me'
          active={activeItem === 'Me'}
          // onClick={this.handleItemClick}
          // onClick={()=> this.goToSection('me')}
          onClick={
            ()=> {
              this.handleItemClick;
              // this.goToSection('me');
            }
          }
        >
          Me
        </Menu.Item>

        <Menu.Item href='#sectionProjects'
          name='Projects'
          active={activeItem === 'Projects'} 
          onClick={
            ()=> {
              this.handleItemClick;
              // this.goToSection('projects');
            }
          }
        >
          Projects
        </Menu.Item>

        <Menu.Item href='#sectionBio'
          name='Bio'
          active={activeItem === 'Bio'}
          onClick={
            ()=> {
              this.handleItemClick;
              // this.goToSection('bio');
            }
          }
        >
          Bio
        </Menu.Item>

        <Menu.Menu position='right'>
        <Menu.Item 
        name='signup' 
        active={activeItem === 'signup'} 
        onClick={this.handleItemClick}>
          {/* What's your name? */}
          Resume Page
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

