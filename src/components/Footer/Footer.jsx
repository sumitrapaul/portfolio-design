import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="mt-12">
           <footer className="footer footer-center p-4 bg-cyan-600 text-neutral-content">
  <aside>
  <img className="h-10 w-12" src="https://i.ibb.co/jgB0fHG/image.png" alt="" />
  <nav className="grid grid-flow-col gap-4">
    <a className="font-bold" href="/education">Education</a>
    <a className="font-bold" href="/skills">Skills</a>
    <a className="font-bold" href="/projects">Projects</a>
    <a className="font-bold" href="/about">About</a>
    <a className="font-bold" href="/contact">Contact</a>
  </nav>
   
  </aside> 

 
    <nav className="flex justify-center items-center gap-4">
    <a href="https://www.linkedin.com/in/sumitra-paul-400065285/">
   <FaLinkedinIn className="text-xl text-blue-900"></FaLinkedinIn>
    </a>
    <a href="https://github.com/sumitrapaul"><FaGithub className="text-xl"></FaGithub></a>
  </nav>
  <p>Copyright © Sumitra - All rights reserved</p>

</footer>
        </div>
    );
};

export default Footer;