import s from "./index.module.css";

function TitleCard(props) {
    const {
        title = "",
        border = true,
        subTitle = "",
        className = ""
    } = props;

    return (
        <div className={className}>
            <h2>{title}</h2>
            { subTitle && <h6>{subTitle}</h6> }
            { border && <div className={s.border} /> }
        </div>
    )
}

export default TitleCard;