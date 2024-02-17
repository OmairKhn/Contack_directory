import logo from './logo.svg';
import './App.css';
import Read from './Components/Read';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Create } from './Components/Create';
import Update from './Components/Update';
function App() {
  return (
<>
 <div className='header'><h1>Contacts</h1></div>

  
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Read />}/>
    <Route path="/create" element={<Create />}/>
    <Route path="/update" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
