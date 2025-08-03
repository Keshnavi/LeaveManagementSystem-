
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddLeave from './users/AddLeave';
import EditLeave from './users/EditLeave';
import ViewLeave from './users/ViewLeave';

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/> 

     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/addleave" element={<AddLeave/>}/>
      <Route exact path="/editleave/:id" element={<EditLeave/>}/>
      <Route exact path="/viewleave/:id" element={<ViewLeave />} />
     </Routes>
     
     </Router>
     
    </div>
  );
}

export default App;