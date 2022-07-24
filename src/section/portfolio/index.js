import TitleCard from "../../components/title-card";
import data from "../../data.json";
import s from "./index.module.css";
import images from "../../assets";
import { useState } from "react";

function Portfolio() {
    const [active, setActive] = useState("");
    const { portfolio } = data;

    const getPortfolioContent = () => {
        let contents = portfolio.content;
        if(active){
            contents = contents.filter(
                (item) => item.value === active
            );
        }

        return (
            <>
                {
                    contents.map((item) => (
                        <a 
                            href={item.link} 
                            className={s.portfolios}
                            rel={"noopener noreferrer"}
                            target={
                                item.link.startsWith("#") ? 
                                    "_self" : 
                                    "_blank"
                            }
                        >
                            <img 
                                src={images[item.src]} 
                                alt={item.title || ""} 
                                title={item.title || ""}
                                className={s.portfolioImage}
                            />
                        </a>
                    ))
                }
            </>
        )
    }
    
    return (
        <section id="portfolio">
            <div className={`container`}>
                <TitleCard 
                    title = "My Portfolio"
                    className = {s.titleCard}
                    subTitle = "I love what I do. I take great pride in what I do."
                />
                <div className={s.portfolioArea}>
                    {
                        portfolio.categories.map((item) => (
                            <button
                                disabled = {item.value === active}
                                onClick={() => setActive(item.value)}
                                className = { 
                                    `${s.catButtons} ${
                                        item.value === active ? 
                                            "active" : "" 
                                    }`
                                }
                            >
                                {item.label}
                            </button>
                        ))
                    }
                </div>
                <div className={s.portfolioArea}>
                    { getPortfolioContent() }
                </div>
            </div>
        </section>
    );
}

export default Portfolio;