import resume from "../../assets/Akash_Kadirvel_Resume.pdf";
import TitleCard from "../../components/title-card";
import s from "./index.module.css";
import data from "../../data.json";

function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className={s.leftContainer}>
                        <TitleCard 
                            title = "About Me"
                            border = { false }
                            subTitle = "Front End Developer"
                        />
                        <p className={s.aboutMeContent}>
                            {data.about}
                        </p>
                        <div className={`row`}>
                            <a 
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                                href={data.socialLinks.calendly}
                            >
                                <button className={s.cta}>
                                    Hire me
                                </button>
                            </a>
                            <a 
                                href={resume} 
                                target={"_blank"} 
                                rel={"noopener noreferrer"}
                            >
                                <button className={s.cta} >
                                    Download CV
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className={s.rightContainer}>
                        <img
                            alt={"AK"}
                            className={s.rightImage}
                            src={require("../../assets/me.png")} 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;