import React, { useEffect } from 'react'
import './Townhalls.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export default function Thownhalls() {
  const dispatch = useDispatch()
  let { fetchData } = useSelector(state => state.custom)
  let getData = async () => {
    let url = "https://tejas-wavhal.github.io/thownhalls/townhalls.json"
    let scan = await fetch(url)
    let result = await scan.json()
    dispatch({ type: 'LOAD_DATA', payload: result })
  }
  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])
  let handleTh10 = () => {
    let data = fetchData.filter((e) => {
      return e.th === 10
    })
    dispatch({ type: 'LOAD_TH_10', payload: data })
  }
  let handleTh11 = () => {
    let data = fetchData.filter((e) => {
      return e.th === 11
    })
    dispatch({ type: 'LOAD_TH_11', payload: data })
  }
  let handleTh12 = () => {
    let data = fetchData.filter((e) => {
      return e.th === 12
    })
    dispatch({ type: 'LOAD_TH_12', payload: data })
  }
  let handleTh13 = () => {
    let data = fetchData.filter((e) => {
      return e.th === 13
    })
    dispatch({ type: 'LOAD_TH_13', payload: data })
  }
  let handleTh14 = () => {
    let data = fetchData.filter((e) => {
      return e.th === 14
    })
    dispatch({ type: 'LOAD_TH_14', payload: data })
  }
  let handleTh15 = () => {
    let data = fetchData.filter((e) => {
      return e.th === 15
    })
    dispatch({ type: 'LOAD_TH_15', payload: data })
  }

  return (
    <div>
      <div className="container text-center">
        <h1 className='h1'>Choose Your Townhall</h1>
        <div className="row">
          <Link to="/th10" className='sizeOfTownhall col' onClick={handleTh10}>
            <div>
              <img src="https://i.postimg.cc/zGKxXS0D/th10.png" alt="th10" />
              <h2>Townhall 10</h2>
            </div>
          </Link>
          <Link to="/th11" className='sizeOfTownhall col' onClick={handleTh11}>
            <div>
              <img src="https://i.postimg.cc/W3b88Rjt/th11.png" alt="th11" />
              <h2>Townhall 11</h2>
            </div>
          </Link>
          <Link to="/th12" className='sizeOfTownhall col' onClick={handleTh12}>
            <div>
              <img src="https://i.postimg.cc/hvY2h2kv/th12.webp" alt="th12" />
              <h2>Townhall 12</h2>
            </div>
          </Link>
        </div>
        <div className="row">
          <Link to="/th13" className='sizeOfTownhall col' onClick={handleTh13}>
            <div>
              <img src="https://i.postimg.cc/43GBK7S6/th13.webp" alt="th10" />
              <h2>Townhall 13</h2>
            </div>
          </Link>
          <Link to="/th14" className='sizeOfTownhall col' onClick={handleTh14}>
            <div>
              <img src="https://i.postimg.cc/s2JK5jkt/th14.webp" alt="th11" />
              <h2>Townhall 14</h2>
            </div>
          </Link>
          <Link to="/th15" className='sizeOfTownhall col' onClick={handleTh15}>
            <div>
              <img src="https://i.postimg.cc/j2BhRLfJ/th15.png" alt="th12" />
              <h2>Townhall 15</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
