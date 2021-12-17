import React from 'react'
import './ArrivedGone.css'
import {Link} from 'react-router-dom'

const ArrivedGone = () => {
    return (
        <>
            <div className = 'contaiiner'>
                <Link to='/arrive'>
                    <a href="#t" className="btn btn-success btn-lg btn-block ">Arrivé</a>
                </Link>
                <Link to='/NouveauEmploye'>
                <a href="#t" className="btn btn-outline-primary btn-lg btn-block ">Nouveau Emlployé</a>
                </Link>
                <Link to='/ListeEmployes'>
                <a href="#t" className="btn btn-outline-dark btn-lg btn-block ">Liste des employés</a>
                </Link>
                <Link to='/depart' >
                <a href="#t" className="btn btn-danger btn-lg btn-block ">Départ</a>
                </Link>
            </div>
        </>
    )
}

export default ArrivedGone 