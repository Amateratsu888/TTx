import React , {useEffect , useState} from "react";
import axios from 'axios'
import Clock from "../Clock/Clock";

const Arrived = () => {

    const [data, setData] = useState()
    
  

    const fetchData = async () => {
        const response = await axios.get(
              'http://localhost:5000/admin/getEmployees',
        )
        setData(response.data)
        
    }

    useEffect(() => {
        fetchData()
  });

  alert(data);

  
    return (
    <>
        
        <div className='contaiiner'>
        <form style={{width: '1000px', height : '350px'}}>
            <Clock/>
        <select className="form-control form-control-lg">
            <option>selectionner un employé</option>
           {/*data.map((item,index) => 
                <option key={index} >{item.employee_name}</option>
           )*/}
        </select>
        <button  type='submit' className="btn btn-success btn-lg btn-block" style={{marginLeft : '450px', marginTop : '90px'}} >Est arrivé(e)</button>
        </form>
        </div>
    </>
    );
};

export default Arrived;
