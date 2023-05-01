import React from 'react';
import'../css/verticalbar.css';
import {Link} from 'react-router-dom';
import { ReactComponent as GithubLogo } from '../assets/github.svg';
import { ReactComponent as SlackLogo } from '../assets/slack.svg';
import { ReactComponent as JiraLogo } from '../assets/jira.svg';

/** 
 * This function will create a Vertical Navbar component.
 * @return Navbar
 */
function Verticalbar(): JSX.Element {
  return (
    <div className="wrapper">
      <div className="verticalbar">
        <ul className="elements">
          <Link to="/addproject">
            <button className="addnew"> Add new Projects</button>
          </Link>
          <li>
            <Link to="/" className="projects">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/suppliers" className="suppliers">
              Suppliers
            </Link>
          </li>
          <li>
            <Link to="/autoparts" className="autoparts">
              Auto Parts
            </Link>
          </li>
        </ul>
        <div className="logos">
          <JiraLogo className="logo" />
          <SlackLogo className="logo" /> 
          <GithubLogo className="logo" />
          
          
        </div>
      </div>
    </div>
  );
}

export default Verticalbar;
