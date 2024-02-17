import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Create.css';

export const Create = () => {
  const [F_name, Set_FName] = useState("");
  const [L_Name, Set_LName] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Company, SetCompany] = useState("");
  const [error, Seterror] = useState("");
  const history = useNavigate();
  const [image, setimage] = useState("");

  // useEffect(() => {
  //   const storedFName = localStorage.getItem("F_name1");
  //   const storedLName = localStorage.getItem("L_Name");
  //   const storedPhone = localStorage.getItem("Phone");
  //   const storedCompany = localStorage.getItem("Company");
  //   const storedImage = localStorage.getItem("image");
  
  //   if (storedFName) {
  //     Set_FName(storedFName);
  //   }
  //   if (storedLName) {
  //     Set_LName(storedLName);
  //   }
  //   if (storedPhone) {
  //     SetPhone(storedPhone);
  //   }
  //   if (storedCompany) {
  //     SetCompany(storedCompany);
  //   }
  //   if (storedImage) {
  //     setimage(storedImage);
  //   }
  
  // }, []);
  



  const handleSubmit = async (e) => {
 e.preventDefault();
    await axios.post('https://65b7855946324d531d54d167.mockapi.io/crud-youtube',{
      F_name:F_name,
      L_Name:L_Name,
      Phone:Phone,
      Company:Company,
      image:image
    } );
   history("/")
  };
  const ConvertToBase64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setimage(reader.result); // Store the base64 image string
    };
    reader.onerror = (error) => {
      console.error('Error converting image to base64:', error);
    };
  };

  return (
    <div className="Create">
      <Link to='/'>New Contact</Link>
      <div className='input_Name'>
        <label>First Name: <span className='required'>*</span></label><br/>
        <input
          style={{ border: !F_name && error ? '1px solid red' : 'none' }}
          className='inp'
          type='text'
          placeholder='Adnan'
          value={F_name} // Set the value attribute to display F_name in the input field
          onChange={(e) => Set_FName(e.target.value)}
          required
        />
      </div>
      <div className='input_Name'>
        <label>Last Name:</label><br/>
        <input
          className='inp'
          type='text'
          placeholder='khan'
          value={L_Name}
          onChange={(e) => Set_LName(e.target.value)}
        />
      </div>
      <div className='input_Name'>
        <label>Phone:<span className='required'>*</span></label><br/>
        <input
          style={{ border: !Phone && error ? '1px solid red' : 'none' }}
          className='inp'
          type='number'
          placeholder='+92 342634634'
          value={Phone}
          onChange={(e) => SetPhone(e.target.value)}
        />
      </div>
      <div className='input_Name'>
        <label>Company:</label><br/>
        <input
          className='inp'
          type='text'
          placeholder='Microsoft'
          value={Company}
          onChange={(e) => SetCompany(e.target.value)}
        />
      </div>
     <div className='image_div'>
      <input type='file' onChange={ConvertToBase64} ></input>
      <img className='input_image' src={image} height={"40px"} width={"60px"}  />
      </div>
      <button
        disabled={!F_name && !L_Name && !Phone && !Company}
        className='btn_save'
        onClick={handleSubmit}
      >
        Save
      </button>
              
      <p className='error_message'>{error}</p>
    </div>
  );
};

