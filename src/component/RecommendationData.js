
import "./RecommendationStyle.css"

function RecommendationData(props){
    return(
        <div className="r-card">
            <div className="r-image">
                <img src={props.image} alt="Hunter"/>
            </div>
            <h4>{props.heading}</h4>
            <p className="r-card-text">{props.text}</p>
            <div className="r-card-button-links">

            <button>
                        <a href={props.link1} target="blank">{props.name1} </a>

            </button>
            <button>

                        <a href={props.link2} target="blank">{props.name2} </a>
            </button>
            <button>

                        <a href={props.link3} target="blank">{props.name3} </a>
            </button>

            </div>
        </div>
    );
}

export default RecommendationData;