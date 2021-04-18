import React, { useState } from 'react'
import './Card.css'
import CardImage from './CardImage'


function Card(props){

    const currName = props.name;
    const [name, setName]= useState(props.name);

    const clickHandler = () => {
        setName('Novo');
        console.log('Ramon was here');
    }

    const mouseEnterHandler = () => {
        setName('Teste');
    }

    const mouseLeaveHandler = () => {
        setName(currName);
    }

    return (
        
        <div className="card">
            <CardImage></CardImage>
            <h1 className="text-dark">{name}</h1>
            <div className="row text-left">
                <div className="col-md-6">
                    <h5 className="text-dark">{props.age} anos</h5>
                </div>
                <div className="col-md-6">
                    <h5 className="text-dark"><i className="fas fa-trash"></i>{props.age}</h5>
                </div>
            </div>
            <button onClick={clickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>Teste</button>

        </div>

    );
}

export default Card;