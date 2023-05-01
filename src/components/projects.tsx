import React, { useState } from 'react';
import { IoMdNotifications, IoMdSettings, IoMdPerson } from 'react-icons/io';
import '../css/projects.css';
import { Link } from 'react-router-dom';
import { projectsData } from './fakedata';
import { selectedSupplierData } from './fakeSuppliers';

//intializing project
interface Project {
  id: number;
  name: string;
  image: string;
  supplierCount: number;
  productCount: number;
  openIssues: number;
  closedIssues: number;
  onTrack: number;
  behind: number;
}

function Projects(): JSX.Element {
  //use state for projectsData.
  const [projects, setProjects] = useState<Project[]>(projectsData);

  const handleDelete = (id: number) => {
    // delete project with the given id
    const newProjects = projects.filter(project => project.id !== id);
    setProjects(newProjects);
  };
  if(projects.length === 0) {
      return <div>Wecome to MuckeShoot </div>
  }

  const handleEdit = (id: number) => {
    // edit project with the given id
  };

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectcontent">
        {projects.map((project) => (
          <div className="content" key={project.id}>
            <h1 className='image'>{project.image}</h1>
            <div className="info">
              <li>
                {project.supplierCount} Suppliers
              </li>
              <li>
                {project.productCount} Products
              </li>
            </div>

            <div className="Issues">
              <h1>Issues</h1>
              <li>
                Open {project.openIssues}
              </li>
              <li>
                Closed {project.closedIssues}
              </li>
            </div>
            <div className="delivarydate">
              <h1>Delivery Date</h1>
              <li>
                {project.onTrack} On Track
              </li>
              <li>
                {project.behind} Behind
              </li>
            </div>
            <div className="alert">
              <button>
                <h1>Alerts</h1>
              </button>
            </div>
            <div className="buttons">
              <Link to={`projects/selectedsuppliers/${project.id}`}>
                <li>
                  <button>
                    Suppliers
                  </button>
                </li>
              </Link>
              <Link to = {`projects/selectedautoparts/${project.id}`} >
                <li>
                  <button>
                   Auto Parts
                  </button>
                </li>
                </Link>
            </div>
            <div className="buttons">
              <li>
                <button onClick={() => handleEdit(project.id)}>
                  Edit
                </button>
              </li>
              <li>
                <button onClick={() => handleDelete(project.id)}>
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

export default Projects;
