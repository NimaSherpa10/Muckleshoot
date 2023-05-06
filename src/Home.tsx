//import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import Verticalbar from "./Verticalbar";
import Projects from "./Projects";

function Home() {
  //const location = useLocation();
  //const username = new URLSearchParams(location.search).get('username');

  return (
    <>  
          <Navbar />
           <Verticalbar  />
           <Projects />
    </>
           
  );
}

export default Home;
