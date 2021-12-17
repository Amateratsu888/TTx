import React from 'react'

const New = () => {
    return (
        <>
            <div className='contaiiner'>
        <form style={{width: '1000px', height : '150px'}}>
        <input class="form-control form-control-lg" type="text" placeholder="Nom complet du nouveau employé(e)"/>
        <button  type='submit' className="btn btn-success btn-lg btn-block" style={{marginLeft : '450px', marginTop : '90px'}} >Enregistrer</button>
        </form>
        </div>
        </>
    )
}

export default New