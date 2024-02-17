import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Read.css';
import { Link } from 'react-router-dom';


const Read = () => {
  const [data,setData] = useState([]);
  
  const getData = async () => {
  const res =await axios.get('https://65b7855946324d531d54d167.mockapi.io/crud-youtube')
  const sortedData = res.data.sort((a, b) => b.id - a.id);
  setData(sortedData);
}

const delete_card = async (id) =>{
 await axios
 .delete(`https://65b7855946324d531d54d167.mockapi.io/crud-youtube/${id}`)
 getData();
}
const setlocalstorage = (id,F_name,L_Name,Phone,Company,image) => {
  localStorage.setItem("id" , id);
  localStorage.setItem("F_name1" , F_name);
  localStorage.setItem("L_Name" , L_Name);
  localStorage.setItem("Phone" , Phone)
  localStorage.setItem("Company" , Company);
  localStorage.setItem("image" , image);
};
useEffect(() => {
  getData();
},[]);


  return (
    <div>
            <div className="App">
        <div className='center-screen view'>
          <h3>Contacts</h3>
              
        {
    data?.map((eachdata) => {
        return(
          <div className='card' key={eachdata.id}> {/*contact card container*/}
               <div className='image'>
                     <img className='roundimage' src={eachdata.image} width="44px" height="44px"/>
               </div>
                    {console.log(eachdata)}
                     <div className='info'>
                         <p>{eachdata.F_name} {eachdata.L_Name}</p> 
                         <p>{eachdata.Phone}</p>
       
                    </div>
                      <div className='button_delete'>
                      <div>
                        <Link to='/update'>

                         <button className='btn_edit'   onClick={() =>setlocalstorage(eachdata.id,eachdata.F_name,eachdata.L_Name,eachdata.Phone,eachdata.Company,eachdata.image)}>Edit</button>
                         </Link>
                      </div>
                          <button className='btn_delete' onClick={() => delete_card(eachdata.id)} >Delete</button>
                    </div>
          </div>
          /*
          1. delete hidden
          btn_delte:on{
            dispay: block;
          }
          */
 
        )
    })
}

       
      </div>
      <Link to="/create"><button className='btn'>+</button></Link>
    </div>
    </div>
  )
}

export default Read


