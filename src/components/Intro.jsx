import React from "react"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profile from "../imgs/profile.jpg"

import Content from "./Content";


function Intro(){



    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-info">
                    <img src={profile} alt="" />
                    <h2>Hi I am</h2>
                    <h2>Hari Krishna Sai Uppalapati</h2>
                    <p>
                        Full stack Web Developer with good level of experience in web designing and development, producting the Quality work
                    </p>
                    <button className="i-btn">Download CV</button>
                    <div className="blur"></div>
                </div>
                <div className="i-icons">
                    <a href="https://github.com/Hari1122-code" target="_blank"><GitHubIcon style={{ color: "orange" }}  /></a>
                    <a href="https://www.linkedin.com/in/hari-krishna-sai-uppalapati-497285212/" target="_blank"><LinkedInIcon style={{ color: "orange" }} fontSize="large"/></a>
                </div>
            </div>
            <div className="i-right">
                <Content/>
            </div>
        </div>
    );
}

export default Intro;
