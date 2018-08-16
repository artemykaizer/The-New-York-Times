import React from 'react'
import loader from '../style/Facebook-0.9s-200px.svg'

function Preloader () {
    return (
        <img src={loader} alt="Loading" className="loader"/>
    )
}

export default Preloader