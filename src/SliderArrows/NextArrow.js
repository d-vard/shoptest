import next from "./img/next.svg"
function NextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <button
            className={className}
            style={{...style, display: "block"}}
            onClick={onClick}
        >
            <img src={next} alt=""/>
        </button>
    );
}

export default NextArrow
