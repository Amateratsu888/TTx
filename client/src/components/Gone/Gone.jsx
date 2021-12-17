import React, {useEffect,useState}from "react";

const Gone = () => {

    const [clock , setClock] = useState()

    useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

    return (
    <>
        <div className='contaiiner'>
        <form style={{width: '1000px', height : '150px'}}>
        <h1 style = {{
            marginLeft : '400px',
            marginTop : '1px',
            fontSize : '60px'
        }}>{clock}</h1>
        <select class="form-control form-control-lg">
            <option>Large select</option>
        </select>
        <button  type='submit' className="btn btn-success btn-lg btn-block" style={{marginLeft : '450px', marginTop : '90px'}} >Est rentré(e)</button>
        </form>
        </div>
    </>
    );
};

export default Gone;
