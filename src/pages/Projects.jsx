import React from "react";
import project_1 from "../imgs/project_1.png"
function Projects(){
        const projects =[
            { name:"Convo Room", description:"A Responsive Full Stack Meeting web application that can host individual and group meets along with chats."},
            { name:"Ecommerce Website", description:"A Responsive Full Stack MERN Ecommerce web application with User and admin login pages."},
            { name:"Movie Store", description:"A Responsive web application used to search movies and show its details."},
            { name:"Blog Website", description:"A Responsive web application that allows us to write blogs and post them."},
            { name:"Resume Builder", description:"A Responsive web application used to create own resume for individual."},
        ]


    return(
        <>
            <h1>Projects</h1>
                <div className="projectsContent">
                    {projects.map((project,index)=>(
                        <div key={index} className="projectsContent-item">
                            <img src={project_1} alt="" srcSet="" />
                            <h2 className="pname">{project.name}</h2>
                            <p className="p-description" >{project.description}</p>
                        </div>
                    ))}
                </div>
        </>

    
    );
}

export default Projects;