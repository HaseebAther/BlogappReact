import {NavLink} from "react-router-dom"
const nvilink = ({to='home', nk='Blog'}) => {

  return (
    <>
      <li className="text-lg hover:text-blue-500">
            <NavLink
              to={`/${to}`}
              className={({ isActive }) =>
                isActive ? "text-blue-700 text-lg hover:text-blue-500" : "text-white text-lg hover:text-blue-500"
              }
            >
              {nk}
            </NavLink>
        </li>
    </>
  );
};

export default nvilink;