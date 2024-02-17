import logo from './logo.svg';
import './App.css';
import Read from './Components/Read';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Create } from './Components/Create';
function App() {
  return (
<>
 <div className='header'><h1>Contacts</h1></div>

  
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Read />}/>
    <Route path="/create" element={<Create />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
