import prev from "./img/prev.svg"
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={className}
            style={{...style, display: "block"}}
            onClick={onClick}
        >
            <img src={prev} alt=""/>
        </button>
    );
}

export default PrevArrow