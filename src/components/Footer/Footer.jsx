import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="mt-12">
           <footer className="footer items-center p-4 bg-gray-900 text-neutral-content">
  <aside className="items-center grid-flow-col">
   <img className="h-10 w-12" src="https://i.ibb.co/jgB0fHG/image.png" alt="" />
    <p>Copyright © Sumitra - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a href="https://www.linkedin.com/in/sumitra-paul-400065285/">
   <FaLinkedinIn className="text-xl text-blue-500"></FaLinkedinIn>
    </a>
    <a href="https://github.com/sumitrapaul"><FaGithub className="text-xl"></FaGithub></a>
  </nav>
</footer> 
        </div>
    );
};

export default Footer;