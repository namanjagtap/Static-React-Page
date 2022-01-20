import React from "react"
import profilePhoto from "../images/profile_image-removebg-preview.png"
import mailIcon from "../images/Icon.png"
import LInIcon from "../images/Vector.png"

export default function Info(){
    return(
        <div className="info">
            <img src={profilePhoto} className="info--profile"/>
            <h1>Naman Jagtap</h1>
            <h3>Frontend Developer</h3>
            <a href="www.namanjagtap.com">jagtapnaman.website</a>
            <div className="info--button">
                <button href="namanjagtap05@gmail.com" className="info--btn-email" >
                    <img src={mailIcon} />
                    Email
                    </button>
                <button className="info--btn-linkedIn">
                    <a href="https://www.linkedin.com/in/naman-jagtap-1688891ba/" target="_blank"></a>
                    <img src={LInIcon} />
                    LinkedIn</button>
            </div>
        </div>
    )
}