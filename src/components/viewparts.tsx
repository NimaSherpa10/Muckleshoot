import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { autoPartsData } from '../components/fakeautoparts';
import '../css/selectedautoparts.css';
import {projectsData} from './fakedata';
import { selectedSupplierData } from './fakeSuppliers';
import Suppliers from './suppliers';

interface AutoPart {
  id: number;
  projectId: string;
  Image: string;
  name: string;
  company: string;
  partNumber: string;
  openIssues: number;
  closedIssues: number;
}
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

//function of the slecected suppliers auto parts
function ViewParts(): JSX.Element {
  const {projectID} = useParams <{projectID: string}>();

  // Filter autoparts based on the selected supplier's project ID
  const filteredAutoParts = autoPartsData.filter(
    (autopart) => autopart.projectId === projectID
  );

  const filteredProject = projectsData.filter(
    (project) => project.projectID === projectID
  );
  console.log(filteredProject);

  //suppliers filtered with the projectID
  const filteredSuppliers = selectedSupplierData.filter(
    (supplier) => supplier.projectId === projectID
  );
  console.log(filteredSuppliers);


  //handling which supplier is it by its id
  const [selectedSupplierIndex, setSelectedSupplierIndex] = useState<number>(0);

  const handleSupplierClick = (index: number) => {
    // Update the selected supplier index to the clicked index
    setSelectedSupplierIndex(index);
  };

    // Use the selected supplier index to access the selected supplier's information
    const selectedSupplier = filteredSuppliers[selectedSupplierIndex];


  // Use state for autoparts data
  const [autoParts, setAutoParts] = useState<AutoPart[]>(filteredAutoParts);

  const handleDelete = (id: number) => {
    // Delete autopart with the given id
    const newAutoParts = autoParts.filter((autopart) => autopart.id !== id);
    setAutoParts(newAutoParts);
  };

  if (autoParts.length === 0) {
    return <div>
        <h1>Project : {filteredProject[0].name}</h1>
            <p>You have no autoparts</p>
        </div>;
  }

  return (
    <div>
        <h1>Project: {filteredProject[0].name}</h1>
        <br />
        <h1>Supplier : {selectedSupplier.id}</h1>
        <br />
      <h1 className= 'heading'>Parts</h1>
    <div className="selected-parts">
      <br />
      {autoParts.map((autopart) => (
        <div className="autopart" key={autopart.id}>
          <div className="alert">!</div>
          <h2 className='partname'>{autopart.name}</h2>
          <p className= 'image'>{autopart.Image}</p>
          <p className= 'companyname'>{autopart.company}</p>
          <p className='partNumber'>Part# {autopart.partNumber}</p>
          <p className= 'openIssues'>Open {autopart.openIssues}</p>
          <p className= 'closedIssues'>Closed {autopart.closedIssues}</p>
          <div className="buttons">
            <Link to={`/selectedautoparts/${autopart.id}`}>
              <button>View Info</button>
            </Link>
            <button onClick={() => handleDelete(autopart.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ViewParts;

