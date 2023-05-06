

import { useState } from 'react';
import jiraSvg from './assets/jira.svg';
import githubSvg from './assets/github.svg';
import slackSvg from './assets/slack.svg';
import { Link } from 'react-router-dom';

function VerticalBar(): JSX.Element {
  const [activeItem, setActiveItem] = useState('Projects');

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto bg-gray-50">
          <ul className="space-y-2 font-medium">
            <li>
              <Link to
                ="/Home"
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 ${
                  activeItem === 'Projects' ? 'bg-gray-200' : ''
                }`}
                onClick={() => handleItemClick('Projects')}
              >
                <span className="ml-3">Projects</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 ${
                  activeItem === 'Suppliers' ? 'bg-gray-200' : ''
                }`}
                onClick={() => handleItemClick('Suppliers')}
              >
                <span className="ml-3">Suppliers</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 ${
                  activeItem === 'AutoParts' ? 'bg-gray-200' : ''
                }`}
                onClick={() => handleItemClick('AutoParts')}
              >
                <span className="ml-3">AutoParts</span>
              </a>
            </li>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0">
                      Add new project
                </span>
              </button>
          </ul>
          <ul className="fixed bottom-10 left-0 my-4 mx-10">
            <li className="inline-block mx-2">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 hover:scale-125"
              >
                <img src={jiraSvg} alt="Jira" className="h-6 w-6" />
              </a>
            </li>
            <li className="inline-block mx-2 ">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 hover:scale-125"
              >
                <img src={githubSvg} alt="GitHub" className="h-6 w-6" />
              </a>
            </li>
            <li className="inline-block mx-2">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 hover:scale-125"
              >
                <img src={slackSvg} alt="Slack" className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default VerticalBar;



