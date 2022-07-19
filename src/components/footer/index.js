import Logo from "../../assets/akLogo.png";
import s from "./index.module.css";
import data from "../../data.json";
import { 
    FaSkype,
    FaGithub,
    FaWhatsapp,
    FaLinkedinIn,
    FaCalendarCheck
} from "react-icons/fa";

function Footer(props) {

    let socialIcons = [
        {Component: FaSkype, link : data.socialLinks.skype},
        {Component: FaGithub, link : data.socialLinks.github},
        {Component: FaWhatsapp, link : data.socialLinks.whatsapp},
        {Component: FaLinkedinIn, link : data.socialLinks.linkedin},
        {Component: FaCalendarCheck, link : data.socialLinks.calendly},
    ];

    return (
        <footer>
            <img src={Logo} alt={""} className={s.akHeaderImage}/>
            <ul className={s.social_icon}>
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
            <p>
                {data.copyright}
                <a 
                    target={"_blank"}
                    href={"https://github.com"}
                    rel={"noopener noreferrer"}
                >
                    Github
                </a>
            </p>
        </footer>
    )
}

export default Footer;