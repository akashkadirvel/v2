import { useEffect, useState } from "react";
import Logo from "../../assets/akLogo.png";
import data from "../../data.json";
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

    const onConnect = () => {
        window.open(data.socialLinks[data.onConnect]);
    }

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
                        data.navLinks.map((item) => (
                            <li 
                                key={"navLinks_"+item}
                                className={s.akNavItem}
                            >
                                <a href={`#${item}`}>{item}</a>
                            </li> 
                        ))
                    }
                </ul>
                <button onClick={onConnect}>
                    CONNECT
                </button>
            </div>
        </header>
    );
}

export default Header;