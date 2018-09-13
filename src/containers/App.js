import React, { Component } from 'react';
import Me from '../components/Me/Me';
import Projects from '../components/Projects/Projects';
import Bio from '../components/Bio/Bio';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
import './App.css';


import ScrollableAnchor from 'react-scrollable-anchor'
class App extends Component {

  render() {
    return (
      <div>
        <Topbar/>
        {/* grid div below */}
        <div>

          <div>
            <a href='#sectionMe'> </a>
            <a href='#sectionProjects'> </a>
            <a href='#sectionBio'> </a>

            <ScrollableAnchor id={'sectionMe'}>
              <div></div>
            </ScrollableAnchor>
            <Me/>
            <ScrollableAnchor id={'sectionProjects'}>
              <div></div>
            </ScrollableAnchor>
            <Projects/>
            <ScrollableAnchor id={'sectionBio'}>
              <div></div>
            </ScrollableAnchor>
            <Bio/>
          </div>

          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;