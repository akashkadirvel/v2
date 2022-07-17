import Typer from "../../components/typing-effect";
import image from '../../assets/akBanner.jpg';
import WaterWave from 'react-water-wave';
import data from "../../data.json";
import React from "react";
import "./index.css";
import { 
    FaSkype,
    FaGithub,
    FaWhatsapp,
    FaLinkedinIn,
    FaCalendarCheck
} from "react-icons/fa";

function Banner (props) {

    let socialIcons = [
        {Component: FaSkype, link : data.socialLinks.skype},
        {Component: FaGithub, link : data.socialLinks.github},
        {Component: FaWhatsapp, link : data.socialLinks.whatsapp},
        {Component: FaLinkedinIn, link : data.socialLinks.linkedin},
        {Component: FaCalendarCheck, link : data.socialLinks.calendly},
    ];

    return (
        <section id="home">
            <WaterWave 
                strength={500} 
                imageUrl={image}
                className={`banner_area`}
            >
                {({ getRootProps}) => (
                    <div>
                        <div className={`banner_content`}>
                            <h2> {data.name} </h2>
                            <Typer dataText={data.positions} />
                            <ul className='social_icon'>
                                {
                                    socialIcons.map((item, index) => {
                                        const { link, Component } = item;
                                        return (
                                            <li key={"links_"+index}>
                                                <a 
                                                    href={link} 
                                                    target="_blank" 
                                                    rel='noreferrer noopener'
                                                >
                                                    <Component />
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                )}
            </WaterWave>
        </section>
    )
}

export default Banner;