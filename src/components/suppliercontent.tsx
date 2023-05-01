import React, { useState } from 'react';
import { IoMdNotifications, IoMdSettings, IoMdPerson } from 'react-icons/io';
import '../css/projects.css';
import { Link } from 'react-router-dom';
import { selectedSupplierData } from './fakeSuppliers';
import { useParams } from 'react-router-dom';
import {projectsData} from './fakedata';


//intializing selectedSupplier
interface selectedSupplierData {
  projectId : string,
  id: number;
  image: string;
  vehicleCount: number;
  modelCount: number;
  productCount: number;
  openIssues: number;
  closedIssues: number;
  onTrack: number;
  behind: number;
}

//for project 

interface Projects {
  projectID: string,
  name: string,
  id: number;
  image: string;
  supplierCount: number;
  productCount: number;
  openIssues: number;
  closedIssues: number;
  onTrack: number;
  behind: number;
}



function Selectedsuppliers(): JSX.Element {
  const {projectID} = useParams <{projectID: string}>();
  //filter supplier based on project ID
  const filteredSuppliers = selectedSupplierData.filter(
    (supplier) => supplier.projectId === projectID
  );

  //grab the project based on projectID
  const filteredProject = projectsData.filter(
    (project) => project.projectID === projectID
  );
  //use state for projectsData.
  const [suppliers, setSuppliers] = useState<selectedSupplierData[]>(filteredSuppliers);

  const handleDelete = (id: number) => {
    // delete project with the given id
    const newSupplier = suppliers.filter(supplier => supplier.id !== id);
    setSuppliers(newSupplier);
  };
  if(suppliers.length === 0) {
      return <div>You have no suppliers </div>
  }

  const handleEdit = (id: number) => {
    // edit project with the given id
  };

  return (
    <div className="projects">
      <div className="projectcontent">
        <h1> Project:  {filteredProject[0].name}</h1>
        <br />
        <br />
        <h1 className= 'heading'>Suppliers</h1>
        {suppliers.map((supplier) => (
          <div className="content" key={supplier.id}>
            <h1 className='image'>{supplier.image}</h1>
            <div className="info">
              <li>
                {supplier.vehicleCount} Vehicles
              </li>
              <li>
                {supplier.modelCount} Models
              </li>
              <li>
                {supplier.productCount} Products
              </li>
            </div>
            <div className="Issues">
              <h1>Issues</h1>
              <li>
                Open- {supplier.openIssues}
              </li>
              <li>
                Closed- {supplier.closedIssues}
              </li>
            </div>
            <div className="delivarydate">
              <h1>Delivery Date</h1>
              <li>
                {supplier.onTrack} On Track
              </li>
              <li>
                {supplier.behind} Behind
              </li>
            </div>
            <div className="alert">
              <button>
                <h1>Alerts</h1>
              </button>
            </div>
            <div className="buttons">
              <Link to={`autoparts/${supplier.id}`}>
                <li>
                  <button>
                    View Parts
                  </button>
                </li>
              </Link>
            </div>
            <div className="buttons">
              <li>
                <button onClick={() => handleEdit(supplier.id)}>
                  Edit
                </button>
              </li>
              <li>
                <button onClick={() => handleDelete(supplier.id)}>
                  Delete
                </button>
              </li>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Selectedsuppliers;
