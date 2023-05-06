import { IoMdNotifications, IoMdSettings } from 'react-icons/io';
import userImage from './assets/user.png';
import { useLocation } from 'react-router-dom';

function Navbar(): JSX.Element {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get('username');

 
  return (
    <nav className=" sticky top-0 bg-gray-800 py-3 px-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">MuckleShoot</h1>
      <ul className="flex text-white text-lg items-center ml-5">
        <li className="mr-5 px-5"><a href="#"><IoMdNotifications /></a></li>
        <li className="mr-5 px-5"><a href="#"><IoMdSettings /></a></li>
        <li className="user flex-shrink-0 relative">
          <img
            className="h-8 w-8 rounded-full"
            src={userImage}
            alt="User"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


