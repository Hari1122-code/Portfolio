import React, {useState,useRef, useEffect} from "react";
import Home from "../pages/Home"
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";
import HomeIcon from '@mui/icons-material/Home';
// import EducationIcon from '@mui/icons-material/School';
import AboutIcon from '@mui/icons-material/Person';
import ProjectsIcon from '@mui/icons-material/BusinessCenter';
import SkillsIcon from '@mui/icons-material/Lightbulb';
import PhoneIcon from '@mui/icons-material/Phone';
function Content(){
    const homeRef = useRef("home")
    const aboutRef = useRef("about")
    const skillsRef = useRef("skills")
    const projectsRef = useRef("projects")
    const contactsRef= useRef("contacts")
    const [active ,setActive] = useState()
    useEffect(()=>{
        const observer = new IntersectionObserver ((entries)=>{
            const entry =entries[0];
            
            if(entry.isIntersecting){
                setActive(entries[0].target.id)
            }
            
        },{threshold:0.2, rootMargin:"-100px"})
        observer.observe(homeRef.current);
        observer.observe(aboutRef.current);
        observer.observe(skillsRef.current);
        observer.observe(projectsRef.current);
        observer.observe(contactsRef.current);
        console.log(homeRef.current.id)
    },[])
    
    const items =[{path:"home",icon:<HomeIcon />},
                    {path:"about",icon:<AboutIcon />},
                    {path:"skills",icon:<SkillsIcon />},
                    {path:"projects",icon:<ProjectsIcon />},
                    {path:"contact",icon:<PhoneIcon />}]


    return(
        <>
            <div className="nav-menu">
                    <ul className="s-menuitems">
                {items.map((item)=>(
                                <li key={`link-${item.path}`} className="s-item " >
                                    <a className={active===item.path ? "active" : ""} href={`#${item.path}`}  duration={300} >
                                        <span>{item.icon}</span> <span className="sidebarpath">{item.path} </span>

                                    </a>
                                </li>
                            ))}
            </ul>
            </div>
            <div className="content" id="scrollContainer">
                <div ref={homeRef} id="home">
                    <Home />
                </div>
                <br />
                <hr />
                <div ref={aboutRef} id="about" >
                    <About/>
                </div>
                <br />
                <hr />
                <div ref={skillsRef} id="skills">
                    <Skills/>
                </div>
                <br />
                <hr />
                <div ref={projectsRef} id="projects">
                    <Projects/>
                </div>
                <br />
                <hr />
                <div ref={contactsRef} id="contact">
                    <Contacts/>
                </div>
            </div>
        </>

    );
}

export default Content;