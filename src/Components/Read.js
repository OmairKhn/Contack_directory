import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Read.css';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditNoteIcon from '@mui/icons-material/EditNote';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'; 

export const Read = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(null); // State to track which card's dropdown is open

  const getData = async () => {
    const res = await axios.get('https://65b7855946324d531d54d167.mockapi.io/crud-youtube');
    const sortedData = res.data.sort((a, b) => b.id - a.id);
    setData(sortedData);
  }

  const delete_card = async (id) => {
    await axios.delete(`https://65b7855946324d531d54d167.mockapi.io/crud-youtube/${id}`);
    getData();
  }

  const setlocalstorage = (id, F_name, L_Name, Phone, Company, image, Website, Home, Dob, Email, Notes) => {
    localStorage.setItem("id", id);
    localStorage.setItem("F_name1", F_name);
    localStorage.setItem("L_Name", L_Name);
    localStorage.setItem("Phone", Phone)
    localStorage.setItem("Company", Company);
    localStorage.setItem("image", image);
    localStorage.setItem("Website", Website);
    localStorage.setItem("Home", Home);
    localStorage.setItem("Dob", Dob);
    localStorage.setItem("Email", Email);
    localStorage.setItem("Notes", Notes);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDropdownClick = (cardId) => {
    setDropdownOpen(cardId === dropdownOpen ? null : cardId); // Toggle visibility based on current state
  };
  

 


  const filteredData = data.filter(item => {
    const fullName = `${item.F_name} ${item.L_Name}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <div className="App">
        <div className='main_view'>
          <div className='card_header'>
            <input 
              className='search_input' 
              type='text'      
              placeholder='Search by Name'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className='ad_contect'>
              <Link to="/create">
                <button className='btn'>Add</button>
              </Link>
            </div>
          </div>
          <div className=' view'>
            {filteredData?.map((eachdata) => (
              <div className='card' key={eachdata.id}> {/*contact card container*/}
                <div className='image'>
                  {eachdata.image ? (
                    <img src={eachdata.image} alt="Contact Icon" className='roundimage' width="44px" height="44px" />
                  ) : (
                    <img src={process.env.PUBLIC_URL + "/contact_png.png"} alt="" className="roundimage" width="44px" height="44px" />
                  )}
                </div>
                <div className='info'>
                  <p className='First_Name'>{eachdata.F_name} {eachdata.L_Name}</p> 
                  <p className='Phone_no'>{eachdata.Phone}</p>
                </div>
                <div className='button_delete'>
          <div className="dropdown">
          <button onClick={() => handleDropdownClick(eachdata.id)} className="dropbtn">
          <MoreVertIcon className='threedots'/>
      </button>
      <div id={`myDropdown${eachdata.id}`} className={`dropdown-content ${eachdata.id === dropdownOpen ? 'show' : ''}`}>
      <Link to='/update'> <a onClick={() => setlocalstorage(eachdata.id,eachdata.F_name,eachdata.L_Name,eachdata.Phone,eachdata.Company,eachdata.image,eachdata.Website,eachdata.Home,eachdata.Dob,eachdata.Email,eachdata.Notes)} >Edit</a></Link>
        <a   onClick={() => delete_card(eachdata.id)}>Delete</a>
        <Link to={"/detail"}>
   <a onClick={() => setlocalstorage(eachdata.id,eachdata.F_name,eachdata.L_Name,eachdata.Phone,eachdata.Company,eachdata.image,eachdata.Website,eachdata.Home,eachdata.Email,eachdata.Dob,eachdata.Notes)}>View</a> </Link>
      </div>
    </div>   
    <div className='btns'>
                  <div className='btn_s'>
                    <Link to='/update'>
                      <button className='btn_edit' onClick={() => setlocalstorage(eachdata.id,eachdata.F_name,eachdata.L_Name,eachdata.Phone,eachdata.Company,eachdata.image,eachdata.Website,eachdata.Home,eachdata.Dob,eachdata.Email,eachdata.Notes)}>
                        <EditNoteIcon/>
                      </button>
                    </Link>
                  </div>
                  <button className='btn_delete' onClick={() => delete_card(eachdata.id)} >
                    <DeleteOutlineIcon/>
                  </button>
                  <Link to={"/detail"}>
                    <button className='btn_View' onClick={() => setlocalstorage(eachdata.id,eachdata.F_name,eachdata.L_Name,eachdata.Phone,eachdata.Company,eachdata.image,eachdata.Website,eachdata.Home,eachdata.Email,eachdata.Dob,eachdata.Notes)}>
                      <VisibilityIcon/>
                    </button>
                  </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
