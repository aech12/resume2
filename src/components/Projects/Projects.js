import React from 'react';
import Card from './Card';
import {descriptions, images} from './ImgDesc';
import './Projects.css';

const desc = descriptions;
const img = images;

const Projects = () => {
    return (
        <div 
        id='projects'
        className='Projects'
        style={{}}>
        
            <h2>PROJECTS</h2>

            <Card name='Play Tictactoe' img={img[0]}
                url='https://aech12.github.io/tictactoe/'
                desc={desc[0]}
            />
            <Card name='Robofriends' img={img[1]}
                url='https://aech12.github.io/Robofriends-reference/'
                desc={desc[1]}
            />
            <Card name='Smart Brain' img={img[2]}
                url='https://aech12.github.io/smart-brain/'
                desc={desc[2]}
            />
        </div>
    )
}

export default Projects;