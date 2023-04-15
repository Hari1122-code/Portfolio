import React from "react";
import HomeIcon from '@mui/icons-material/Home';
// import EducationIcon from '@mui/icons-material/School';
import AboutIcon from '@mui/icons-material/Person';
import ProjectsIcon from '@mui/icons-material/BusinessCenter';
import SkillsIcon from '@mui/icons-material/Lightbulb';
import {useState} from "react"
// import Scroll from 'react-scroll'
// import { click } from "@testing-library/user-event/dist/click";
// const Link = Scroll.Link

function Sidebar(){
    
    const items =[{path:"home",icon:<HomeIcon />},
                  {path:"about",icon:<AboutIcon />},
                  {path:"skills",icon:<SkillsIcon />},
                  {path:"projects",icon:<ProjectsIcon />}]

    return(

            <ul className="s-menuitems">
                {items.map((item)=>(
                                <li key={`link-${item.path}`} className="s-item">
                                    <span>{item.icon}</span> <div className="sidebarpath">{item.path} </div>

                                </li>
                            ))}
            </ul>
            
    );
}

export default Sidebar;

// import React from "react";
// import HomeIcon from '@mui/icons-material/Home';
// // import EducationIcon from '@mui/icons-material/School';
// import AboutIcon from '@mui/icons-material/Person';
// import ProjectsIcon from '@mui/icons-material/BusinessCenter';
// import SkillsIcon from '@mui/icons-material/Lightbulb';
// import {useState} from "react"
// import Scroll from 'react-scroll'
// import { click } from "@testing-library/user-event/dist/click";
// const Link = Scroll.Link

// function Sidebar(){
    
//     const items =[{path:"home",icon:<HomeIcon />},
//                   {path:"about",icon:<AboutIcon />},
//                   {path:"skills",icon:<SkillsIcon />},
//                   {path:"projects",icon:<ProjectsIcon />}]

//     return(

//             <ul className="s-menuitems">
//                 {items.map((item)=>(
//                                 <li key={`link-${item.path}`} className="s-item">
//                                     <Link  offset={-10} spy={true} containerId="scrollContainer" to={item.path} smooth={true} duration={300} >
//                                         {item.icon} {item.path}
//                                     </Link>
//                                 </li>
//                             ))}
//             </ul>
            
//     );
// }

// export default Sidebar;

