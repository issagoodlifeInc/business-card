import React from "react";
import profileImg from '../images/pass.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Info() {
    return (
        <div className="info">
           <img className= 'profile_img' src={profileImg} alt="Lesley" />
        <h1 className="card--header">Lesley Kimutai</h1>
        <h4 className="card--title">Frontend Developer</h4>
        <h5><a className="card--website" href="https://leskimfamily.herokuapp.com/lesley">leskim.website</a></h5>

        <div className="links">
            <a href="mailto:leskimuti@gmail.com" className="link email"><FontAwesomeIcon icon={solid('envelope')}/> Email</a>
            <a href="https://www.linkedin.com/in/leskim/" className="link linkedIn"><FontAwesomeIcon icon={brands('linkedin')}/> LinkedIn</a>
            </div>     
        </div>
        
    )
}