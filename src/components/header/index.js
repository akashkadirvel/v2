import { useEffect, useState } from "react";
import Logo from "../../assets/akLogo.png";
import s from "./index.module.css";

function Header() {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        if( 
            (window.scrollY && !scrollY) ||
            (!window.scrollY && scrollY)
        ){
            setScrollY(window.scrollY);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    });

    let links = [
        "home", "about", "service", "portfolio", 
        "testimonial", "blog", "contact"
    ];

    return (
        <header 
            data-scroll={scrollY}
            className={s.akNav} 
        >
            <div className={s.akHeader}>
                <a 
                    href="./" 
                    className={s.akHeaderImageLink}
                >
                    <img 
                        alt={"AK"}
                        src={Logo} 
                        className={s.akHeaderImage} 
                    />
                </a>
                <ul className={s.akNavLinks}>
                    {
                        links.map((item) => (
                            <li className={s.akNavItem}>
                                <a href={`#${item}`}>{item}</a>
                            </li> 
                        ))
                    }
                </ul>
                <button>
                    LOGIN
                </button>
            </div>
        </header>
    );
}

export default Header;