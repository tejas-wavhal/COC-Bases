import React from 'react'
import CardItem from './CardItem'
import { useSelector } from 'react-redux'


export default function Card() {

    let { selectTownhall } = useSelector(state => state.custom)

    return (
        <>
            <div className='container'>
                <h1 className='text-center my-4'>{`Townhall ${selectTownhall[0].th} Layouts`}</h1>
                <div className="row">
                    {selectTownhall.map((element) => {
                        return <div className="col-md-6" key={element.baseLink}>
                            <CardItem baseIMG={element.img} baseURL={element.baseLink} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}
