import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { autoPartsData } from '../components/fakeautoparts';
import '../css/selectedautoparts.css';
import {projectsData} from './fakedata';

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
function SelectedViewParts(): JSX.Element {
  const {projectID} = useParams <{projectID: string}>();

  // Filter autoparts based on the selected supplier's project ID
  const filteredAutoParts = autoPartsData.filter(
    (autopart) => autopart.projectId === projectID
  );
  const filteredProject = projectsData.filter(
    (project) => project.projectID === projectID
  );
    console.log(filteredAutoParts);
  // Use state for autoparts data
  const [autoParts, setAutoParts] = useState<AutoPart[]>(filteredAutoParts);

  const handleDelete = (id: number) => {
    // Delete autopart with the given id
    const newAutoParts = autoParts.filter((autopart) => autopart.id !== id);
    setAutoParts(newAutoParts);
  };

  if (autoParts.length === 0) {
    return <div>You have no autoparts</div>;
  }

  return (
    <div>
       <h1> Project: {filteredProject[0].name}</h1>
        <br />
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

export default SelectedViewParts;

