import React, { useState } from 'react';
import { IoMdNotifications, IoMdSettings, IoMdPerson, IoMdClose } from 'react-icons/io';
import '../css/addnewproject.css';
import { Link } from 'react-router-dom';

function AddProject(): JSX.Element {
  const [isClosed, setIsClosed] = useState(false);

  function handleClose() {
    setIsClosed(true);
  }

  return (
    <div className={`container ${isClosed ? 'closed' : ''}`}>
      {!isClosed && (
        <button className="closeButton" onClick={handleClose}>
          <IoMdClose className="closeIcon" />
        </button>
      )}
      <form>
        <label htmlFor="projectName">Project Name:</label>
        <input type="text" id="projectName" name="projectName" />
        <br />
        <label htmlFor="githubid"> GithubID: </label>
        <input type="text" id="githubid" name="GithubID" />
        <br />
        <label htmlFor="jfrog">JfrogId: </label>
        <input type="text" id="jfrogId" name="jfrogid" />
        <br />
        <label htmlFor="button"> </label>
        <Link to="/">
          <button type="submit">Add Project</button>
        </Link>
      </form>
    </div>
  );
}

export default AddProject;

