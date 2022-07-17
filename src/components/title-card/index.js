// import s from "./index.module.css";

function TitleCard(props) {
    const {
        title = "",
        subTitle = "",
        className = ""
    } = props;

    return (
        <div className={className}>
            <h2>{title}</h2>
            { subTitle && <h6>{subTitle}</h6> }
        </div>
    )
}

export default TitleCard;