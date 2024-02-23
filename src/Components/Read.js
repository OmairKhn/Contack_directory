import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Read.css';
import { Link } from 'react-router-dom';

 export const Read = () => {
  const [data,setData] = useState([]);
  const [searchQuery,setSearchQuery]=useState("");

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

const filteredData = data.filter(item => {
  const fullName = `${item.F_name} ${item.L_Name}`.toLowerCase();
  return fullName.includes(searchQuery.toLowerCase());
});
  return (
  <div>
            <div className="App">
            
        <div className='main_view'>
          <div className='card_header'>
          <input className='search_input' type='text'      placeholder='Search by Name'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}/>
          <div className='ad_contect'>
          <Link to="/create"><button className='btn'>Add</button></Link>
          </div>
        </div>
        <div className=' view'>
        


        {
    filteredData?.map((eachdata) => {
        return(
          <div className='card' key={eachdata.id}> {/*contact card container*/}
               <div className='image'>
{eachdata.image ? (
  <img src={eachdata.image} alt="Contact Icon" className='roundimage' width="44px" height="44px" />
) : (
  <img src="/contact_png.png" alt="Contact Icon" className='roundimage' width="44px" height="44px" />
)}               </div>
                    {console.log(eachdata)}
                     <div className='info'>
                         <p className='First_Name'>{eachdata.F_name} {eachdata.L_Name}</p> 
                         <p className='Phone_no'>{eachdata.Phone}</p>
       
                    </div>
                      <div className='button_delete'>
                      <div className='btn_s'>
                        <Link to='/update'>

                         <button className='btn_edit'   onClick={() =>setlocalstorage(eachdata.id,eachdata.F_name,eachdata.L_Name,eachdata.Phone,eachdata.Company,eachdata.image)}>Edit</button>
                         </Link>
                      </div>
                          <button className='btn_delete' onClick={() => delete_card(eachdata.id)} >Delete</button>
                       <Link to={"/detail"} ><button className='btn_View' onClick={() =>setlocalstorage(eachdata.id,eachdata.F_name,eachdata.L_Name,eachdata.Phone,eachdata.Company,eachdata.image)}  >View</button></Link>

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
    </div>
    </div>
   </div>
  )
}



