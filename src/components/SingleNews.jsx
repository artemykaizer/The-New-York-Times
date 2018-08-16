import React from 'react'

function SingleNews (props) {
    return (
        <a href={props.url} target="_blank" id={props.id} className="item-container">
            {props.img ? <img className="item-img" src={props.img.url} alt="Preview"/> : null}
            <h2 className="item-header">{props.title}</h2>
            <p className="item-desc">{props.abstract}</p>
        </a>
    )
}

export default SingleNews