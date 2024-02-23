import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Create.css';
const Update = ()=> {
  const [id,setid]=useState("")
  const [F_name, Set_FName] = useState("");
  const [L_Name, Set_LName] = useState("");
  const [Phone, SetPhone] = useState("");
  const [Company, SetCompany] = useState("");
  const [image, setimage] = useState("");
  const [error, Seterror] = useState("");

  const history = useNavigate();


  useEffect(() => {
      setid(localStorage.getItem("id") || "");
      Set_FName(localStorage.getItem("F_name1") || "");
      Set_LName(localStorage.getItem("L_Name") || "");
      SetPhone(localStorage.getItem("Phone") || "");
      SetCompany(localStorage.getItem("Company") || "");
      setimage(localStorage.getItem("image") || "");
    }, []);
  const handleSubmit = async (e) => {
    
    if (!F_name&&!L_Name ) {
      Seterror("YOu must have Enter First Name and phone number");
      return; // Prevent further execution if there are errors
    }
    else if (!F_name ) {
      Seterror("Please Enter your name");
      return; // Prevent further execution if there are errors
    }
    else if(!Phone){
Seterror("Please Enter your Phone number");
return;
    }
      e.preventDefault();
         await axios.put(`https://65b7855946324d531d54d167.mockapi.io/crud-youtube/${id}`,{
           F_name:F_name,
           L_Name:L_Name,
           Phone:Phone,
           Company:Company,
           image:image
         } )
        history("/")
       } 
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
    <div className='main_div'>

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
      Update
    </button>
            
    <p className='error_message'>{error}</p>
  </div>
  </div>
  )
}

export default Update