import { Link } from "react-router-dom";


const Navbar = () => {

  const navLinks = (
    <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/skills'>Skills</Link></li>
    <li><Link to='/projects'>Projects</Link></li>
    <li><Link to='/about'>About Me</Link></li>
    <li><Link to='/contact'>Contact Me</Link></li>
    </>
  )
    return (
        <div>
           <div className="navbar bg-gray-900">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 md:text-white rounded-box w-52">
      {navLinks}
      </ul>
    </div>
    <img className="h-10 w-12 mr-3" src="https://i.ibb.co/jgB0fHG/image.png" alt="" />
    <h3 className="text-3xl text-white">Port<span className="text-red-800">Folio</span></h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
     {navLinks}
    </ul>
  </div>
 
</div> 
        </div>
    );
};

export default Navbar;