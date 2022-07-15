import image from '../../assets/akBanner.jpg';
import WaterWave from 'react-water-wave';
import React from "react";
import "./index.css";

function Banner (props) {
    return (
        <section id="home">
            <WaterWave 
                strength={500} 
                imageUrl={image}
                className={`banner_area`}
            >
                {({ getRootProps}) => (
                    <div className="container">
                        <div className={`banner_content`}>
                            
                        </div>
                    </div>
                )}
            </WaterWave>
        </section>
    )
}

export default Banner;