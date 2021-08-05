import React from 'react'

export default function CardBodyMedium({ id, url, name }) {
    return (
        <div className="card-medium" id={id} onClick={() => { window.location.href = "/recipe/" + id }}>
            <div className="card-image-medium">
                <img className="image" src={url} alt="avtar" />
            </div>
            <div className="container-medium">
                <h5><b>{name}</b></h5>
            </div>
        </div>
    )
}
