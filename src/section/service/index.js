import TitleCard from "../../components/title-card";
import * as MdIcons from "react-icons/md";
import data from "../../data.json";
import s from "./index.module.css";
import React from "react";

function Service() {

    const getCard = ({
        icon = "",
        title = "",
        description = ""
    }) => {
        
        let Icon = MdIcons[icon];

        return (
            <div className={s.card}>
                <div className={s.iconArea}>
                    <Icon className={s.icon}/>
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        )
    }

    return (
        <section id="service">
            <div className={`container ${s.cnt}`}>
                <TitleCard 
                    title = "What I'm Doing"
                    className = {s.titleCard}
                    subTitle = "I love what I do. I take great pride in what I do."
                />
                <div className="row">
                    {
                        data.service.map((item) => {
                            return getCard(item);
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Service;