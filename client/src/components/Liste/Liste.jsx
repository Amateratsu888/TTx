import React, {useState,useEffect} from "react";
import axios from 'axios'

const Liste = () => {

    
    return (
    <>
        <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Prénom et Nom</th>
            <th scope="col">Heure d'arrivé</th>
            <th scope="col">Heure de depart</th>
            <th scope="col">Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </table>
    </>
    );
};

export default Liste;
