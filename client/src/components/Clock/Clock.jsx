import React, {useState,useEffect} from 'react'

const Clock = () => {

    const [clock , setClock] = useState()

    const updateClock = ()=> {
        const date = new Date();
      setClock( date.toLocaleTimeString());
    }

    useEffect(() => {
        setInterval(() => {
            updateClock()  
        }, 1000);
    }, [])


    return (
        <>
            <h1 style={{fontSize : '60px'}} >
            {clock}
            </h1>
        </>
    )
}

export default Clock