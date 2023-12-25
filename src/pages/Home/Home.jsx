import Academic from "../../components/Academic/Academic";
import Banner from "../../components/Banner/Banner";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";



const Home = () => {
    return (
        <div>
       
           <Banner></Banner>
           <Academic></Academic>
           <Skills></Skills>
           <Projects></Projects>
           <About></About>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;