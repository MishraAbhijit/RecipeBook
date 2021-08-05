import React from 'react'

export default function CardBody({ id, url, name, searchUrl }) {
    console.log("search url... " + searchUrl);
    return (
        <div className="card" id={id} onClick={() => { window.location.href = searchUrl }}>
            <div className="card-image">
                <img className="image" src={url} alt="avtar" />
            </div>
            <div className="container">
                <h4><b>{name}</b></h4>
            </div>
        </div>
    )
}
