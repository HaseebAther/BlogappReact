import {NavLink} from 'react-router-dom'
import {nvilink} from './nvlink'
const Header = () => {


  return (
    <>
    <header>
      <nav className="navbar p-3 border border-black w-full flex justify-around items-center ">
      
        <div className="logo ">
        <NavLink
        to="/">
        <h1 className='font-mono text-3xl font-bold  '>Logo<span className='text-orange-500'>.</span></h1>
        </NavLink>  
        </div>
        <div className="nav-links">
          <ul className="flex space-x-4">
                  </ul>
        </div>  
        <div className="btnlog">
           <NavLink to= "/login" 
          className= {({isActive})=> 
            isActive ?  " bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded " 
                      : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        }
          >
          {({ isActive }) => (isActive ? "Logout" : "Login")}
          </NavLink>


        </div>
      </nav>
    </header>
    </>
  );
};

export default Header;