import React from 'react';
import './Card.css';
import './Animate.css';

const Card = ({name, img, url, desc}) => {
    return (
        <div className='Card ma2 dib '>
            <div className='description'>
                <div className='descriptionInfo'>
                    <p>{desc}</p>
                </div>
            </div>
            <div className='overlay'>
                <a href={url}>
                    <img className='try' alt='project' src={img} 
                        width='150px' height='150px'>
                    </img>
                </a>
                <h3 className='pa0 animated bounce'>{name}</h3>
            </div>
        </div>
    )
}

export default Card;