import React, {useEffect, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import { Box,IconButton } from '@mui/material';
import { Update } from "@mui/icons-material";




function Header() {

    function updateWidth(){
        if(window.innerWidth>768){
            console.log(window.innerWidth)
            setToggle(true);
        }
    }
    window.addEventListener('resize',updateWidth);
    const pages =["home","about","skills","projects"]

    const [toggle ,setToggle] = useState(true);
    return (
        <header className="nav">
            <div className="n-left">
                <div className="menuButton">
                    <IconButton onClick={()=>setToggle(!toggle)} size="large"><MenuIcon color="black"/></IconButton>
                </div>
                <Box sx={{display: toggle ? "content" : "none"}} className="n-list">
                    <ul>
                    {/* {pages.map((item,index)=>(
                                <li key={`link-${item}`} className="s-item">
                                    <Link to={item}  smooth={true}  >
                                        {item}
                                    </Link>
                                </li>
                            ))} */}
                        <li >
                            <a href="#home"  duration={300}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about"  duration={300}>
                                About me
                            </a>
                        </li>
                        <li>
                            <a href="#skills"  duration={300}>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects"  duration={300}>
                                Projects
                            </a>
                        </li>
                    </ul>
                </Box>
            </div>
            <div className="n-right">
                <button className="button n-button"><a href="#contact"  duration={300}>
                Contact me
                            </a></button>
            </div>
        </header>
    );
}

export default Header;