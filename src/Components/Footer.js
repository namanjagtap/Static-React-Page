import React from "react"
import Ticon from "../images/Twitter_Icon.png"
import Fbicon from "../images/Facebook_Icon.png"
import Igicon from "../images/Instagram_Icon.png"
import Giticon from "../images/GitHub_Icon.png"

export default function Footer(){
    return(
        <footer>
            <a href="twitter.com"><img src={Ticon} /></a>
            <a href="facebook.com"><img src={Fbicon} /></a>
            <a href="instagram.com"><img src={Igicon} /></a>
            <a href="github.com"><img src={Giticon} /></a>
        </footer>
    )
}