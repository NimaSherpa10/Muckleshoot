import React from 'react';
import {Routes,Route, BrowserRouter } from 'react-router-dom';
import '../css/App.css';
import Navbar from '../components/navbar';
import Verticalbar from './verticalbar';
import Projects from './projects';
import Suppliers from './suppliers';
import AutoParts from './autoparts';
import AddProject from './Addproject';
import Selectedautoparts from './selectdautoparts';
import Selectedsuppliers from './suppliercontent';
import Viewparts from './viewparts';
function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
        <div className="content-wrapper">
          <Verticalbar />
          <div className = "contents"> 
            <Routes>
                <Route path = "/" element = {<Projects/>} />
                <Route path = "/suppliers" element = {<Suppliers/>} />
                <Route path = "/autoparts" element = {<AutoParts />} />
                <Route path = "/addproject" element = {<AddProject/>} />
                <Route path = "/projects/selectedsuppliers/:projectID" element = {<Selectedsuppliers />} />
                <Route path = "/projects/selectedautoparts/:projectID" element = {<Selectedautoparts /> } /> 
                <Route path = "/projects/selectedsuppliers/:projectID/autoparts/:supplerId" element = {<Viewparts /> } /> 
            </Routes>
          </div>
    </div>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
