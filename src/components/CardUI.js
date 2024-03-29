import React from 'react'
import './CardUI.css'

const Card = (props) => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="screenshot" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text secondary">
                    {props.description}
                </p>
                <a href={props.liveLink} className="btn btn-outline-success">Live</a>
                <a href={props.repoLink} className="btn btn-outline-success">Code</a>
                
            </div>
        </div>
    )
}

export default Card
