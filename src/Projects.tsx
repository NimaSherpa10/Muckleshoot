import React, { useState } from 'react';
import deletepng from './assets/delete.png';
import { projectsData } from './fakedata';
import { Link } from 'react-router-dom';
import checkMark from './assets/checkmark.png';
import expand from './assets/expand.png';
import decreaseArrow from './assets/decrease.png';
import increaseArrow from './assets/increase.png';



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
    alerts:number;
}

function Projects():JSX.Element {
    const [projects, setProjects] = useState<Project[]>(projectsData);

    const handleDelete = (id: number) => {
    // delete project with the given id
        const newProjects = projects.filter(project => project.id !== id);
        setProjects(newProjects);
    
    };


    if(projects.length === 0) {
            return <div>Wecome to MuckeShoot </div>
    }



    return(
        <>
        {projects.map((project) => (
        <div className="p-4 sm:ml-64">
        <div className="flex  list-none justify-between items-center h-48 rounded bg-gray-50 dark:bg-gray-100 ">
          <div className = "flex" key={project.id}>
          <div className="relative px-4 my-10">
            <h1 className="absolute -top-10 left-0 px-4 text-bold text-black">{project.name}</h1>
            <img className="w-30 h-20 bg-transparent " src={project.image} alt="car" />
        </div>


            <div className="">
              <li className = "text-gray-500 my-10">
                {project.supplierCount} Suppliers
              </li>
              <li className = "text-gray-500 my-5">
                {project.productCount} Products
              </li>
            </div>
            </div>
            <div className="relative rounded h-40 w-30 border-2 border-gray-200">
                    <img
                        src={expand}
                        alt="Expand"
                        className="absolute top-0 right-0 m-2 h-6 w-6 hover:scale-150"
                    />
                    <h1 className="mx-14 px-8 font-bold">Issues</h1>

                    <div className="flex items-center my-8 mx-12">
                        <span className="text-gray-500">Open</span>
                        <span className="text-sm text-gray-500 ml-2 mv px-6">
                        {project.openIssues}
                        </span>
                        <img src={increaseArrow} alt="Decrease" className="h-4 mr-2 mx-6 " />
                    </div>

                    <div className="flex items-center mx-12">
                        <span className="text-gray-500">Closed</span>
                        <span className="text-sm text-gray-500 ml-2 px-3">
                        {project.closedIssues}
                        </span>
                        <img src={decreaseArrow} alt="Increase" className="h-4 w-4 mr-2 mx-8  " />
                    </div>
            </div>

            <div className=" relative rounded h-30 w-30  border-2 border-gray-200  ">
                <img
                    src={expand}
                    alt="Expand"
                    className="absolute top-0 right-0 m-2 h-6 w-6 hover:scale-150"
                />
                <h1 className= 'mx-10 font-bold px-3 '>Delivery Date</h1>
                <div className="flex items-center my-8 mx-12">
                        <span className="text-gray-500">On Track </span>
                        <span className="text-sm text-gray-500 ml-2 mv px-2">
                            {project.onTrack}
                        </span>
                        <img src={increaseArrow} alt="Decrease" className="h-4 mr-2 mx-8  " />
                    </div>
            
                <div className="flex items-center my-8 mx-12">
                     <span className="text-gray-500 mx-1" > Behind </span>
                     <span className="text-sm text-gray-500 ml-2 px-3">
                              {project.behind}
                     </span>
                          <img src={decreaseArrow} alt="Decrease" className="h-4 mr-2 mx-8  " />
                        </div>

                         </div>
                <div className="relative rounded h-40 w-40 border-2 border-gray-200">
                <button>
                    <h1 className="mx-12 my-8 font-bold">Alerts</h1>
                    <li className='mx-10 text-gray-500 text-lg font-bold'>
                     {project.alerts}
                    </li>
                        {project.alerts <= 0 && (
                            <img
                                src={checkMark} // replace with the actual path to the image
                                alt="Green Check Mark"
                                className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 h-8 w-8"
                            />
                     )}
                     {project.alerts > 0 && (
                        <span className="absolute mx-2 mb-3 text-3xl top-0 right-0 transform translate-x-1/3 -translate-y-1/3 text-red-500">
                            !
                    </span>
                )}
                </button>
            </div>

            <div>
              <Link to={`${project.id}`}>
                <li>
                  <button className="block my-6 mx-auto w-32  justify-center rounded-md bg-cyan-600 py-1 text-center font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
                    Suppliers
                  </button>
                </li>
              </Link>
              <Link to = {`/${project.id}`} >
                <li>
                  <button className="block mx-auto w-32  justify-center rounded-md bg-cyan-600 py-1 text-center font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
                   Auto Parts
                  </button>
                </li>
                </Link>
            </div>
            <div className="relative mx-2">
                <button className= 'absolute -right-4 -left-2  my-3 -top-28' onClick={() => handleDelete(project.id)}>
                    <img src={deletepng} alt="Delete" className="h-5 hover:scale-150" />
                </button>
            </div>

        </div>
        </div>
          ))}
          </>
    );
}

export default Projects;