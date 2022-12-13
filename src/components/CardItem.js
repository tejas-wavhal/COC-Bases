import React from 'react'

export default function CardItem(props) {
    const { baseIMG, baseURL } = props;
    return (
        <div className='col'>
            <div className="card my-4 mx-md-4" style={{ width: "auto" }}>
                <img src={baseIMG} className="card-img-top" alt="..." />
                <div className="card-body" style={{ display: "flex", justifyContent: "center" }}>
                    <a href={baseURL} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm" >Use Layout</a>
                </div>
            </div>
        </div>
    )
}
