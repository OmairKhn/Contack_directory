import React, { useState, useEffect } from 'react';
import './Detail.css';
const Detail = () => {
    const [F_name, Set_FName] = useState("");
    const [L_Name, Set_LName] = useState("");
    const [Phone, SetPhone] = useState("");
    const [Company, SetCompany] = useState("");
    const [image, setimage] = useState("");
    const [Website,SetWebsite] = useState("");
    const [Home,SetHome] = useState("");
    const [Email,SetEmail] = useState("");
    const [Dob,SetDob] = useState("");
    const [Notes,SetNotes] = useState("");

    useEffect(() => {
        Set_FName(localStorage.getItem("F_name1") || "");
        Set_LName(localStorage.getItem("L_Name") || "");
        SetPhone(localStorage.getItem("Phone") || "");
        SetCompany(localStorage.getItem("Company") || "");
        setimage(localStorage.getItem("image") || "");
        SetWebsite(localStorage.getItem("Website") || "");
        SetHome(localStorage.getItem("Home") || "");
        SetDob(localStorage.getItem("Dob") || "");
        SetEmail(localStorage.getItem("Email") || "");
        SetNotes(localStorage.getItem("Notes") || "");
      }, []);


  return (
       <div className='view_page'>
        <div className='main_view1'>
          <div className='view_div1'>
            <div className='div1_1'>
            {image ? (
  <img src={image} alt="Contact Icon" className='roundimage1' width="90%" height="100%" />
) : (
  <img src={process.env.PUBLIC_URL + "/contact_png.png"}  alt="Contact Icon" className='roundimage' width="90%" height="100%" />
)}             </div>
            <div className='div1_2'>
                <h2>{F_name} {L_Name}</h2>
                <h4>{Company}</h4>
            </div>
          </div>
          <div className='view_div2'>
            <div>
                <table>
                
                <tr> <th>Mobile </th><td>{Phone}</td></tr>
                <tr><th>Website</th><td>{Website ? Website : 'N/A'}</td> </tr>
                <tr> <th>Home </th><td>{Home ? Home :'N/A'}</td></tr>
                <tr><th>Email</th><td>{Email ? Email : 'N/A'}</td></tr>
                <tr><th>D.O.B</th><td>{Dob ? Dob : 'N/A'}</td></tr>
                <tr><th>Notes</th><td>{Notes ? Notes : 'N/A'}</td></tr>

                </table>
           {/* <h3>phone #  <span>   {Phone}</span> </h3>
           
           <h3>Website: <span>www.instagram.com</span> </h3>
           <h3>Home: <span>street 49 i/10 1</span> </h3>
           <h3>D.O.B:<span> 23/3/2000</span>  </h3>
           <h3>Email: <span>uk@gmail.com</span></h3>
           <h3>Notes: <span>This in my info</span> </h3> */}
            </div>
            <div>
                
            </div>
          </div>
            
        </div>
    </div>
  )
}

export default Detail