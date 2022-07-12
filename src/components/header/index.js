import styles from "./index.module.css";
import Logo from "../../assets/logo.png";

function Header() {

    let links = ["home", "about", "service", "portfolio", "testimonial", "blog", "contact"];

    return (
        <header className={styles.akNav}>
            <div className={styles.akHeader}>
                <a href="./" className={styles.akHeaderImageLink}>
                    <img src={Logo} className={styles.akHeaderImage}/>
                </a>
                <ul className={styles.akNavLinks}>
                    {links.map((item) => (
                        <li className={styles.akNavItem}>
                            <a href={`#${item}`}>{item}</a>
                        </li> 
                    ))}
                </ul>
                <button>
                    LOGIN
                </button>
            </div>
        </header>
    );
}

export default Header;